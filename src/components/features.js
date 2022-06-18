import Cards from "./features/components/cards";
import students from "./features/components/students.jpeg";
import career from "./features/components/career.jpeg";
import hackathons from "./features/components/hackathons.jpeg";
import ideathons from "./features/components/ideathons.jpeg";
import jobs from "./features/components/jobs.jpeg";
import sitesearch from "./features/components/sitesearch.png";
import email from "./features/components/email.png";
import modcom from "./features/components/modcom.jpeg";
import mes from "./features/components/mes.png";
import home from "./features/components/home.jpeg";
import topicfeed from "./features/components/topicfeed.jpeg";

import research from "./features/components/research.jpeg";
import mentors from './features/components/mentor.png'
import Navbar from "./navbar";
import Footer from "./Footer";
import connect from "./features/components/connect.jpeg"
import Header from "./Header";
function App() {
  return (
<div  style={{backgroundColor:"#CD3333"}}>
<Header />
<Navbar />

    <div className="container"  
   
    >


    <h2 className="" style={{textAlign:"center" , color:"white"}}>ADROIDCONNECTZ is an online platform to connect students with mentors and provide
them with the opportunity to grow and build their carrier.</h2>

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
    <Cards src={mentors} heading="Online Platform for Students and Mentors" text="Get connected with peers and related mentors."
    />
    </div>
    <div class="col">
    <Cards src={career} heading="Profile Building of Students" text="Build profile for growing in future. " />
    </div>
    <div class="col">
    <Cards src={hackathons} heading="Helps in initial career planning" text="Get consultation to plan career direction." />
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
    <Cards src={ideathons} heading="Internships opportunities" text="Get opportunities for desired internships offers."/>
    </div>
    <div class="col">
    <Cards src={research} heading="Job opportunities" text="Get opportunities for desired job offers." />

    </div>
    <div class="col">
    <Cards src={jobs} heading="Hackathons &amp; Ideathons" text="Get notified about Hackathons and Ideathons."/>

    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
    <Cards src={students} heading="Higher Studies opportunities" text="Get opportunities for desired higher studies opportunities."/>
    </div>
    <div class="col">
    <Cards src={connect} heading="Topic Technological Groups" text="Get connected with topic specific peers and mentors."/>
    </div>
    <div class="col">
    <Cards src={sitesearch} heading="Site Search" text="Get instant answers by searching our archives."/>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
    <Cards src={mes} heading="Private Messages" text="Connect with others, individually or in groups."/>
    </div>
    <div class="col">
    <Cards src={email} heading="Email Notifications" text="Get notified about new activity on your interests."/>
    </div>
    <div class="col">
    <Cards src={home} heading="Custom Homapage" text="Stay updated on the people and topics you follow."/>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
    <Cards src={topicfeed} heading="Topic Feeds" text="Filter out the noise. Find just what you need."/>
    </div>
    <div class="col">
    <Cards src={modcom} heading="Moderated Community" text="Real names. Real people. No advertising. No BS."/>
    </div>
    <div class="col">
    {/* <Cards src={students} heading="Custom Homapage" text="Stay updated on the people and topics you follow."/> */}
    </div>
  </div>
</div>
<Footer />


    
</div>
  );
}

export default App;
