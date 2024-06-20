import React from 'react'
import Career from '../components/career'
import { Link } from 'react-router-dom'
function CareerPage() {
  return (
    <>
    <Career />
    <div className='bg-white dark:bg-gray-900 flex justify-center'>
        <Link to="/jobs"  class="inline-flex justify-center items-center my-3 py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            View all jobs
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
    </>
  )
}

export default CareerPage