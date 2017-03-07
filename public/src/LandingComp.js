import React, { Component } from 'react';
import './css/landing.css';
import LandingInfoComp from './LandingInfoComp';
import PopularItemsComp from './PopularItemsComp';

export default class LandingComp extends Component {
  render() {
    return (
      <div className="landingcomp">
        <LandingInfoComp/>
        <PopularItemsComp />
      </div>
    )
  }
}
