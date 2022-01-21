import React from 'react';
import './index.css';
//import OwlImg from './images/owl.png'; 
//import BroccoliImg from './images/broccoli.png'; 
import Apple from './images/Apple_avatar.jpg'; 
import Apricot from './images/Apricot_avatar.jpg'; 
import Banana from './images/Banana_avatar.jpg'; 
import Blackberries from './images/Blackberries_avatar.jpg';
import Blueberries from './images/Blueberries_avatar.jpg';
import Cantaloupe from './images/Cantaloupe_avatar.jpg';
import Cherries from './images/Cherries_avatar.jpg';
import Coconut from './images/Coconut_avatar.jpg';
import Dragonfruitpitahaya from './images/Dragonfruit pitahaya_avatar.jpg';
import Durian from './images/Durian_avatar.jpg';
import Grapes from './images/Grapes_avatar.jpg';
import Lemon from './images/Lemon_avatar.jpg';
import Mango from './images/Mango_avatar.jpg';
import Orange from './images/Orange_avatar.jpg';
import Peach from './images/Peach_avatar.jpg';
import Pear from './images/Pear_avatar.jpg';
import Pineapple from './images/Pineapple_avatar.jpg';
import Plum from './images/Plum_avatar.jpg';
import Raspberries from './images/Raspberries_avatar.jpg';
import Strawberry from './images/Strawberry_avatar.jpg';
import Tomato from './images/Tomato_avatar.jpg';
import Watermelon from './images/Watermelon_avatar.jpg';


export class HomeGallery extends React.Component {
  render() {
    const homeImgs = [Apple, Apricot, Banana, Blackberries, Blueberries, Cantaloupe, Cherries, Coconut, Dragonfruitpitahaya, Durian, Grapes, Lemon, Mango, Orange, Peach, Pear, Pineapple, Plum, Raspberries, Strawberry, Tomato, Watermelon]; //OwlImg, BroccoliImg

    const homePageImgs = homeImgs.map((img, index) => { 
      return (
        <span key={index}>
          <img
          className="m-2" 
          src={img} 
          alt={img.toString()}
          width="75px"
          height="auto"
          />
        </span>
      )
    });
    return ( 
      <div>{homePageImgs}</div>
    )
  }
}
/*
const broccoli = {
  title: 'Excellent food',
  src: {BroccoliImg}
};

export class Gallery extends React.Component {
  render() {
    return (
      <div>
        <h6>{broccoli.title}</h6>
        <img 
        src={BroccoliImg}
        alt={broccoli.title}
        width="55px"
        height="auto"
        />
      </div>
    );
  }
}
  
//ReactDOM.render(<Gallery />, document.getElementById('gallery'));
*/