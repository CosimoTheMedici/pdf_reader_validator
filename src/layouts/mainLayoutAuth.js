import React from 'react'
import { Navbar, Sidebar } from '../components/common/';


const MainLayoutAuth = (Component) => function HOC() {

  
    return (
      <div class="main-wrapper">
             <Navbar />
             <Sidebar />
        <div class="page-wrapper">
            <Component />
        </div>
        </div>

  
    )
  }
  
  export default MainLayoutAuth;