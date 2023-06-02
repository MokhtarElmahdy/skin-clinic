import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import Contact from "../../pages/Contact/Contact"
import Information from "../../pages/Information/Information"
import PageNotFound from "../../pages/PageNotFound/PageNotFound"
import Registeration from "../../pages/Registeration/Registeration.jsx"
export const router = createBrowserRouter([
    {path: '/' ,element: <RootLayout/> , children: [
        {index: true ,element: <Home/> },
        {path: 'about' ,element: <About/> },
        {path: 'information' ,element: <Information/> },
        {path: 'contact' ,element: <Contact/> },
        {path: 'registeration' ,element: <Registeration /> },
    ],
    errorElement: <PageNotFound/>
},
    
])


export const routes = [
    {path: '/' , title: 'Home'},
    {path: 'about' , title: 'About'},
    {path: 'information' , title: 'Information'},
    {path: 'contact' , title: 'Contact'},
    // {path: 'registeration' , title: 'Registeration'},
]