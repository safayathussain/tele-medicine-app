"use client"
import Sidebar from '@/components/bars/Sidebar'
import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MainLayout = ({ children }) => {
    const [title, setTitle] = useState('')
    const titles = {
        dashboard: 'Dashboard',
        doctors: 'Doctors',
        'my-patients': 'My patients',
        'appointments': 'Appointments',
        'my-schedule': 'My schedule',
        history: 'History',
        profile: 'Profile',
    }
    const getPageTitle = (route) => {
        const title = titles[route];
        setTitle(title)
    }
    const routeName = usePathname()
    useEffect(() => {
        getPageTitle(
            routeName.substring(1).split('/')[0]
        )
    }, [routeName])
    return (
        <div className='overflow-hidden'>
            <Sidebar />
            <div className='flex'>

                {/* <div className='w-[256px] h-screen hidden lg:flex'>
                </div> */}
                <div class="p-4 lg:ml-64 w-full">
                    <p className='text-3xl py-5 text-white font-semibold'>{title}</p>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout