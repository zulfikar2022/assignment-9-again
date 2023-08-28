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
            <Banner></Banner>
            <div className='px-20 mb-10'>
                <JobCategory></JobCategory>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;