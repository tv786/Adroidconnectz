import student from "./student.jpeg";
import mentor from "./mentor.jpeg";
function img2() {
  return (
    <div className=" mt-5 pt-5 " >
      <h1 className="mb-4" style={{ alignItems: "center", marginLeft: "40%" }}>
        How it
        <mark style={{ color: "red", backgroundColor: "white" }}>Works</mark>
      </h1>
      <p className="mb-5" style={{ textAlign: "center", marginLeft: "5%", marginRight: "5%",fontSize:"22px",lineHeight:"2"   }}>
        {" "}
        Adroidconnectz is an online platform to connect Students with Mentors
        and provide them with the opportunity to grow and build their career.
      </p>
      <div style={{overflow:"hidden"}}>
        <div className="me-3 ms-3">
          <img
            src={student}
            class="rounded-0 border border-danger float-start im1"
            width="600"
            height="400"
            alt="..."
          />
        </div>
        <div className="me-3 ms-3">
          <img
            src={mentor}
            class="rounded-0 border border-danger float-end im1"
            width="600"
            height="400"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
export default img2;
