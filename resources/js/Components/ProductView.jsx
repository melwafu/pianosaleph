import Modal from "./Modal";

const ProductView = ({item, modal, setModal}) => {
    const modalBody = (
        <>
            <div className="h-130 scroll-smooth md:h-full lg:h-full xl:h-full 2xl:h-full" style={{overflow: 'auto'}}>
                {/*Header*/}
                <div className="container p-2">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1>Piano</h1>
                        </div>
                        <div className="w-1/2 text-end">
                            <button 
                                type="button"
                                className="text-center"
                                onClick={() => setModal(false)}
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
                    </div>
                </div>
                {/*Body*/}
                <div className="px-5 pb-2">
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
            </div>
        </>
    );

    return (
        <>
            <Modal children={modalBody} show={modal}/>
        </>
    );
}

export default ProductView
