import React from 'react';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-black mt-32 px-20 text-white grid gap-5 grid-cols-5 py-20 footer'>
            <div>
                <h1 className='text-3xl font-bold'>Job Search</h1>
                <p className='text-zinc-400'> There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className='flex gap-3 mt-10'>
                    <img className='bg-white w-9 rounded-full p-1' src={facebook} alt="" />
                    <img className='bg-white w-9 rounded-full p-1' src={twitter} alt="" />
                    <img className='bg-white w-9 rounded-full p-1' src={instagram} alt="" />

                </div>
            </div>
            <div className='text-zinc-400'>
                <h4 className='text-2xl font-semibold text-white'>Company</h4>
                <p>About Us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Careers</p>
            </div>
            <div className='text-zinc-400'>
                <h4 className='text-2xl font-semibold text-white'>Product</h4>
                <p>Prototype</p>
                <p>Planes & Pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
            </div>
            <div className='text-zinc-400'>
                <h4 className='text-2xl font-semibold  text-white'>Support</h4>
                <p>Help Desk</p>
                <p>Sales</p>
                <p>Become a Partner</p>
                <p>Developers</p>
            </div>
            <div className='text-zinc-400'>
                <h4 className='text-2xl font-semibold text-white'>Contact</h4>
                <p>Madhabbati,Birol,Dinajpur</p>
                <p>+8801309417042</p>

            </div>
        </div>
    );
};

export default Footer;