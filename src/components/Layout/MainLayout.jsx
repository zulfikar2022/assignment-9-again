import React from 'react';
import Header from '../Header/Header';

import { Outlet } from 'react-router-dom';
import './MainLayout.css'
import Footer from '../common-components/Footer/Footer';


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