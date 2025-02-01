import ProductView from "./ProductView";
import { useState } from "react";
import { modalFunction } from "@/Admin/Helper";

const ProductList = ({products}) => {
    const [item, setItem] = useState([]);
    const modal = modalFunction('crud-modal');

    // On click
    function selectedItem(item) {
        modal.show();
        setItem(item);
    };

    function modalClose () {
        modal.hide();
    };
    
    const modalView = (
        <div className='container'>
            {/* <!-- Main modal --> */}
            <div id="crud-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Piano
                            </h3> */}
                            <button 
                                type="button" 
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-1 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                                    onClick={() => modalClose()}
                                >
                                <svg 
                                    width="20px" 
                                    height="20px" 
                                    viewBox="0 0 24 24" 
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"></path> 
                                        </g>
                                </svg>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        {
                            <div className="px-5 py-2" style={{overflow: 'auto'}}>
                                <div>
                                    <div id="product-carousel" className="relative w-full" data-carousel="static">
                                        <div className="relative h-72 overflow-hidden md:h-96">
                                            <div className="h-96 w-full xl:h-112 hidden duration-700 ease-in-out" data-carousel-item="true">
                                                <img src={item.image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                            </div>
                                            <div className="h-96 w-full xl:h-112 hidden duration-700 ease-in-out" data-carousel-item>
                                                <img src={item.image_2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                            </div>
                                            <div className="h-96 w-full xl:h-112 hidden duration-700 ease-in-out" data-carousel-item>
                                                <img src={item.image_3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                            </div>
                                            <div className="h-96 w-full xl:h-112 hidden duration-700 ease-in-out" data-carousel-item>
                                                <img src={item.image_4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                            </div>
                                            <div className="h-96 w-full xl:h-112 hidden duration-700 ease-in-out" data-carousel-item>
                                                <img src={item.image_5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                            </div>
                                        </div>
                                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                                        </div>
                                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                                </svg>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </button>
                                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                                </svg>
                                                <span className="sr-only">Next</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                    
                                <h1 className='font-sans text-xl'>
                                    DESCRIPTION
                                </h1>
                                <hr />
                                <div className="px-3 pt-2 pb-5">
                                    <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">{item.product_category} | {item.name}</h5>
                                    <div className="flex items-center justify-between">
                                        <span className="text-1xl font-bold text-gray-900 dark:text-white">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: 'PHP' })}</span>
                                    </div>
                                    <p className="tracking-tight text-gray-900 dark:text-white">{item.description}</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div> 
        </div>
    );

    return (
        <>
            <div className='hidden sm:block'>
                <div className='grid grid-cols-4 auto-cols-max gap-10'>
                    {products.map((item, index) => 
                        {
                            if(index <= 4) {
                                return (
                                    <div 
                                        onClick={() => selectedItem(item)}
                                        className="cursor-pointer w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" 
                                        key={item.product_category+"_"+index}
                                    >
                                        <div className='h-80'>
                                            <img className="p-8 rounded-t-lg h-full w-full" src={item.image} alt="product image" />
                                        </div>
                                        <div className="px-5 pb-5">
                                            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.product_category}</h5>
                                            <div className="flex items-center justify-between">
                                                <span className="text-1xl font-bold text-gray-900 dark:text-white">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: 'PHP' })}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    )}
                </div>
            </div>
            
            <div className='hidden sm:block mt-5'>
                <div className='grid grid-cols-4 auto-cols-max gap-10'>
                {products.map((item, index) => 
                        {
                            if(index > 4 && index <= 8) {
                                return (
                                    <div 
                                        onClick={() => selectedItem(item)}
                                        className="cursor-pointer w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" 
                                        key={item.product_category+"_"+index}
                                    >
                                        <div className='h-80'>
                                            <img className="p-8 rounded-t-lg h-full w-full" src={item.image} alt="product image" />
                                        </div>
                                        <div className="px-5 pb-5">
                                            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.product_category}</h5>
                                            <div className="flex items-center justify-between">
                                                <span className="text-1xl font-bold text-gray-900 dark:text-white">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: 'PHP' })}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }
                )}
                </div>
            </div>

            <div className='sm:hidden'>
                <div className="relative w-full" data-carousel="static">
                    <div className="relative h-115 overflow-hidden">
                        {products.map((item, index) => {
                            if(index <= 4) {
                                return (
                                    <div 
                                        onClick={() => selectedItem(item)}
                                        className="cursor-pointer hidden duration-700 ease-in-out" 
                                        data-carousel-item key={item.model+"_"+index+"carousel"}
                                    >
                                        <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                            <div className='h-80'>
                                                <img className="p-8 rounded-t-lg h-full w-full" src={item.image} />
                                            </div>
                                            <div className="px-8 pb-5">
                                                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.product_category}</h5>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-1xl font-bold text-gray-900 dark:text-white">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: 'PHP' })}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>

            {products.lenght > 4 &&
                <div className='sm:hidden'>
                    <div className="relative w-full" data-carousel="static">
                        <div className="relative h-115 overflow-hidden">
                            {products.map((item, index) => {
                                if(index >= 4 && index <= 8) {
                                    return (
                                        <div 
                                            onClick={() => selectedItem(item)}
                                            className="cursor-pointer hidden duration-700 ease-in-out" 
                                            data-carousel-item key={item.model+"_"+index+"carousel"}
                                        >
                                            <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                                <div className='h-80'>
                                                    <img className="p-8 rounded-t-lg h-full w-full" src={item.image} />
                                                </div>
                                                <div className="px-8 pb-5">
                                                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.product_category}</h5>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-1xl font-bold text-gray-900 dark:text-white">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: 'PHP' })}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            }
            
            {/* <Modal children={modalBody} show={modal}/> */}

            {modalView}

            {/* <ProductView item={item} modal={modal} setModal={setModal} /> */}
        </>
    );
}

export default ProductList;
