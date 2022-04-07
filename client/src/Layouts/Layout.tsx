import React from 'react';
import { Navbar, Footer } from './index';

const Layout = ({children}) => {
  return (
    <>  
        <Navbar/> 
            {children}
        <Footer />
    </>
  )
}

export default Layout