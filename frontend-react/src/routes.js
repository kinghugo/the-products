import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import NewProduct from './pages/newProduct';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/newProduct' component={NewProduct} />
                <Route path='/editProduct/:id' component={NewProduct}/> 
                </Switch>

        </Router>

    )
}
