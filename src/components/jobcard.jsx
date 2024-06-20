import React, { useState } from 'react'
import {FaMapMarker,FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';
function Jobcard({job,isReadMore=false}) {
 const [showFullDesc,SetFullDesc] = useState(isReadMore);
    var desc = job.description;
    if(!showFullDesc){
        desc = desc.substr(0,50) + "...";
    }else{
        desc = job.description;
    }
  return (
    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    <div class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
        <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
        </svg>
        {job.type}
    </div>
    <h2 class="text-gray-900 dark:text-white text-xl font-extrabold mb-2">
      

       {job.title}
        
        </h2>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
    {desc}  
    
    {isReadMore? '' :  <a  onClick={()=>SetFullDesc(!showFullDesc)} class="text-blue-600 cursor-pointer dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
       {showFullDesc ? "Read less" : "Read more"}
     </a>}
    
   
    </p>
   
    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
    <FaMapMarker class="inline-block me-2" />
    {job.subtitle}
    </p>

    {/* sallry range */}

    <div class="flex items center justify-between mb-4"> 
        
        <span class="text-gray-500 dark:text-gray-400">Salary range</span>  
        <span class="text-gray-900 dark:text-white font-semibold">
           
            {job.salaryRange}</span>

        </div>
   
    <Link to={"/jobs/"+job.id} class=" bg-blue-500 rounded-lg p-1 text-white dark:text-white hover:underline font-medium text-lg inline-flex items-center">
       Apply now
         <FaArrowRight class="inline-block ms-2" />
    </Link>
</div>
  )
}

export default Jobcard