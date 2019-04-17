import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Recipes extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                {this.props.recipes.map((recipe) => {
                    return(
                        <div key={recipe.recipe_id} className="col-md-4">
                        <center>
                            <div className="recipe_box">
                                <img
                                    className="recipe_image" 
                                    src={recipe.image_url} 
                                    alt={recipe.title }/>
                                <h5 className="recipe_title">
                                    {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0,20)}...`}
                                </h5>
                                <p className="recipe_publisher">Publisher : {recipe.publisher}</p>
                                <p className="recipe_social_rank">Social rank : {recipe.social_rank}</p>
                                <button className="recipe_show_button">
                                    <Link to={{
                                        pathname:`/recipe/${recipe.recipe_id}`,
                                        state:{recipe:recipe.title}}}>Show Recipe</Link>
                                </button>
                            </div>
                         </center>
                        </div>
                    )
                })}
            </div>
        </div>
        )
    }
}

export default Recipes;