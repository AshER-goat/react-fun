import { render } from "@testing-library/react";
import React from "react";
import Apple from './images/Apple_avatar.jpg'; 
import Apricot from './images/Apricot_avatar.jpg'; 
import Banana from './images/Banana_avatar.jpg'; 
/*
const friends = [
    {
      title: "Yummmmmmm",
      src: {Apple}
    },
    {
      title: "Hey Guys!  Wait Up!",
      src: {Apricot}
    },
    {
      title: "Yikes",
      src: {Banana}
    }
];
*/


export class Button extends React.Component {
    render() {
      return (
        <button onClick={this.props.clickBtn}>
          Click me!
        </button>
      );
    }
}

export class RandomVeggie extends React.Component {
    friends = [
    {
        title: "Yummmmmmm",
        src: {Apple}
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: {Apricot}
    },
    {
        title: "Yikes",
        src: {Banana}
    }
]; 

constructor() {
    super()

    this.onClickFoward = this.onClickFoward.bind(this)
    this.onClickBack = this.onClickBack.bind(this)
    
    const Apple = require('./images/Apple_avatar.jpg');
    const Apricot = require('./images/Apricot_avatar.jpg'); 
    const Banana = require('./images/Banana_avatar.jpg'); 
    
    this.state = {
        index: 0,
        imgList: [Apple, Apricot, Banana]
    }
}

onClickFoward() {
    if (this.state.index + 1 === this.state.imgList.length) {
        this.setState({
            index: 0
        })
    } else {
        this.setState({
            index: this.state.index + 1
        })
    }
}

onClickBack() {
    if (this.state.index - 1 === -1) {
        this.setState({
            index: this.state.imgList.length - 1
        })
    } else {
        this.setState({
            index: this.state.index - 1
        })
    }
}

    render() {
        return(
            <div>
                <img
                src={this.state.imgList[this.state.index]}
                alt="First slide"
                />
                <br />
                <button onClick={this.onClickBack}>Back</button>
                <button onClick={this.onClickFoward}>Foward</button>
            </div>
        )
    }
}
