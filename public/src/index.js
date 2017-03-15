import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './css/index.css';
import Navbar from './Navbar';
import FooterComp from './FooterComp';
import PopularItemsComp from "./PopularItemsComp";
import Products from './Products';
import BackstageComp from './BackstageComp';
import PartnersComp from './PartnersComp';


const App = ({children}) => (
    <div className="app">
        <Navbar />

        <div className="hero">
            <div className="background-image">
                <Link to="/"><h1 className="logo">LEN<span>KER</span></h1></Link>
            </div>
            {/*<i className="fa fa-angle-double-down" aria-hidden="true"></i>*/}
        </div>

        <div id="scroll-to" className="page-content">
            { children }
        </div>

        <FooterComp />
    </div>
);

const Home = () => (
    <PopularItemsComp />
);

const ProductPage = () => (
    <div className="products">
        <h2 className="itemTopic">ALL PRODUCTS</h2>
        <Products/>
    </div>
);

const WorkshopPage = () => (
    <div className="workshop">
        <h1>Workshop</h1>
    </div>
);

const BackstagePage = () => (
    <BackstageComp />
);

const PartnerPage = () => (
    <PartnersComp/>
);


ReactDOM.render((
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={Home}/>
                <Route path="/products" component={ProductPage}/>
                <Route path="/workshop" component={WorkshopPage}/>
                <Route path="/backstage" component={BackstagePage}/>
                <Route path="/partners" component={PartnerPage}/>
            </Route>
        </Router>),
    document.getElementById('root')
);
