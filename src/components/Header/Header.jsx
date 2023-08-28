import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div >
            <div className='flex justify-between header px-11 py-10'> 
                <h3 className='text-3xl'>JobSearch</h3>
                <div className='flex gap-x-3.5'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/applied-jobs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Applied Jobs
                    </NavLink>
                    <NavLink
                        to="/blogs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Blogs
                    </NavLink>
                </div>
                <button className='start-applying'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;