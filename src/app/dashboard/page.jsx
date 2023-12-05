import Dashboard from '@/components/dashboard/Dashboard'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Dashboard/>
      </MainLayout>
    </div>
  )
}

export default page