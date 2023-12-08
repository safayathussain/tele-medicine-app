import React from 'react'
import Modal from '.'
import { useRouter } from 'next/navigation'

const ChooseSlotModal = () => {
    const router = useRouter()
    return (
        <Modal>
            <div className='flex items-center gap-5'>
                <img class="inline-block h-[2.875rem] w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"></img>
                <div>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        Card title
                    </h3>
                    <p class=" text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                        Card subtitle
                    </p>
                </div>
            </div>
            <p class="mt-2 text-gray-500 dark:text-gray-400">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button onClick={() => router.push('/choose-slot')} type="button" class="py-3 px-4 mt-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Choose slot
            </button>
        </Modal>
    )
}

export default ChooseSlotModal