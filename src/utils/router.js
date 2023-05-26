import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import { 
   Ndex,
    
} from '../components/pages'
import Tickets from '../components/pages/Tickets'

export const router = createBrowserRouter([
   
    {
        path:'/',
        element:<Ndex />
    },
    {
        path:'/tab',
        element:<Tickets />
    },
    // {
    //     path:'/reset',
    //     element:<Reset />
    // },
    // {
    //     path:'/register',
    //     element:<Register />
    // },
    // {
    //     path:'/recovery',
    //     element:<Recovery />
    // },
    // {
    //     path:'/profile',
    //     element:<Profile />
    // },
    // {
    //     path:'*',
    //     element:<PageNotFound/>
    // }
])