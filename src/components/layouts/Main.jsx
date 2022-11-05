import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../Pages/Common/NavMenu';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;