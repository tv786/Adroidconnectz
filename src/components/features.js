import Cards from "./features/components/cards";
import students from "./features/components/students.jpeg";
import career from "./features/components/career.jpeg";
import hackathons from "./features/components/hackathons.jpeg";
import ideathons from "./features/components/ideathons.jpeg";
import jobs from "./features/components/jobs.jpeg";
import research from "./features/components/research.jpeg";
import mentors from './features/components/mentor.png'
import Navbar from "./navbar";
import Footer from "./Footer";
import connect from "./features/components/connect.jpeg"
function App() {
  return (
<div  style={{backgroundColor:"#CD3333"}}>

<Navbar />

    <div className="container"  
   
    >


    <h1 className="" style={{textAlign:"center"}}>Join India’s biggest community of students and mentors </h1>

  <div class="row align-items-start">
    <div class="col">
    <Cards src={students} heading="PROFILE" text="Join to build your profile for higher studies and help in initial career planning stages"
    />
    </div>
    <div class="col">
    <Cards src={career} heading="CAREER COUNSELLING " text="Children must be taught how to think not what to think . Join us for free counselling " />
    </div>
    <div class="col">
    <Cards src={hackathons} heading="HACKATHONS" text="Join India ‘s unique online portal for internship , hackathons and ideathons ." />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
    <Cards src={ideathons} heading="IDEATHONS" text="Ideas are  easy . Implementation is hard . Learn to be thinker and implementer "/>
    </div>
    <div class="col">
    <Cards src={research} heading="RESEARCH" text="Learn to Re-search existing things in new and create new knowledge" />

    </div>
    <div class="col">
    <Cards src={jobs} heading="JOB OPPPORTUNITIES AND HIGHER STUDIES" text="Join for higher studies and help in job opportunities"/>

    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Cards src={mentors} heading="MENTORS" text="Mentors are available for all academics , industrial , training and counselling purposes "/>
    </div>
    <div class="col">
    <Cards src={connect} heading="MENTORS AND CONNECTION" text="Build a stronger relations between students and mentors by providing them a platform to connect ."/>
    </div>
    <div class="col">
    {/* <Cards src={students} heading="PROFILE" text="Join to build your profile for higher studies and help in initial career planning stages"/> */}
    </div>
  </div>
</div>
<Footer />


    
</div>
  );
}

export default App;
