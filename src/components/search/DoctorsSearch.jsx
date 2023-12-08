import React from 'react'

const DoctorsSearch = () => {
    return (
        <div className='flex gap-3 mb-5'>
            <input type="text" class="py-3 px-4 block w-full outline outline-[1px] focus:outline-gray-100 max-w-[300px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="This is placeholder"></input>
            <select id="countries" class="bg-gray-50 border border-gray-300 w-max text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a sector</option>
                <option value="US">Anesthesiologist</option>
                <option value="CA">Cardiologist</option>
                <option value="FR">Dermatologist</option>
                <option value="DE">Endocrinologist</option>
            </select>
        </div>
    )
}

export default DoctorsSearch