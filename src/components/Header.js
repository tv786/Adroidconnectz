import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import {NavLink, Link} from 'react-router-dom'
import Contact_us from './src1/Contactus.js';
import logo from "./adroidlogo.png"
function Header(){
    return(
<Router>

        <nav className="navbar bg-dark">
  <div className=" mt-2 mb-2 container "style={{  marginRight:0} }>
      <a className="mx-auto" href={() => false}>
        <img src={logo} alt="" width="200px" height="auto" />
      </a>
    <div className="float-end mt-2 mb-2 " >

        <Link className=" btn btn-danger rounded-0 btn-lg  "  to="/contact"  >contact us</Link>
    </div>
    
  </div>
</nav>
<Routes>
          <Route path="/contact" element={<Contact_us />} />

        </Routes>
</Router>
        )
}
export default Header;  
