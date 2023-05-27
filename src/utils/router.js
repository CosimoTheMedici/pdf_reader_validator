import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import { 
   Ndex, UploadFile, Tickets,
    
} from '../components/pages'

export const router = createBrowserRouter([
   
    {
        path:'/',
        element:<Ndex />
    },
    {
        path:'/tab',
        element:<Tickets />
    },
    {
        path:'/upload-doc',
        element:<UploadFile />
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