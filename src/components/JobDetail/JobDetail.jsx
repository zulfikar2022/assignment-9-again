import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import './jobDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCommentDollar, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const JobDetail = () => {
    const jobs = useLoaderData();

    const location = useLocation().pathname[1];

    const job = jobs.find(jb => jb._id == location);
    const handleApplyNow = (id) => {
        console.log(id)
        const localStorageData = localStorage.getItem('appliedJobs');
        if (!localStorageData) {
            const jobs = `${id}`;
            localStorage.setItem('appliedJobs', jobs);
        }
        else {
            let jobsIds = localStorage.getItem('appliedJobs').split('');
            // console.log(jobsIds)

            const isAlreadyExists = jobsIds.find(job => job == id);
            console.log(isAlreadyExists)
            if (isAlreadyExists) {
                alert('you have already applied for this job');
                return;
            }
            jobsIds.push(id);

            localStorage.setItem('appliedJobs', jobsIds.join(''));
        }
    }

    const { _id, jobTitle, companyLogo, companyName, jobType, address, salaryRange, phoneNumber, email, jobDescription, jobResponsibility, educationalRequirement, experience } = job;
    // console.log(job);
    return (
        <div>
            <p className='text-4xl text-center font-bold mt-20' >Job Details</p>

            <div className='jobDetails-container px-20 mt-10'>
                <div>
                    <p><span className='font-semibold'>Job Details: </span>{jobDescription}</p><br />
                    <p><span className='font-semibold'>Job Responsibility: </span>{jobResponsibility}</p><br />
                    <p><span className='font-semibold '>Educational Requirement:</span><br /> {educationalRequirement} </p><br />
                    <p><span className='font-semibold'>Experience:</span><br />{experience}</p>
                </div>
                <div className='jobDetails-summary'>
                    <p className='font-semibold mb-3'>Job Details</p>
                    <hr />
                    <div className='mt-3'>
                        <p><FontAwesomeIcon icon={faCommentDollar} />&nbsp;&nbsp;<span className='font-semibold'>Salary:&nbsp;</span>{salaryRange}&nbsp;(per month)</p>
                        <p className='my-3'><FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;<span className='font-semibold'>Job Title:</span>&nbsp;&nbsp;{jobTitle}</p>
                    </div>
                    <p className='font-semibold mb-3'>Contact Information</p>
                    <hr />
                    <div className='mt-3'>
                        <p><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;<span className='font-semibold'>Phone:&nbsp;&nbsp;</span>{phoneNumber}</p>
                        <p className='my-2'><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<span className='font-semibold'>Email:</span>{email}</p>
                        <p><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;<span className='font-semibold'>Address:</span>{address}</p>
                    </div>
                    <button onClick={() => handleApplyNow(_id)} className='start-applying  w-full mt-5'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;