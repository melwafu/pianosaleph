import { Head, Link } from '@inertiajs/react';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';

export default function ContactUs({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Contact Us" />
            <header>
                <Header pages="Contact Us" />
            </header>
            <main>
                <div className='container mx-auto text-center font-black py-10'>
                    <h1 className='text-5xl'>GET IN TOUCH</h1>
                </div>
                <div className='container mx-auto' >
                    <div className='grid grid-cols-1 sm:grid-cols-4'>
                        <div className="text-center mb-5">
                            <div className='place-self-center mb-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(200, 200, 200)" className="size-10">
                                    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h1>LOCATION</h1>
                            Unit 1701-15 Arezzo Place Pasig City, Pasig, Philippines, 1602
                        </div>
                        <div className="text-center mb-5">
                            <div className='place-self-center mb-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(200, 200, 200)" className="size-10">
                                    <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                                    <path fillRule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h1>PHONE</h1>
                            0919 456 0367
                        </div>
                        <div className="text-center mb-5">
                            <div className='place-self-center mb-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(200, 200, 200)" className="size-10">
                                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                </svg>
                            </div>
                            <h1>EMAIL</h1>
                            etambaoan@gmail.com
                        </div>
                        <div className="text-center mb-5">
                            <div className='place-self-center mb-5'>
                                <svg viewBox="0 0 24 24" fill="rgb(200, 200, 200)" className="size-11">
                                    <path 
                                        fillRule="evenodd" 
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <h1>FACEBOOK</h1>
                            <a href="https://www.facebook.com/profile.php?id=100090317593893" target="_blank" className="bar bvo">
                                Piano Sale PH
                            </a>
                        </div>
                    </div>  
                </div>
            </main>
            <footer className='bottom-0 mt-7'>
                <Footer pages="Contact Us" />
            </footer>
        </>
    );
}
