import logo from "./logo.png"

function Low() {
  return (
    <div
      class="row justify-content-between pb-5 pt-5"
      style={{ backgroundColor: "#2b2b2b", color: "white" }}
    >


      <div class="col-sm-4">
        <a class="navbar-brand mt-4 mb-4" href="#">
          <img src={logo} alt="image" height="40px" width="auto"/>
        </a>
        <p class="mb-4 mt-4">Chatsworth, California, USA</p>
        <div class="pb-4 mb-5 mt-5">
          <a
            href="#"
            class="fa fa-facebook  me-2 ms-2 mt-4" 
            style={{
              width: "50px",
              fontSize: "30px",
              backgroundColor: "#2b2b2b",
              color: "white",
            }}
          ></a>
          <a
            href="#"
            class="fa fa-twitter  me-2 ms-2 mt-4"
            style={{
              width: "50px",
              fontSize: "30px",
              backgroundColor: "#2b2b2b",
              color: "white",
            }}
          ></a>
          <a
            href="#"
            class="fa fa-youtube  me-2 ms-2 mt-4"
            style={{
              width: "50px",
              fontSize: "30px",
              backgroundColor: "#2b2b2b",
              color: "white",
            }}
          ></a>
          <a
            href="#"
            class="fa fa-instagram  me-2 ms-2 mt-4"
            style={{
              width: "50px",
              fontSize: "30px",
              backgroundColor: "#2b2b2b",
              color: "white",
            }}
          ></a>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              <h5>Product</h5>

              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    PRICING
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    GET A DEMO
                  </a>
                </li>
              </ul>
            </div>
            <div class="col">
              <h5>Resources</h5>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Professional Development
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Free Training
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Free PBL eBook
                  </a>
                </li>
              </ul>{" "}
            </div>
            <div class="col">
              <h5>Company</h5>

              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    News
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Terms
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 "  style={{ textAlign: "center" }}>
        © 2022 Project Pals All rights reserved
      </div>
    </div>
  );
}

export default Low;
