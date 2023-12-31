import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const page = () => {
  return (
    <MainLayout>
      <button type="button" class="py-3 px-4 mb-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
       + Add
      </button>
      <div className='mx-10'>
        <label for="textarea-label" class="block text-sm font-medium mb-2 dark:text-white">Date</label>
        <textarea id="textarea-label" class="py-3 px-4 block w-full outline-[2px] outline focus:outline-gray-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" rows="3" placeholder="Say hi..."></textarea>
      </div>
    </MainLayout>
  )
}

export default page