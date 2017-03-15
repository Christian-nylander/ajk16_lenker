import React from 'react';
import './css/index.css';

const BackstageComp = () =>
    (
      <div className="backstagecomp">
        <p className="backstage-content"><span>Tools</span> can be very expensive and we think that everyone should not be limited by that.
          You might need a jigsaw once and buy that for a one time use is not so bright. There is were Lenker comes in!
            <br/>Rent the tools you need, for as long as you need.
          We make sure that the tools are in a great condition, every time you rent.
          So make room in your garage for your collection of bikes or fancy cars instead of tools you use every fifth year!
        </p>
        <div className="backstage-images-container">
          <img className="backstage-image"
              src="https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/17077089_375177799535979_8179748417614905344_n.jpg"
              alt="Pics"/>
          <img className="backstage-image"
              src="https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/17077089_375177799535979_8179748417614905344_n.jpg"
              alt="Pics"/>
          <img className="backstage-image"
              src="https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/17077089_375177799535979_8179748417614905344_n.jpg"
              alt="Pics"/>

        </div>
      </div>
    );

export default BackstageComp;
