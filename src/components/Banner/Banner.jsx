import React from 'react';

const Banner = () => {
    return (
        <div className='header px-20  flex justify-between'>
            <div className="text-and-button">
                <h1 className='text-8xl'>One  Step <br /> Closer To Your <br /> <span className=' text-purple-600'>Dream Job</span></h1>
                <p className='text-zinc-500 pt-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='start-applying mt-6'>Get Started</button>
            </div>
            <div className="image">
                <img src="https://i.ibb.co/9tz30Jf/zulfikar-removebg-preview.png" alt="" />
                
            </div>
        </div>
    );
};

export default Banner;