import React from 'react';
import './css/items.css'

const PopularItemsComp = () => (
    <div className="popularitemscomp">
      <h2 className="itemTopic">MOST POPULAR TOOLS</h2>
      <div className="items-container">
        <div className="items">
          <img className="itemImg" src="../assets/drill.jpg" alt="Tool"/>
          <h3>MEGA DRILL</h3>
          <p>1200$</p>
          <button className="button-rent">Rent</button>
        </div>
        <div className="items">
          <img className="itemImg" src="../assets/drill2.jpg" alt="Tool"/>
          <h3>AWSOME DRILL</h3>
          <p>899$</p>
          <button className="button-rent">Rent</button>
        </div>
        <div className="items">
          <img className="itemImg" src="../assets/drill3.jpg" alt="Tool"/>
          <h3>COOL DRILL</h3>
          <p>299$</p>
          <button className="button-rent">Rent</button>
        </div>
        <div className="items">
          <img className="itemImg" src="../assets/taps.jpg" alt="Tool"/>
          <h3>DELUXE DRILL</h3>
          <p>999$</p>
          <button className="button-rent">Rent</button>
        </div>
      </div>
    </div>
);

export default PopularItemsComp;
