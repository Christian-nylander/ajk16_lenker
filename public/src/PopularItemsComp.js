import React, { Component } from 'react';
import './css/items.css'

export default class PopularItemsComp extends Component {
  render() {
    return (
      <div className="popularitemscomp">
        <h2 id="itemTopic">MOST POPULAR ITEMS</h2>
        <div className="items-container">
          <div className="items">
            <img className="itemImg" src={this.props.Cross} alt="Tool"/>
            <h3>Text</h3>
            <p>Pris</p>
          </div>
          <div className="items">
            <img className="itemImg" src={this.props.Cross}  alt="Tool"/>
            <h3>Text</h3>
            <p>Pris</p>
          </div>
          <div className="items">
            <img className="itemImg" src={this.props.Cross}  alt="Tool"/>
            <h3>Text</h3>
            <p>Pris</p>
          </div>
          <div className="items">
            <img className="itemImg" src={this.props.Cross}  alt="Tool"/>
            <h3>Text</h3>
            <p>Pris</p>
          </div>
        </div>
      </div>
    )
  }
}
