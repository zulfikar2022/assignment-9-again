import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJob = () => {
    const [jobs,setJobs] = useState([]);
    const [allJobs,setAllJobs] = useState([]);
    const [showingAll,setShowingAll] = useState(false);
    useEffect(() =>{
        fetch('jobData.json')
            .then(res => res.json())
            .then(data => {
                const newArray = data.slice(0,5);
                setAllJobs(data);
                setJobs(newArray);
            })
    },[])
    const handleSeeMoreSeeLess = () =>{
        if(!showingAll){
            setJobs(allJobs)
        }
        else{
            const newArray = [...allJobs].slice(0,5);
            setJobs(newArray);
        }
        setShowingAll(!showingAll)
    }

    return (
        <div className='mt-32 px-20 '>
            <h2 className='text-center text-3xl font-semibold'>Featured Jobs</h2>
            <p className='text-center text-zinc-400 pt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-5 mt-10'>
                {
                        jobs.map(job => <Job
                             key={job._id}
                              job={job}
                              ></Job>)
                }
            </div>
           <div className='flex'>
           <button onClick={handleSeeMoreSeeLess} className='start-applying mt-10  ml-auto mr-auto'>{!showingAll ? 'See More':'See Less'}</button>
           </div>
        </div>
    );
};

export default FeaturedJob;