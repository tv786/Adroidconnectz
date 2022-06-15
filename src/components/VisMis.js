import write from "./write.jpeg";
function Vismis(){
    return(
        <div className="mb-5" style={{overflow:"hidden",backgroundImage: `url(${write})`}}>
            <div className="float-start ms-5 ps-3 pt-5 pb-3" style={{marginRight:"30%"}}>
                <h1 className="pt-5">Our  <mark style={{color:"red", backgroundColor:"none"}}>

Vision
</mark></h1>
                <p>To provide an ecosystem to excel the student community, being a thinker, innovator or implementer, creates a comfortable zone for students and mentors to discuss about the research, startup or counselling.</p>
            </div>
            <div className="float-end me-5 pe-3 pt-5 pb-5" style={{marginLeft:"30%"}}>
                <h1 className="float-end pe-5">Our  <mark style={{color:"red", backgroundColor:"none"}}>

Mission    
</mark></h1>
                <div className="float-start">

            <p>

                - To instill the abilities of a thinker, innovator and implementor in students community by providing them an interactive and learning platform from mentors to excel in the field of research and startups.
            </p>

                - To guide, support and counsel students in their initial career planning stages.

                </div>
            </div>

        </div>
    )
}
export default Vismis