import { Head } from "@inertiajs/react";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Breadcrumb from "./Layout/Breadcrum";
import { initFlowbite } from 'flowbite';


export default function AdminLayout({head, children}) { 
    initFlowbite();
  
    return (
        <>
            <Head title={head} />
            
            <header>
                <Navbar />
            </header>
            <menu>
                <Sidebar />
            </menu>
            <main>
                <div className="p-4 mt-14 sm:ml-64">
                    <Breadcrumb page={head} />
                    <div className="border border-gray-200 rounded-lg dark:border-gray-700 mt-1">
                        <div className="items-center p-2 justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">  
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}