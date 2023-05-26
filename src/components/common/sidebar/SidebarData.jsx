import { Clipboard, Home, Users,FileText } from 'react-feather';

export const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <Home />,
      exact: "true",
    },
    {
      name: "Customers",
      path: "/customers",
      icon: <Users />,
      exact: "false",
    },
    {
      name: "Estimates",
      path: "/estimates",
      icon: <i data-feather="file-text"></i>,
      exact: "false",
    },
    {
      name: "Invoices",
      path: "#",
      icon: <i data-feather="clipboard"></i>,
      exact: "false",
      subMenuItems: [
        {
          name: "Invoices List",
          path: "/invoices",
        },
        {
          name: "Invoices Grid",
          path: "/invoice-grid",
        },
        {
          name: "Invoices Grid 2",
          path: "/invoice-grid-two",
        },
     
      ],
    },
    {
          name: "Base UI",
          path: "#",
          icon: <i data-feather="file-text"></i>,
          exact: "false",
          subMenuItems: [
            { name: "Alerts", path: "/alerts" },
            { name: "Accordions", path: "/accordions" },
            { name: "Avatar", path: "/avatar" },
            { name: "Badges", path: "/badges" },
            { name: "Buttons", path: "/buttons" },
     
          ],
        },
        {
          name: "Invoices List",
          path: "/invoices",
          exact: "false",
        },
   
      
      
  ];