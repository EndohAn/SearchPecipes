import {useEffect,useState} from "react";
import video from './food.mp4';

import './App.css';
import MyRecipesComponent from "./MyRecipesComponent";


function App() {

 const MY_ID ="801c72eb";
 const MY_KEY = "29c30b95fab850060525f868bb388667";
 const[ mySearch,setMySearch ] = useState('');
 const[ myRecipes, setMyRecipes ] = useState([]);
 const[wordSubmitted, setWordSubmitted] = useState('tomato');
 

useEffect ( () => {
    const getApi =async()=>{
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data);
  }
   getApi();
},[wordSubmitted]);


const myRecipeSearch = (e)=>{
  console.log(e.target.value);
  setMySearch(e.target.value)
}

const finalSearch = (e) =>{
  e.preventDefault();
  setWordSubmitted(mySearch);
}
 
return (

  <div className="app" >
   <div  className="container">
  <video autoPlay muted loop>
  <source src ={video} type ="video/mp4"/>
  </video>

<h1>Find a Recipes</h1>
  </div>

  <div className="container">
    <form onSubmit = {finalSearch}>
      <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}>
      </input>
    </form>
  </div>

  <div className="container">
    <button>
    <img className="icons" src = "https://img.icons8.com/plasticine/512/tap.png" alt="icon" />
    </button>
    


    {myRecipes.map(element =>{
      <MyRecipesComponent
       propsLabel = {element.recipe.label} 
       propsImage={element.recipe.image}
       propsCalorie ={element.recipe.calories}
       propsIngredients ={element.recipe.ingredientLines} />
    })}
  </div> 
  </div>
  
)
}


export default App;
