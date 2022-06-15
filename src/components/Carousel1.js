import acarousel1 from "./acarousel1.jpeg";
import acarousel2 from "./acarousel2.jpeg";
import acarousel3 from "./acarousel3.jpeg";
import acarousel4 from "./acarousel4.jpeg";
import acarousel5 from "./acarousel5.jpeg";
import acarousel6 from "./acarousel6.jpeg";

function Carousel1() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={acarousel1} className="d-block w-100" alt="1" />
          <div class="carousel-caption c1b ">
            {/* <button className="btn btn-dark btn-lg rounded-0 c1but     "style={{marginLeft:'90%' } } >Register</button> */}
      </div>
        </div>
        <div className="carousel-item">
          <img src={acarousel2} className="d-block w-100" alt="2" />
          <div class="carousel-caption c1b ">
            {/* <button className="btn btn-dark btn-lg rounded-0 c1but"style={{marginLeft:'90%'} } >REGISTER</button> */}
      </div>
        </div>
        <div class="carousel-item">
          <img src={acarousel3} className="d-block w-100" alt="3" />
          <div class="carousel-caption c1b  ">
            <button className="btn btn-dark btn-lg rounded-0 c1but "style={{marginLeft:'90%'} } >REGISTER</button>
      </div>
        </div>
        <div class="carousel-item">
          <img src={acarousel4} className="d-block w-100" alt="4" />
          <div class="carousel-caption c1b ">
            {/* <button className="btn btn-dark btn-lg rounded-0 c1but"style={{marginLeft:'90%'} } >REGISTER</button> */}
      </div>
        </div>
        <div class="carousel-item">
          <img src={acarousel5} className="d-block w-100" alt="5 "/>
          <div class="carousel-caption c1b ">
            {/* <button className="btn btn-dark btn-lg rounded-0 c1but"style={{marginLeft:'90%'} } >REGISTER</button> */}
      </div>
        </div>
        <div class="carousel-item">
          <img src={acarousel6} className="d-block w-100" alt="6" />
          <div class="carousel-caption c1b ">
            {/* <button className="btn btn-dark btn-lg rounded-0 c1but "style={{marginLeft:'90%'} } >REGISTER</button> */}
      </div>
        </div>

      </div>
    </div>
  );
}
export default Carousel1;
