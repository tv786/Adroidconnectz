import React from 'react';

import { Link} from 'react-router-dom'

function Navbar(){
    return(


        <nav className="navbar bg-light">
    <div className=" mt-2 mb-2 mx-auto  ">
    
    <Link
     className="me-4 example" style={{ textDecoration: 'none',color:"red" }}
    to="/" >
        Home
      </Link><a className="me-4" style={{ textDecoration: 'none', color:"red" }} href='#aboutus' >
            About Us
      </a><Link className="me-4" style={{ textDecoration: 'none' , color:"red" }} to="/features">
            Features
      </Link><a className="" style={{ textDecoration: 'none' , color:"red" }} >
        FAQ 
      </a>
      </div>
      </nav>

        )
}
export default Navbar;