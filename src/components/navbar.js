import React from 'react';


function Navbar(){
    return(


        <nav className="navbar bg-light">
    <div className=" mt-2 mb-2 mx-auto  ">
    
    <a 
     className="me-4 example" style={{ textDecoration: 'none',color:"red" }}
     >
        Home
      </a><a className="me-4" style={{ textDecoration: 'none', color:"red" }} >
            About Us
      </a><a className="me-4" style={{ textDecoration: 'none' , color:"red" }} >
            Features
      </a><a className="" style={{ textDecoration: 'none' , color:"red" }} >
        FAQ 
      </a>
      </div>
      </nav>

        )
}
export default Navbar;