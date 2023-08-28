import React from 'react';
import facebook  from '../../../src/assets/facebook.svg';
import twitter from '../../../src/assets/twitter.svg';
import instagram from '../../../src/assets/instagram.svg';

const Footer = () => {
    return (
        <div className='bg-black mt-32 px-20 text-white grid gap-5 grid-cols-5 py-20'>
            <div>
                <h1 className='text-3xl font-bold'>Job Search</h1>
                <p className='text-zinc-400'> There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className='flex gap-3 mt-10'>
                    <img className='bg-white w-9 rounded-full p-1'  src={facebook} alt="" />
                    <img className='bg-white w-9 rounded-full p-1' src={twitter} alt="" />
                    <img className='bg-white w-9 rounded-full p-1' src={instagram} alt="" />

                </div>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </div>
    );
};

export default Footer;