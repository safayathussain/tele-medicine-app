import PatientCard from '@/components/cards/PatientCard'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const page = () => {
    return (
        <MainLayout>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 xl:grid-cols-4'>
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />

                </div>
            </div>
        </MainLayout>
    )
}

export default page