import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* <Navbar/> */}

      <div className="bg-slate-900 h-screen">
        <div className="bg-bg flex items-center h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">

            {/* <div className="flex justify-center">
              <a className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md" href="../figma.html">
                <p className="me-2 inline-block text-white text-sm">
                  Preline UI Figma is live.
                </p>
                <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                  <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </a>
            </div> */}



            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                SMART DOCTOR SOLUTION
              </h1>
            </div>


            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-400">Smart Doctor solution offers Doctor Digital Profile, promotion, Patient appointment management, online & offline prescription, Patient history-medical record, health data analytics, clinical & medical education etc.</p>
            </div>

            <div className='flex justify-center w-full'>
              <Link href={'/login'}>
                <button type="button" className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Get started
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
