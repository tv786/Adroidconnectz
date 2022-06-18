import students from "./students.jpeg";
function Cards(props){
    return(

        <div class="card col m-5 border-0 h-100 " style={{ 
                // width: "15rem" ,
        backgroundColor:"black" ,color:"white"
        }}
        >
<img src={props.src} class="card-img-top" alt="..."  width="100px" height="200px"/>
<div className="card-body">
<h6>{props.heading}</h6>
  <p className="card-text">{props.text} </p>
</div>
</div>
        )
}
export default Cards