import React from 'react';
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    console.log(job)
    return (
        <div className='job p-5 flex flex-col justify-between'>
            <img className='companyLogo' src={job.companyLogo} alt="" />
            <p className='font-semibold'>{job.jobTitle}</p>
            <p className='text-zinc-300'>{job.companyName}</p>
            <p>{job.jobType}</p>
            <div className='flex gap-2'>
                <p> <FontAwesomeIcon icon={faLocationDot} /> <small>{job.address}</small></p>
                <p>Salary: {job.salaryRange}</p>
            </div>
            <Link to={`/${job._id}`}>  <button className='start-applying w-1/4 mt-3'>View Details</button></Link>
        </div>
    );
};

export default Job;