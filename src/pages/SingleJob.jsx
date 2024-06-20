import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Jobcard from '../components/jobcard';
function SingleJob() {
    const [job,setJob] = useState({});
    const [loading,setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchJob = async () => {
            try{
                const res = await fetch('/api/jobs/'+id);
                const data = await res.json();
                setJob(data);
            }catch(err){
                console.log(err);
            }finally{
                setLoading(false);
            }
        };
        fetchJob();
    },[]);
  return (
   <> 
   <section class="bg-white dark:bg-gray-900">
    <div class="py-4 px-3 mx-auto max-w-screen-2xl text-center lg:py-10">
        <Jobcard job={job} key={id} isReadMore={true} />
    </div>
    </section>
    
   </>
  )
}

export default SingleJob