import bcarousel1 from "./bcarousel1.jpeg";
import bcarousel2 from "./bcarousel2.jpeg";
import bcarousel3 from "./bcarousel3.jpeg";
import doodle from "./doodle1.jpeg";

function Carousel2() {
  return (
    <div className=""    
        style={{ backgroundImage: `url(${doodle})`, alignItems:"center", opacity:""}}
    >

    <h1 className="pt-5 pb-5 " style={{textAlign: "center"}}>What is 
    <mark style={{color:"red", backgroundColor:"transparent"}}>

    Adroidconnectz?
    </mark>
    </h1>
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide "
      data-bs-ride="carousel"


    >
      <div className="carousel-inner pb-5 " style={{paddingLeft:"13%"}}>
        <div className="carousel-item active">
          <img src={bcarousel1} className="w-70 c2i" alt="1" />
        
        </div>
        <div className="carousel-item">
          <img src={bcarousel2} className=" w-70 c2i" alt="2" />
       
      </div>
        
        <div class="carousel-item">
          <img src={bcarousel3} className=" w-70 c2i" alt="3" />
       
      </div>
        
        

      </div>
    </div>
    </div>
  );
}
export default Carousel2;
