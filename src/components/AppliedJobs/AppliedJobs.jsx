import React, { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';




const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const jobsApplied = [];

    useEffect(() => {
        fetch('jobData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    console.log(jobs)
    const localStorageData = localStorage.getItem('appliedJobs').split(',');
    console.log(localStorageData);

    let index = 0;

    for (let i = 0; i < jobs.length; i++) {
        // console.log('from inside the loop')
        const foundJob = jobs.find(job => job._id == localStorageData[index]);
        console.log(foundJob)
        if (foundJob) {
            index++;
            jobsApplied.push(foundJob)
        }
    }
    // setAppliedJobs(...jobsApplied)
    console.log(jobsApplied)

    return (
        <div className='px-20 mt-10'>
            <div>
                {
                    jobsApplied && jobsApplied.map(job => <AppliedJob key={job._id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;