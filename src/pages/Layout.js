import React from 'react'
import Header from '../Header';
import Nav from '../Nav';
import { Outlet} from "react-router-dom";
import Footer from '../Footer';

function Layout() {
  return (
    <div>
      <div id="HeaderNav" class="flex-container">
        <Header/>
        <Nav/>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout;