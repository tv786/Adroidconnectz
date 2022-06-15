import students from "./students.jpeg";
function Cards(props){
    return(

        <div class="card col m-5 border-0 p-3  " style={{ width: "15rem" ,
        backgroundColor:"black" ,color:"white"
        }}
        >
<img src={props.src} class="card-img-top" alt="..." />
<div className="card-body">
<h6>{props.heading}</h6>
  <p className="card-text">{props.text} </p>
</div>
</div>
        )
}
export default Cards