import ProductView from "./ProductView";
import { useEffect, useState } from "react";

export default function ProductList({products}) {
    const [modal, setModal] = useState(false);
    const [item, setItem] = useState([]);

    // On click
    function selectedItem(item) {
        setModal(true);
        setItem(item);
    };

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

            <ProductView item={item} modal={modal} setModal={setModal} />

        </>
    );
}
