import "./App.css";
import ClassComponent from './Components/class-based-component';
import {FunctionalComponent1,FunctionalComponent2} from './Components/fuctional-component';
import ProductList from "./Components/products/product-list";
import Classcomponentcount from "./components/class-based-count"
import Users from "./Components/users/user"
import { useState } from "react";
import ContextButton from "./Components/context-comp/button";
import ContextText from "./Components/context-comp/text";

let dummyproducts=[
  {
   name:"iphone",
   price:"1000$"
  },

  {
   name:"Headphones",
   price:"1200$"
  },

  {
   name:"Laptop",
   price:"2500$"
  }
];

const flag=false;

function App() {

  const [userslist,setUserslist]=useState([]);

  /*function rendertextblock(getflag){
    return(
      getflag ?  <FunctionalComponent1 /> : <FunctionalComponent2 />
    )
  }*/

  //let rendertextblock=flag ? <FunctionalComponent1 /> : <FunctionalComponent2 />;

  function rendertextblock(){
    if(flag){
      return <FunctionalComponent1 />;
    }else{
      return <FunctionalComponent2 />;
    }
  }

  return (
    <div className="App">
     <h1 className="Heading">Hello, React with Vite</h1>
      <h2 className="sub-heading">Components of React</h2>
      <ClassComponent />
      {
        /*flag ?  <FunctionalComponent1 /> : <FunctionalComponent2 />*/
      } 

      {/* {rendertextblock(flag)} */}

      {/*{rendertextblock}*/}

      {rendertextblock()}

      <Classcomponentcount/>
      <ProductList listofproducts={dummyproducts} name="John" city="abc"/>   
      <Users/>
      <ContextButton/>  
      <contextText/>
    </div>
  );
}

export default App;