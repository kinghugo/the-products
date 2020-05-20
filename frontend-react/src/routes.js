import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import NewProduct from './pages/newProduct';
import Login from './pages/login'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' exact component={Home} />
                <Route path='/newProduct' component={NewProduct} />
                <Route path='/editProduct/:id' component={NewProduct}/> 
                </Switch>

        </Router>

    )
}
