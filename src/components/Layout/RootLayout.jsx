import React from "react"
import Appbar from "../Navbar/Appbar"
import Footer from "../Footer/Footer"
import {Outlet} from 'react-router-dom'

const RootLayout= () => (
    <React.Fragment>
        <Appbar />
        <div className="App bg-light">
           <Outlet />    
        </div>
        <Footer/>
    </React.Fragment>
    )
export default RootLayout