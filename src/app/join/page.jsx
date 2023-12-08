import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const page = () => {
    return (
        <MainLayout>
            <div>

                <div>
                    <p>Date: janina</p>
                    <p>Doctor’s Name: </p>
                    <p>Speciality: </p>
                    <p>Time: </p>
                </div>
                
            <button  type="button" class="py-3 mt-10 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Join now
            </button>
            </div>
        </MainLayout>
    )
}

export default page