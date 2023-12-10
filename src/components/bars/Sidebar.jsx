import { Backdrop } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion';

const Sidebar = () => {
    const navs = [
        {
            name: 'Dashboard',
            route: '/dashboard',
        },
        {
            name: 'Doctors',
            route: '/doctors',
        },
        {
            name: 'My patients',
            route: '/my-patients',
        },
        {
            name: 'Appointments',
            route: '/appointments',
        },
        {
            name: 'My schedule',
            route: '/my-schedule',
        },
        {
            name: 'History',
            route: '/history',
        },
        {
            name: 'Past records',
            route: '/past-records',
        },
        {
            name: 'Medication',
            route: '/medication',
        },
        {
            name: 'Tests',
            route: '/tests',
        },
        {
            name: 'Profile',
            route: '/profile',
        },
    ]
    const routeName = usePathname()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [sidebarOpen, setSidebarOpen] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    useEffect(() => {
        if (screenWidth < 1024) setSidebarOpen(false)

    }, [screenWidth])

    return (
        <div>
            {/* backdrop */}
            {
                sidebarOpen &&
                <div className='fixed top-0 left-0 w-screen h-screen bg-slate-900 opacity-80' onClick={() => setSidebarOpen(false)}>
                </div>
            }

            {/* open btn */}
            <div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center py-4">
                    <button type="button" class="text-gray-500 hover:text-gray-600" onClick={() => setSidebarOpen(true)}>
                        <span class="sr-only">Toggle Navigation</span>
                        <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* sidebar */}
            <div class={`${(screenWidth < 1024 && sidebarOpen) ? 'left-64' : (screenWidth < 1024 && '-left-40')} -translate-x-full transition-all duration-300 transform  fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`}>
                <div className='flex flex-col justify-between h-full'>

                    <nav class=" p-6 pt-0 w-full flex flex-col flex-wrap" >
                        <ul class="space-y-1.5">
                            {
                                navs.map((nav, i) => {
                                    return <li key={i}>
                                        <Link class={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600 ${routeName.includes(nav.route) && 'bg-gray-700 text-gray-300'}`} href={nav.route}>
                                            {nav.name}
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                    </nav>
                    <div className='p-6 pb-0'>
                        <button type="button" class="py-3 px-4 p-6 w-full inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar