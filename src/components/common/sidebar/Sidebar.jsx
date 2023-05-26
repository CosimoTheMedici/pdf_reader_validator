import React, { useState } from "react";
import { Link ,useLocation } from "react-router-dom";
import { menuItems } from './SidebarData';


const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const pathname = useLocation().pathname;




  const handleMenuClick = (event, index) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);

    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };



  const renderMenuItem = (menuItem,index) => {
    if (menuItem.subMenuItems) {
      return (
        
        <li  key={index} className={  openMenuIndex === index? ' submenu active' : 'submenu'} >
          <a href="#" onClick={(event) => handleMenuClick(event, index)} className={ openMenuIndex === index? "subdrop" : ""}>
            {menuItem.icon} <span>{menuItem.name}</span>{" "}
            <span className="menu-arrow"></span>
          </a>
          <ul className={openMenuIndex === index ? "show" : ""} style={{ display: openMenuIndex === index ? "block" : "none" }}>

          {/* <ul className={isMenuOpen  && index ? "show" : ""} style={{ display: isMenuOpen ? "block" : "none" }}> */}
            {menuItem.subMenuItems.map((subMenuItem,index) => (
              <li key={index} className={`${pathname === subMenuItem.path ? 'active' : ''}`}>
                <Link to={subMenuItem.path}>{subMenuItem.name}</Link>
              </li>
            ))}
          </ul>
        </li>


      );
    } else {
      return (
        <li key={menuItem.name} className={`${pathname === menuItem.path ? 'active' : ''}`}>
          <Link
            to={menuItem.path}
            exact={menuItem.exact}
            //activeClassName="active"
          >
            <i class="la la-users"></i> 
            {/* {menuItem.icon} */}
             <span>{menuItem.name}</span>
            
          </Link>
        </li>
      );
    }
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            {menuItems.map((menuItem,index) => renderMenuItem(menuItem,index))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
{/* <>

<li class="submenu">
<a href="#"><i class="la la-files-o"></i> <span> Sales </span> <span class="menu-arrow"></span></a>
<ul style="display: none;">
  <li><a href="estimates.html">Estimates</a></li>
  <li><a href="invoices.html">Invoices</a></li>
  <li><a href="payments.html">Payments</a></li>
  <li><a href="expenses.html">Expenses</a></li>
  <li><a href="provident-fund.html">Provident Fund</a></li>
  <li><a href="taxes.html">Taxes</a></li>
</ul>
</li>

              <li> 
								<a href="clients.html"><i class="la la-users"></i> <span>Clients</span></a>
							</li>

              </> */}