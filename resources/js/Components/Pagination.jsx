import { Link } from "@inertiajs/react"
export default function Pagination ({links}) {
    return(
        <div className='py-5'>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                    {links.map(link => (
                        link.url ?
                        <li key={link.label}>
                            <Link 
                                href={link.url} 
                                dangerouslySetInnerHTML={{__html: link.label}}
                                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                                    ${link.active ? 'text-blue-600 font-bold bg-blue-50' : ''} 
                                    ${link.label.includes('Previous') ? 'rounded-s-lg' : ''} 
                                    ${link.label.includes('Next') ? 'rounded-e-lg' : ''}` 
                                }
                            />
                        </li>
                        :
                        <span
                            key={link.label} 
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                                ${link.label.includes('Previous') ? 'rounded-s-lg' : ''} 
                                ${link.label.includes('Next') ? 'rounded-e-lg' : ''}`
                            }
                        ></span>
                    ))}
                </ul>
            </nav>
        </div>
    )
}