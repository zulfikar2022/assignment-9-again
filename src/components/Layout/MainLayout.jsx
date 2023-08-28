import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './MainLayout.css'
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';

const MainLayout = () => {
    return (
        <div className=''>
            <Header></Header>
            
            <div className='mb-10'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;