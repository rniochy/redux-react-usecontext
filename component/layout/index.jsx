import React from 'react';
import Footer from '../footer';
import Header from '../header';
import './layout.css'

const Layout = ({children}) => {
    return (
        <div className='layout-content'>
             <Header/> 
             {children}
             <Footer/> 
        </div>
    );
}

export default Layout;