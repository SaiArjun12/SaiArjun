import React,{useState} from "react";


const App=() => {
  const[counter,setCounter]=useState(0);
  const[circleColor,setCircleColor]=useState("yellow");
     
  const increaseCounter=()=> {
    setCounter((prevCounter)=>prevCounter+1);
  };
  const changeCircleColor=()=>{
    const colors=["black","white",
    "aqua",
    "green",
    "blue",
    "yellow",
    "magenta",
    "cyan",
    "orange",
    "purple"];
    const randomColor=colors[Math.floor(Math.random()*colors.length)];
    setCircleColor(randomColor);
  };
  return (
    <div>
      <button style={{
        position:"relative",
        top:"333px",
        left:"520px",
        width:"180px",
        height:"50px",
        fontSize:"20px",
        fontWeight:"bold"

      }} onClick={increaseCounter}>click to increase counter</button>
      <div
      style={{
        width:"300px",
        height:"300px",
        borderRadius:"50%",
        backgroundColor:circleColor,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"black",
        fontSize:"30px",
        fontWeight:"bold",
        marginLeft:"450px",
        marginTop:"100px"
      }}
      >
        {counter}
      </div>
      <button style={{position:"relative",
                           top:"20px",
                           left:"530px",
                           backgroundColor:"green",
                           width:"150px",
                           height:"50px",
                           color:"white",
                           fontWeight:"bold",
                           fontSize:"20px"}}
                           onClick={changeCircleColor}
                           className="btn2">change color</button>
    </div>
  )
}
export default App;
