import React from 'react'
import { Navbar, Sidebar } from './common';


const MainLayoutAuth = (Component) => function HOC() {

  
    return (
      <div class="nk-body bg-lighter npc-default has-sidebar no-touch nk-nio-theme">

        <div class="main-wrapper">
            <Navbar />
            <Sidebar />

                <Component />
          

        </div>
        </div>

  
    )
  }
  
  export default MainLayoutAuth;