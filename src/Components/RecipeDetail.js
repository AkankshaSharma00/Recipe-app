import React,{Component} from 'react';
import {Link} from "react-router-dom";

const API_KEY = "40e9a8c19e5404eefc695b3519969d6f";


class RecipeDetail extends Component{ 
    state={
        activeRecipe:[]
    }

    componentDidMount= async() => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json(); 
        // console.log(res.recipes[0]);
        this.setState({ activeRecipe : res.recipes[0] })
        console.log(this.state.activeRecipe);
    
      }
     
    render(){
        // console.log(this.props)
        const recipe = this.state.activeRecipe;
        return(
            <div className="container">
                {this.state.activeRecipe.length !== 0 &&
                    <div className="activeRecipe">
                        <img className="activeRecipe_img" src={recipe.image_url} alt={recipe.title} />
                        <h3 className="activeRecipe_title">{recipe.title}</h3>
                        <h4 className="activeRecipe_publisher">Publisher : 
                            <span>
                                {recipe.publisher}
                            </span>    
                        </h4>
                        <p className="activeRecipe_website">Website : 
                            <span>
                                <a href={recipe.source_url}>{recipe.source_url}</a>
                            </span>
                        </p>
                        <button className="form_button">
                            <Link to="/" >Home</Link>
                        </button>
                    </div>
                }
            </div>
        );
    }
};

export default RecipeDetail;