import axios from 'axios';
import React, {Component} from 'react';
import "./css/items.css";


// export default class Products extends Component {
//     constructor() {
//         super();
//         this.state = {};
//     }
//
//     // Lifecycles
//     componentWillMount(){
//         // Called the first time the component is loaded right before the component is added to the page
//         this.search();
//     }
//
//     componentDidMount(){
//         // Called after the component has been renders into the page
//     }
//
//     componentWillReceiveProps(nextProps){
//         // Called when the props provided to the component are changed
//
//     }
//
//     componentWillUpdate(nextProps, nextState){
//         // Called when the props and/or state change
//     }
//
//     componentWillUnmount(){
//         // Called when the component is removed
//     }
//
//     updateSearch() {
//         this.search(this.refs.query.value);
//     }
//
//     render() {
//         var movies = _.map(this.state.movies, (movies) => {
//             return <li>{movies.Title}</li>
//         });
//         return (
//             <div>
//                 <input ref="query" onChange={ (e) => { this.updateSearch() }} type="text"/>
//                 <ul>{movies}</ul>
//             </div>
//         )
//     }
//     search(query = "die"){
//         var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=short`;
//         Request.get(url).then((response) => {
//             this.setState({
//                 movies: response.body.Search,
//                 total: response.body.totalResults
//             });
//         });
//     }
// }

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            foundProducts: []
        }
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/hassehulabeck/datasets/master/products.json')
            .then(res => {
                console.log(res.data.products);

                this.setState({
                    products: res.data.products
                });
            })
            .catch(err => console.error(err))
    };

    renderProducts(products) {
        return products.map((product, i) => (
                <div className="products-wrapper" key={i}>
                    <img className="product-image itemImg" src="../assets/drill.jpg" alt="Tool"/>
                    <h3>{product.name}</h3>
                    <p>${product.consumerPrice}</p>
                    <button className="button-rent">Rent</button>
                </div>
            )
        );
    };

    search() {
        const {products} = this.state;
        let query = this.searchInput.value;
        let foundProducts = [];
        if (foundProducts) {
            foundProducts = products.filter((product) =>
                (product.name.toLowerCase().includes(query.toLowerCase()) || product.manufacturer.toLowerCase().includes(query.toLowerCase()) || product.consumerPrice.toString().includes(query))
            );
        }
        this.setState({foundProducts});
    }

    render() {
        const {products, foundProducts} = this.state;
        return (
            <div className="product-page">
                <div className="input-container">
                    <input
                        type="text"
                        id="search"
                        ref={(element) => this.searchInput = element }
                        onChange={() => this.search()}
                        placeholder="&#xF002;"
                    />
                </div>
                <div className="product-container">
                    {
                        !foundProducts.length ?
                            this.renderProducts(products) :
                            this.renderProducts(foundProducts)
                    }
                </div>
            </div>
        );
    }
}
