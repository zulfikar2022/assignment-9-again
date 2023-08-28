import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './MainLayout.css'
import Banner from '../Banner/Banner';

const MainLayout = () => {
    return (
        <div className=''>
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;