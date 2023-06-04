import {routes} from '../Layout/router';
import {Link} from 'react-router-dom'
const Footer= ()=> (
<footer className="page-footer font-small blue pt-4 bg-dark text-light">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">SKIN-CLINIC</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequuntur esse error delectus laudantium adipisci odit, ex unde deleniti quos?</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3 text-start">
                <h5 className="text-uppercase">Usefull Links</h5>
                <ul className="list-unstyled ">
                    {/* <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li> */}
                    {routes.map((route)=>(
                    <li key={route.path}><Link to={route.path}>{route.title}</Link></li>
                    ))}
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright 
        <a href="#"> SKIN-CLINIC </a>
    </div>

</footer>
)

export default Footer