import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCommentDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './AppliedJob.css'
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    return (
        <div className='flex mb-10 items-center justify-between appliedJob'>
            <div className='flex gap-52 '>
                <div>
                    <img className='w-40' src={job.companyLogo} alt="" />
                </div>
                <div >
                    <p className='text-3xl font-semibold'>{job.jobTitle}</p>
                    <p className='text-zinc-400 text-xl'>{job.companyName}</p>
                    <p>{job.jobType}</p>
                    <div className='flex gap-5 text-zinc-400'>
                        <p><FontAwesomeIcon icon={faLocationDot} /><span>{job.address}</span></p>
                        <p><FontAwesomeIcon icon={faCommentDollar} /><span>{job.salaryRange}</span></p>
                    </div>
                </div>
            </div>
                <Link to={`/${job._id}`}><button className='start-applying'>View Details</button></Link>
        </div>
    );
};

export default AppliedJob;