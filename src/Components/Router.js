import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from "../App";
import RecipeDetail from './RecipeDetail';
import Error from './Error';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/recipe" component={RecipeDetail} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;