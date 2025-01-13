import { Head, Link } from '@inertiajs/react';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import { initFlowbite } from 'flowbite';

const brandList = [
    {brand: "YAMAHA", imagePath: "/docs/images/brands/yamaha.svg"},
    {brand: "KAWAI", imagePath: "/docs/images/brands/kawai.png"},
    {brand: "CASIO", imagePath: "/docs/images/brands/casio.png"},
    {brand: "SAMICK", imagePath: "/docs/images/brands/samick.jpg"},
    {brand: "PEARL RIVER", imagePath: "/docs/images/brands/pearl-river.png"},
    {brand: "STEIWAY AND SONS", imagePath: "/docs/images/brands/steinway-and-sons.png"},
    {brand: "YOUNG CHANG", imagePath: "/docs/images/brands/young-chang.jpeg"},
];

const productList = [
    { model: 'Yamaha', description: "Yamaha Console Piano million series", price: "110,000", imagePath: "/docs/images/products/piano/img-1.jpg", href: '#', current: true },
    { model: 'Pearl River', description:"Pearl River Console Piano", price: "65,000", imagePath: "/docs/images/products/piano/img-2.jpg", href: '#', current: false },
    { model: 'Yamaha', description: "Yamaha U1 million series", price: "85,000", imagePath: "/docs/images/products/piano/img-3.jpg", href: '#', current: false },
    { model: 'Kawai', description: "Kawai CE -8 Console Piano", price: "100,000", imagePath: "/docs/images/products/piano/img-4.jpg", href: '#', current: false },
];

export default function Home({ auth, laravelVersion, phpVersion }) {
    initFlowbite();
    return (
        <>
            <Head title="Home" />
            <header>
                <Header pages="Home" />
            </header>
            <main>
                {/* Carousel */}
                <div>
                    <div id="default-carousel" className="relative w-full" data-carousel="slide">
                        <div className="relative h-72 overflow-hidden md:h-96">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="true">
                                <img src="/docs/images/carousel/img-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/img-2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/img-3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/img-4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/img-5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
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
                
                {/* Brands */}
                <div className='container mx-auto p-5'>
                    <div>
                        <h1 className='font-sans text-xl font-black'>
                            BRANDS
                        </h1>
                    </div>
                    <div className='hidden sm:block'>
                        <div className='grid grid-cols-7 auto-cols-max gap-10 text-center items-center'>
                            {brandList.map((item) => (
                                <div key={item.brand}>
                                    <a href="#">
                                        <img className="object-fill h-25 w-full" src={item.imagePath} alt={item.brand} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='sm:hidden'>
                        <div className="relative w-full" data-carousel="slide">
                            <div className="relative h-28 overflow-hidden items-center">
                                {brandList.map((item, index) => (
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item key={item.brand+"_"+index+"carousel"}>
                                        <div className="h-28 ">
                                            <a href="#">
                                                <img className="object-fill w-full" style={{height: "100px"}} src={item.imagePath} alt={item.brand} />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div className='container mx-auto p-5'>
                    <div className='pb-5'>
                        <h1 className='font-sans text-xl font-black'>
                            PRODUCTS
                        </h1>
                    </div>
                    <div className='hidden sm:block'>             
                        <div className='grid grid-cols-4 auto-cols-max gap-10'>
                            {productList.map((item, index) => (
                                <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" key={item.model+"_"+index}>
                                    <a href="#">
                                        <img className="p-8 rounded-t-lg" src={item.imagePath} alt="product image" />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.description}</h5>
                                        </a>
                                        <div className="flex items-center justify-between">
                                            <span className="text-1xl font-bold text-gray-900 dark:text-white">&#8369; {item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='sm:hidden'>
                        <div className="relative w-full" data-carousel="static">
                            <div className="relative h-112 overflow-hidden">
                                {productList.map((item, index) => (
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item key={item.model+"_"+index+"carousel"}>
                                        <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                            <a href="#">
                                                <img className="p-8 rounded-t-lg" src={item.imagePath} alt={item.model} />
                                            </a>
                                            <div className="px-5 pb-5">
                                                <a href="#">
                                                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.description}</h5>
                                                </a>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-1xl font-bold text-gray-900 dark:text-white">&#8369; {item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                </div>
            </main>
            <footer className='bottom-0 mt-7'>
                <Footer />
            </footer>
        </>
    );
}
