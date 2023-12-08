"use client"
import React, { useState } from 'react'
import ChooseSlotModal from '../modal/ChooseSlotModal'

const DoctorCard = () => {
  const [showSlotModal, setShowSlotModal] = useState(false)
  return (
    <div>
      <div class="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
        <div class="flex items-center gap-x-4">
          <img class="rounded-full w-20 h-20" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
          <div class="grow">
            <h3 class="font-medium text-gray-800 dark:text-gray-200">
              Amil Evara
            </h3>
            <p class="text-xs uppercase text-gray-500">
              UI/UX Designer
            </p>
          </div>
        </div>

        <p class="mt-3 text-gray-500">
          I am an ambitious workaholic, but apart from that, pretty simple person.
        </p>

        <div class="mt-3 space-x-1">
          <button onClick={() => setShowSlotModal(true)} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Get appointment
          </button>
          {
            showSlotModal &&
          <ChooseSlotModal />
          }
        </div>
      </div>
    </div>
  )
}

export default DoctorCard