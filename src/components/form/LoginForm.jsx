import Link from 'next/link'
import React from 'react'

const LoginForm = ({ step }) => {
    return (
        <div>
            <div className=''>
                <form class="w-[300px] md:w-[500px] ">
                    {
                        step === 'register' &&
                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                    }
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    {/* user type */}
                    {
                        step === 'register' &&
                        <>
                        <div class="inline-flex rounded-md w-full" role="group">
                            <button type="button" class="px-4 py-2 w-1/2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                As a patient
                            </button>
                            <button type="button" class="px-4 py-2 w-1/2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                As a doctor
                            </button>
                        </div>
                    <label for="countries" class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">Select your sector</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a sector</option>
                        <option value="US">Anesthesiologist</option>
                        <option value="CA">Cardiologist</option>
                        <option value="FR">Dermatologist</option>
                        <option value="DE">Endocrinologist</option>
                    </select>
                    </>
                    }
                    <div className='mt-5 flex justify-center'>
                        {
                            step === 'register' ?
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button> :
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>}
                    </div>
                    <p className='text-center'>
                        {
                            step === 'register' ?
                                <span class=" text-sm mt-2 font-semibold whitespace-nowrap text-center dark:text-white">Have you any account? <Link className='text-primary' href={'/login'}>Login</Link></span> :
                                <span class=" text-sm mt-2 font-semibold whitespace-nowrap text-center dark:text-white">Don't have you any account? <Link className='text-primary' href={'/register'}>Register</Link></span>
                        }
                    </p>

                </form>
            </div>
        </div>
    )
}

export default LoginForm