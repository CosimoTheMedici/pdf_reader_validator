import React from 'react'
import { Navbar, Sidebar } from './common';


const MainLayoutAuthcopy = (Component) => function HOC() {

  
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
  
  export default MainLayoutAuthcopy;