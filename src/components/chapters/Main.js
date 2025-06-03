import React from 'react';
import HomePage from '../HomePage'
import ProfessionPage from '../ProfessionPage'
import StrentghsPage from '../StrengthsPage'
import OffersPage from '../OffersPage'
import Footer from '../Footer'
import SideNav from '../SideNav'
import Navbar from '../Navbar';

const Main = () =>{
    return (
    <div>
      <Navbar/>
      <SideNav />
      <HomePage />
      <ProfessionPage/>
      <StrentghsPage/>
      <OffersPage/>
      <Footer/>
      </div>
    )
}

export default Main;
