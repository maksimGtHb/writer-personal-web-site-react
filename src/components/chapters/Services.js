import React from 'react';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import {ServicesInfo} from './ServicesStyle.js';
import OffersPage from "../OffersPage.js";


const Services = () => {
    return (
        <div >
      

       <Navbar/>
       <ServicesInfo>There are various services and products from professional journalism that can be carried out</ServicesInfo>
        <OffersPage/>
        <Footer/>


    
        </div>

    )
    

}

export default Services; 
