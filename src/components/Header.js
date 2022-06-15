import React from 'react';

import ReactDOM from 'react-dom';
import { Link} from 'react-router-dom'
import logo from "./adroidlogo.png"
function Header(){
    return(


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

        )
}
export default Header;  