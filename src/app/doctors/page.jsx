import DoctorCard from '@/components/cards/DoctorCard'
import DoctorsSearch from '@/components/search/DoctorsSearch'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const page = () => {
    return (
        <MainLayout>
            <div>
<DoctorsSearch/>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 xl:grid-cols-4'>
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                </div>
            </div>
        </MainLayout>
    )
}

export default page