
import {useState} from "react";
import {useEffect} from "react";

function FunctionalComponent1() {

  const [flag,setFlag]=useState(false)

  function handlefunc(){
    setFlag(!flag);
  }

  useEffect(()=>{
    setFlag(!flag);
    console.log("run only once page load");
  },[])//here no dependency so no chance to change state so it render only once page load

  return (
    <div>
      <button onClick={handlefunc}>Show true/false</button>
      {
        flag  ? <h1>Functional Component 1</h1>
        :null
      }
    </div>
  );
}


const FunctionalComponent2 = () => {
  const [count,setCount]=useState(0)
  const [changestyle,setChangestyle]=useState(true)

  function handlefunc(){
    setCount((prevCount) => prevCount + 1);
  }

    useEffect(()=>{
      console.log("Current count:", count);
      console.log("count value changed");
      if(count === 10){
        setChangestyle(false)
      }
      else{
        setChangestyle(true)
      }
    },[count])//herecount is dependency when count state change then useEffect will run and check the condition and change the style of text color

  console.log("component render", changestyle);
  
  return (
    <div> 
      <button onClick={handlefunc}>Increment</button>
      <h2>{count}</h2>
      <p style={{ color: changestyle ? "blue" : "red" }}>
        This text color changes based on the count!
      </p>
    </div>
  );
}

export { FunctionalComponent1, FunctionalComponent2 };