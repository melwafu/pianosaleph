import { Head, Link } from '@inertiajs/react';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';

export default function Services({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Services" />
            <header>
                <Header pages="Services" />
            </header>
            <main>
                <div className='container mx-auto text-center font-black py-10'>
                    <h1 className='text-5xl'>PROVIDE HIGH-QUALITY SERVICES</h1>
                    <h5>Ensure that all piano tuning, repair, and maintenance services meet the highest standards of quality and customer satisfaction</h5>
                </div>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-2 auto-cols-max items-center bg-slate-100'>
                        <div>
                            <h1 className='text-center text-3xl font-black'>
                                RETUNING
                            </h1>
                        </div>
                        <div className='h-92'>
                            <img className="w-full" src="/docs/images/ourServices/retuning.jpg" alt="Retuning image" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 auto-cols-max items-center bg-slate-100'>
                        <div className='h-92'>
                            <img className="w-full" src="/docs/images/ourServices/repair.jpg" alt="Repair image" />
                        </div>
                        <div>
                            <h1 className='text-center text-3xl font-black'>
                                REPAIR
                            </h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 auto-cols-max items-center bg-slate-100'>
                        <div>
                            <h1 className='text-center text-3xl font-black'>
                                RESTORATION
                            </h1>
                        </div>
                        <div className='h-92'>
                            <img className="w-full" src="/docs/images/ourServices/restoration.jpg" alt="Moving image" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 auto-cols-max items-center bg-slate-100'>
                        <div className='h-92'>
                            <img className="w-full" src="/docs/images/ourServices/moving.jpg" alt="Retuning image" />
                        </div>
                        <div>
                            <h1 className='text-center text-3xl font-black'>
                                MOVING
                            </h1>
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
