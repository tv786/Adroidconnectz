
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import {NavLink, Link} from 'react-router-dom'
import Contact_us from './src1/Contactus.js';
import App from '../App.js';
import logo from "./adroidlogo.png"

function Lower(){
    return(
      <Router>

        <div className=" pt-5 pb-5" style={{backgroundColor:"black" , color:"white"}}>
        <div class="container">
  <div class="row">
    <div class="col me-4 mb-5 lc1">
    <div className="">
    <div className="mb-5">

            <a className="mx-auto " href={() => false}>
        <img src={logo} alt="" width="200px" height="auto" />
      </a>
    </div>
      <p style={{}}>
      Adroidconnectz is an online platform to connect students with mentors and provide them with the opportunity to grow and build their carrier.
      </p>
            </div>
    </div>
    <div class="col me-4 lc1 mb-5">
        <h3 className="mb-4">Useful Links</h3>
        <div class="container">
  <div class="row row-cols-2">

    <a class="col mb-3" style={{ textDecoration: 'none' , color:"white" }}>About Us</a>
    <a class="col mb-3" style={{ textDecoration: 'none' , color:"white" }}>Register</a>
    <a class="col mb-3" style={{ textDecoration: 'none' , color:"white" }}>Features</a>
    {/* <Route path='/redirect-page' element={ <Redirect to="/error-page" /> }/> */}

    <Link class="col mb-3" style={{ textDecoration: 'none' , color:"white" }} to="/contact">Contact Us</Link>
    {/* <a class="col mb-3" style={{ textDecoration: 'none' , color:"white" }}>Contact Us</a> */}
  </div>
   

{/* <switch>
<Routes>


    <Route exact path="/contact_us" element={<Contact_us />}>Contact_us</Route>
</Routes>
</switch> */}


</div>
    </div>
    <div class="col lc1   ">
        <h3 className="mb-5">Know More About Us</h3>
        <a href="" className="fa fa-facebook mt-3 me-5 mb-4  " style={{width:"50px" ,fontSize:"30px",backgroundColor:"black",color:"white"}}></a>
        <a href="" className="fa fa-twitter" style={{width:"50px" ,fontSize:"30px",backgroundColor:"black",color:"white"}}></a>
        <div>
            <h6>Address :</h6>
            <p>I-4/125, First Floor, Sector-16,  Rohini, Delhi-110085, INDIA</p>
        </div>
        <div>
            <h8>Email :</h8>
            <p>adroidconnectz@gmail.com</p>
        </div>
    </div>
  </div>
</div>
            
        </div>
        <Routes>
          <Route path="/contact" element={<Contact_us />} />

        </Routes>
      </Router>
    )
}
export default Lower;
