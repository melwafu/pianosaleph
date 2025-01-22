import AdminLayout from '@/Admin/AdminLayout';
import { modalFunction } from '@/Admin/Helper';
import { useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Select from 'react-select'
import Toast from '@/Components/Toast';
import Pagination from '@/Components/Pagination';

function Children(products, category) {
    const modal = modalFunction('crud-modal');
    const [refresh, setRefresh] = useState(false);
    const [dataTable, setDataTable] = useState(products);
    const [selectedOption, setSelectedOption] = useState(null);
    const [toast, setToast] = useState({
        show: false,
        type: "",
        message:""
    });
    const {data, setData, post, put, errors, processing} = useForm({
        id: 0,
        name: "",
        description: "",
        price: null,
        product_category_id: null,
        product_category: null,
        image: null
    });

    // Refresh Table
    useEffect(() => {
        if(refresh) {
            setDataTable(products);
            setRefresh(false);
        }
    }, [refresh]);

    // Append null value in first load
    useEffect(() => {
        category.push({value: null, label: "Select..."})
    }, []);

    // Clear
    function clearData () {
        setData({
            id: 0,
            name: "",
            description: "",
            price: null,
            product_category_id: null,
            product_category: null,
            image: null
        });
        setSelectedOption({value: null, label: "Select..."});
        document.getElementById('file_input').value= null;
    };

    // Search
    function search(e) {
        e.preventDefault();
        post('/products/search', {
            preserveScroll: true,
            resetOnSuccess: false,
            onSuccess: (response) => {
                if(response.props.flash.data !== null) {
                    setDataTable(response.props.flash.data);
                } 
            }
        });
    };

    // Submit
    function submit(e) {
        e.preventDefault();
        post('/products', {  
            preserveScroll: true,
            resetOnSuccess: false,
            onSuccess: (response) => {
                if(response.props.flash.success !== null) {
                    modal.hide();
                    setToast({show: true, type: "success", message: response.props.flash.success});
                    setRefresh(true);
                    clearData();
                } else if (response.props.flash.error !== null) {
                    setToast({show: true, type: "error", message: response.props.flash.error});
                }
            }
        });
    };

    // Update
    function update(e) {
        e.preventDefault();
        put(`/products/${data.id}`, {  
            preserveScroll: true,
            resetOnSuccess: false,
            onSuccess: (response) => {
                if(response.props.flash.succes !== null) {
                    modal.hide();
                    setToast({show: true, type: "success", message: response.props.flash.success});
                    setRefresh(true);
                    clearData();
                } else if (response.props.flash.error !== null) {
                    setToast({show: true, type: "error", message: response.props.flash.error});
                }
            }
        });
    };

    // Open Modal
    function openModal() {
        clearData();
        modal.show();
    };

    // Close Modal
    function closeModal() {
        clearData();
        modal.hide();
    };

    // Edit
    function edit(item) {
        clearData();
        setData({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            product_category_id: item.product_category_id,
            product_category: item.product_category,
            image_path: item.image
        });
        setSelectedOption({
            value: item.product_category_id, 
            label: item.product_category
        });
        modal.show();
    };

    // Select on change
    function selectOnChange(option) {
        setData((prevState) => ({
            ...prevState,
            product_category_id: option.value,
            product_category: option.label
          }));
        setSelectedOption(option);
    };
    
    return(
        <>
            {/* Toast */}
            {toast.show && <Toast toast={toast} setToast={setToast}/>}

            <div className='container'>
                {/* <!-- Modal toggle --> */}
                <button 
                    className="block inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                    type="button"
                    onClick={() => openModal()}>
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Add
                </button>
                {/* <!-- Main modal --> */}
                <div id="crud-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {data.id > 0 ? "Edit Product" : "Create New Product"}
                                </h3>
                                <button 
                                    type="button" 
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                                    onClick={() => closeModal()}
                                    >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <form id="form" className="p-4 md:p-5" onSubmit={data.id > 0 ? update : submit} encType="multipart/form-data">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type category name"
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                        />
                                        {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
                                    </div>

                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input 
                                            type="number" 
                                            name="price" 
                                            id="price" 
                                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                            placeholder="&#8369;2999" 
                                            value={data.price !== null ? data.price : ""}
                                            onChange={(e) => setData("price", e.target.value)}
                                        />
                                        {errors.price && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.price}</p>}
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <Select 
                                            value={selectedOption}
                                            onChange={(option) => selectOnChange(option)}
                                            options={category} 
                                        />
                                        {errors.product_category_id && <p className="mt-2 text-sm text-red-600 dark:text-red-500">The category field is required.</p>}
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                        <textarea 
                                            id="description" 
                                            rows="4" 
                                            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Write product description here"
                                            value={data.description !== null ? data.description : ""}
                                            onChange={(e) => setData("description", e.target.value)}
                                        > 
                                        </textarea>                    
                                    </div>
                                    <div className='col-span-2'>
                                        {data.id === 0 
                                            ?
                                                <>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Image</label>
                                                    <input 
                                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                                        aria-describedby="file_input_help" 
                                                        id="file_input" 
                                                        type="file" 
                                                        onChange={(e) => setData("image", e.target.files[0])}
                                                    />
                                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF.</p>
                                                    {errors.image && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.image}</p>}
                                                </>
                                            :
                                                <>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                                    <img className="h-25 w-72 max-w-lg mx-auto" src={data.image_path} alt="image description" />
                                                </>
                                        }

                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    disabled={processing}
                                >
                                    {data.id > 0 
                                        ? 
                                        "Update" 
                                        : 
                                        <>
                                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg> Add
                                        </>
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>

            <div className='container mt-5'>
                <div className="pb-4">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <form onSubmit={search}>
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <button type="submit">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </button>
                            </div>
                            <input 
                                type="text" 
                                id="table-search" 
                                className="block pt-2 ps-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Search for items" 
                                onChange={(e) => setData("name", e.target.value)}
                            />
                        </form>
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date Created
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.data && dataTable.data?.map(item => (
                                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <a 
                                            href="#" 
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => edit(item)}
                                        >Edit</a>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</td>
                                    <td className="px-6 py-4">{item.description}</td>
                                    <td className="px-6 py-4">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: 'PHP' })}</td>
                                    <td className="px-6 py-4">{item.product_category}</td>
                                    <td className="px-6 py-4">{new Date(item.created_at).toLocaleDateString("en-US")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <Pagination links={dataTable.links} />
            </div>
        </>
    )
}

function Products({products, category}) {
    const children = Children(products, category);
    return (
        <AdminLayout head="Products" children={children} />
    );
}

export default Products;