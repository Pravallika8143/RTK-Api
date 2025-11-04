import React from "react";
import { useGetAllRecipesQuery } from "../../services/recipesApi";


 export function Recipes(){
     var {isLoading,data}=useGetAllRecipesQuery();
    return (
        <div className="border border-2 m-3 p-3 border-dark bg-light">
            <h1>Recipes</h1>
            {isLoading && <h5>Loading... Recipes...</h5>}
            {!isLoading && (
                <ul className="d-flex flex-wrap list-unstyled justify-content-between p-3">
                    {
                       data?.recipes.map((recipe)=>{
                        return (
                            <li className="p-3 border border-1 bg-white mb-4 me-2">
                                <img src={recipe.image} width="250px" style={{marginBottom:"5%"}} alt=""/>
                                <h4>{recipe.name}</h4>
                                <h5>{recipe.cuisine}</h5>
                                <h5>{recipe.rating} <i class="bi bi-star-fill"></i></h5>
                            </li>
                        )
                       }) 
                    }
                </ul>
            )}
        </div>
    )
}
export default Recipes