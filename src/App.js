import {useEffect,} from "react";


import './App.css';


function App() {

 const MY_ID ="801c72eb";
 const MY_KEY = "29c30b95fab850060525f868bb388667	— ";

useEffect ( () => {
    const getApi =async()=>{
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=tomato&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data);

  }
  // getApi();
},[])

 
return(
  <div>
<h2>test</h2>
  </div>
)
  
  
}

export default App;
