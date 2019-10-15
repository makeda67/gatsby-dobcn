import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/heading/Navbar.js';
import Footer from './components/footer/Footer.js';
import Catalog from './pages/catalog.js';
import Product from './pages/product.js';
import NotFound from './pages/404.js';


import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Catalog} />
                        <Route path='/:id' exact component={Product} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div> 
            </Router>
        )
    }
}

export default App;