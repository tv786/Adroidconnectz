import bg1 from "./bg1.jpeg";
import red from "./red.png";
function Aboutus() {
  return (
    <div className="mt-5 pt-5 pb-5"
      style={{
        backgroundImage: `url(${bg1}), 
        url(${red})
         `,
         backgroundBlendMode:"multiply",
         color:"white",
         opacity:"0.75"

      }}
    >

      <h1 style={{ textAlign: "center",fontSize:"40px" }} >About Us</h1>
      <div className="border mt-5 mb-5 pt-4 pb-4 pe-4 ps-4" style={{ position:"" ,marginLeft: "10%", marginRight: "10%" ,fontSize:"18px",lineHeight:"2"   }}>
        <p>
          Adroid Connectz is the nation's biggest community of students and
          mentors , providing the one stop solution to all the queries related
          to startups , research , internships , higher studies ,innovations
          etc.
        </p>

        <p>
          Team of Adroid Connectz comprises of renowned ressearches and
          enterpreneurs . This team motivates the students to undertake a career
          exploration journey and make appropriate career choices at right time.
        </p>
        <p>
          Adroid Connectz consistly updates the students to pace up with
          everchangng dynamism of technology and environment
        </p>
      </div>
    </div>
  );
}
export default Aboutus;
