function MyRecipesComponent({propsLabel ,propsImage, propsCalorie,propsIngredients}){
    return(
        <div>
<div> className="container"
    <h2>{propsLabel}</h2>

</div>
<div className="container">
    <img className="tasty" src={propsImage} alt="recipe"/>
</div>
<ul className="list">
    {propsIngredients.map(item =>(
           <li>
            <img className="icon" src="https://img.icons8.com/laces/512/ok.png" alt ="icon"/>{item}
            </li>

    ))}
</ul>
<div  className="container">
    <p>{propsCalorie.toFixed()}calories</p>
</div>
        </div>
    )
}
export default MyRecipesComponent;