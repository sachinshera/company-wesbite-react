import React from 'react'
import JobListing from '../components/JobListing'
function JobsPage() {
  return (
    <>


<section class="bg-white dark:bg-gray-900">
    <div class="py-4 px-3 mx-auto max-w-screen-2xl text-center lg:py-10">
        <h1 className='text-black  dark:text-white text-3xl my-5'>
            Browse our open positions
        </h1>
    <JobListing />
    </div>
</section>

     
    </>
  )
}

export default JobsPage