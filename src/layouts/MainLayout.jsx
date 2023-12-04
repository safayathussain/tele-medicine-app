"use client"
import Sidebar from '@/components/bars/Sidebar'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div className=''>
            <Sidebar />
            <div className='flex'>

                {/* <div className='w-[256px] h-screen hidden lg:flex'>
                </div> */}
                <div class="p-4 lg:ml-64">
                    <p className='text-3xl py-5 text-white font-semibold'>Title</p>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout