import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './css/index.css';
import Navbar from './Navbar';
import FooterComp from './FooterComp';

// import {Link} from 'react-router';
const App = ({children}) => (
    <div className="app">
        <Navbar />

        <div className="hero">
            <div className="background-image">
                <h1 className="logo">LEN<span>KER</span></h1>
            </div>
        </div>

        <div className="page-content">
            { children }
        </div>

        <FooterComp />
    </div>
);


const Home = () => (
    <div className="home">
        <h1>Home</h1>
    </div>
);

const Products = () => (
    <div className="products">
        <h1>Products</h1>
    </div>
);

const Workshop = () => (
    <div className="workshop">
        <h1>Workshop</h1>
    </div>
);

ReactDOM.render((
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={Home}/>
                <Route path="/products" component={Products}/>
                <Route path="/workshop" component={Workshop}/>
            </Route>
        </Router>),
    document.getElementById('root')
);

/*
Class components används bara vid använding av State.
"Vanliga" componenter som kan skicka Props är det man i huvudsak använder.

Routes:
Componenten "App" är den huvudsakliga componenten för hela appen.
Därför är det den componenten som används i Route path="/".
IndexRoute är för den componenten som ska bytas ut vid "ny sida", ny component.
Alltså, per default visas Home, men om något annat tex. klickas på visas en ny component.
Tex. "Products" eller "Workshop".
 */
