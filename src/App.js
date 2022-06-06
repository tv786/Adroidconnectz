import Header from "./components/Header";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Carousel1 from "./components/Carousel1";
import Carousel2 from "./components/Carousel2";
import Img2 from "./components/img2"
import Aboutus from "./components/aboutus"
import Vismis from "./components/VisMis";
import Lower from "./components/Lower";
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    
    <div>


    <Header />
    <Navbar />
    <Carousel1 />
    <Carousel2 />



   <Vismis />
    <Img2 />


<Aboutus />
<Lower />
    <Footer />


    </div>
    );
}


export default App;
