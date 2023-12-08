'use client'
import * as React from 'react';
import { FaCheck } from "react-icons/fa6";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import MainLayout from '@/layouts/MainLayout';
import Modal from '@/components/modal';

const page = () => {
    const [showDateSelector, setshowDateSelector] = React.useState(false)
    return (
        <MainLayout>
            <style>
                {
                    `
                    .MuiPickersDay-root {
                        color: white;
                    }
                    .MuiDayCalendar-weekDayLabel {
                        color: white;
                    }
                    .MuiPickersCalendarHeader-switchViewButton  {
                        color: white;
                    }
                    .MuiPickersArrowSwitcher-button   {
                        color: white;
                    }
                    .css-jgls56-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected) {
                        border: 1px solid white; !important
                    }
                    `
                }
            </style>
            <button onClick={() => setshowDateSelector(true)} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Select date
            </button>
            <p className='mt-3 text-xl'>Date : 8 Dec, 2023 (today)</p>
            <div className='flex flex-wrap mt-5 gap-4'>

                <div class="p-4 relative md:p-7 bg-gray-100 hover:dark:bg-slate-700 cursor-pointer rounded-lg w-max dark:bg-slate-800">
                    <FaCheck className='absolute right-2 top-2 text-xl text-green-500'/>
                    <p className='text-center text-xl font-bold '>10:00 - 10:30</p>
                </div>
                <div class="p-4 relative md:p-7 bg-gray-100 hover:dark:bg-slate-700 cursor-pointer rounded-lg w-max dark:bg-slate-800">
                    <p className='text-center text-xl font-bold '>10:00 - 10:30</p>
                </div>
                <div class="p-4 relative md:p-7 bg-gray-100 hover:dark:bg-slate-700 cursor-pointer rounded-lg w-max dark:bg-slate-800">
                    <p className='text-center text-xl font-bold '>10:00 - 10:30</p>
                </div>
                <div class="p-4 relative md:p-7 bg-gray-100 hover:dark:bg-slate-700 cursor-pointer rounded-lg w-max dark:bg-slate-800">
                    <p className='text-center text-xl font-bold '>10:00 - 10:30</p>
                </div>
            </div>
            <button  type="button" class="py-3 mt-10 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Get appointment
            </button>
            {
                showDateSelector &&
                <Modal>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className='border border-gray-300 w-max rounded-lg'>
                            <DateCalendar />
                        </div>
                        <div className='flex justify-center w-full'>

                            <button onClick={() => setshowDateSelector(false)} type="button" class="py-3 mt-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Select
                            </button>
                        </div>
                    </LocalizationProvider>
                </Modal>
            }
        </MainLayout>
    )
}

export default page