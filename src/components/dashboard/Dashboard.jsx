import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 w-full gap-5'>
                {/*  */}
                <div class="p-4 md:p-7 bg-gray-100 rounded-lg w-full dark:bg-slate-800">
                    <p className='text-center text-lg text-gray-400'>Pending Appointments</p>
                    <p className='text-center text-3xl font-bold mt-3 '>10</p>
                </div>
                {/*  */}
                <div class="p-4 md:p-7 bg-gray-100 rounded-lg w-full dark:bg-slate-800">
                    <p className='text-center text-lg text-gray-400'>Total Appointments</p>
                    <p className='text-center text-3xl font-bold mt-3 '>10</p>
                </div>
                {/*  */}
                <div class="p-4 md:p-7 bg-gray-100 rounded-lg w-full dark:bg-slate-800">
                    <p className='text-center text-lg text-gray-400'>Total Patients</p>
                    <p className='text-center text-3xl font-bold mt-3 '>10</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard