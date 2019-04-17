import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header";
import Form from "./Components/Form";
import Recipes from "./Components/Recipes";

// https://www.food2fork.com/api/search?key=40e9a8c19e5404eefc695b3519969d6f&q=chicken%20breast&page=2 

const API_KEY = "40e9a8c19e5404eefc695b3519969d6f";

class App extends Component {
  state ={
    recipes : []
  }

  getRecipe = async(e) => {
    e.preventDefault();

    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=2 
    `);
    const data = await api_call.json(); 

    this.setState({ recipes : data.recipes })
    console.log(this.state.recipes);
  }

  componentDidUpdate = ( ) => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  }

  componentDidMount = () =>{
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes : recipes});
  }

  render() {
    return (
      <div className="App">
        <Header />        
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;

