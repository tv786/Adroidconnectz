
  import React from 'react';
  import { Link} from 'react-router-dom'


  import logo from "./adroidlogo.png"

  function Lower(){
      return(


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

      <a class="col mb-3" style={{ textDecoration: 'none' , color:"white" }} href='#aboutus'>About Us</a>
      <a class="col mb-3" style={{ textDecoration: 'none' , color:"white" }}>Register</a>
      <Link class="col mb-3" style={{ textDecoration: 'none' , color:"white" }} to="/features">Features</Link>
      {/* <Route path='/redirect-page' element={ <Redirect to="/error-page" /> }/> */}

      <Link class="col mb-3" style={{ textDecoration: 'none' , color:"white" }} to="/contact">Contact Us</Link>
    </div>
    




  </div>
      </div>
      <div class="col lc1   ">
          <h3 className="mb-5">Know More About Us</h3>
          <a href=" https://www.facebook.com/adroidconnectz" className="fa fa-facebook mt-3 me-5 mb-4  " style={{width:"50px" ,fontSize:"30px",backgroundColor:"black",color:"white"}}></a>
          <a href=" https://twitter.com/AdroidConnectz " className="fa fa-twitter" style={{width:"50px" ,fontSize:"30px",backgroundColor:"black",color:"white"}}></a>
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
          
      )
  }
  export default Lower;
