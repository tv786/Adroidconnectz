import logo from "./logo.png"
function Navbar(){
    return(


<nav class="navbar navbar-expand-lg bg-dark mb-5  " style={{fontSize:"12px", fontWeight: "bold", color:"white" ,top:0 ,position:"" ,right:0 ,left:0 }}>
  <div class="container-fluid">
  
  <a class="navbar-brand ms-3 me-3" href="#"><img src={logo} alt="image"height="40px" width="auto" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-4 ms-4">
          <a class="nav-link active " aria-current="page" href="#" style={{color:"white"}}>


          PRICING

  

          </a>
        </li>
        
        <div class="collapse navbar-collapse me-4 ms-4" id="navbarNavDropdown" >
   
       
        <li class="nav-item dropdown me-4 ms-4" >
          <a class="nav-link dropdown-toggle nav-link active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>



                LEARN


          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li style={{fontSize:"12px", fontWeight: "bold", color:"black" ,backgroundColor:"white"}}><a class="dropdown-item " href="#">
            FREE TRAINING AND RESOURCES</a></li>
            <li style={{fontSize:"12px", fontWeight: "bold", color:"black"}}><a class="dropdown-item  " href="#">PROFESSIONAL DEVELOPMENT</a></li>

          </ul>
        </li>
        </div>
        <li class="nav-item me-4 ms-4">
          <a class="nav-link active" href="#" style={{color:"white"}}>
          <b>

          BLOG
          </b>
          </a>
        </li>
        <li class="nav-item dropdown me-4 ms-4">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>

            ABOUT

            
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li style={{fontSize:"12px", fontWeight: "bold", color:"black"}}><a class="dropdown-item " href="#" >PROJECT PALS TEAM</a></li>
            <li style={{fontSize:"12px", fontWeight: "bold", color:"black"}}><a class="dropdown-item" href="#">NEWS</a></li>

          </ul>
        </li>
        <li class="nav-item me-4 ms-4">
          <a class="nav-link active" href="#" style={{color:"white"}}>CONTACT</a>
        </li>
       
      </ul>
      <div class="d-flex" role="search">
      <a class="nav-link me-4 ms-4 mt-2" href="#" style={{fontSize:"15px"}}>Sign in</a>

        <button class="btn btn-primary rounded-0 me-4 ms-4" type="submit">Get a free demo</button>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Navbar