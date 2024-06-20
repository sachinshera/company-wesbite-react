import React, { useState ,useEffect} from 'react'
import Jobcard from './jobcard';
function JobListing({isHomepage=false}) {
    
    const [jobs,setJobs] = useState([]);
    const [loading,setLoading] = useState(true);
    var apiUrl  = isHomepage?'/api/jobs?_limit=3':'/api/jobs';
    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const res = await fetch(apiUrl);
                const data = await res.json();
            setJobs(data);
            }catch(err){
                console.log(err);
            }finally{
                setLoading(false);
            }
        };
        fetchJobs();
    },[]);
    return (
        <>
        <div class="grid md:grid-cols-3 gap-3">
                {jobs.map((job,index) => (
                    <Jobcard  job={job} key={index} />
                ))}
            </div>
        </>
    )
}

export default JobListing