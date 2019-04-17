import React,{Component} from 'react';

class Form extends Component{
    render(){
        return(
            <form onSubmit={this.props.getRecipe} className="form" >
                <input className="form_input" input="text" name="recipeName" />
                <button className="form_button">Search</button>
            </form>
        )
    }
}

export default Form; 