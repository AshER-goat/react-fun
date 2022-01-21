import React from 'react';
import {List} from './List';

export class ButtonList extends React.Component {
  render() {
    const reds = ['Cranberries', 'Pomegranate', 'Cherries', 'Tomatoes', 'Strawberries', 'Raspberries', 'Watermelon'];
    const greens = ['Kale', 'Green Bean', 'Spinach', 'Avocado', 'Green Pepper', 'Asparagus'];
    const blues = ['Blueberries', 'Blackberries', 'Elderberries', 'Concord grapes', 'Black currants', 'Damson plums', 'Blue tomatoes'];

    const redFoods = reds.map((food, index) => {
      return (
        <span key={index}>
          <li className="list-group-item">{food}</li>
        </span>
      )
    });  

    const greenFoods = greens.map((food, index) => {
      return (
        <span key={index}>
          <li className="list-group-item">{food}</li>
        </span>
      )
    });  

    const blueFoods = blues.map((food, index) => {
      return (
        <span key={index}>
          <li className="list-group-item">{food}</li>
        </span>
      )
    });    
    
    return (
      <div className="row">
        <div className="col">
          <List type='Red'>
            {redFoods}
          </List>
        </div>
        <div className="col">
          <List type='Green'>
              {greenFoods}
          </List>
        </div>
        <div className="col">
          <List type='Blue'>
              {blueFoods}
          </List>
        </div>
      </div>
    );
  }
}
/*
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
*/

/*
export class Facts1 extends React.Component {
  talk() {
    let speech = 'What fruit is the highest in antioxidant content?...';
    for (let i = 0; i < 3; i++) {
      speech += 'blueberries! ';
    }
    alert(speech);
  }
  
  render() {
    return (
    <button
    className="btn btn-info rounded border border-2 border-dark" 
    onClick={this.talk}>
      Fact # 1
    </button>
    );
  }
}
*/

export class Facts extends React.Component {
  event1() {
    alert(`The study of fruits is called POMOLOGY.`);
  }

  event2() {
    alert(`Strawberries are the only fruit with seeds on the outside.`);
  }

  event3() {
    alert(`Blueberries have the highest content of antioxidants of all fruit.`);
  }

  event4() {
    alert(`Eating an apple is a more reliable method of staying awake than consuming a cup of coffee as it gives you more energy. The natural sugar in an apple is more potent than the caffeine in coffee.`);
  }

  event5() {
    alert(`Drinking Grapefruit juice while taking some prescription medications can cause instant overdose and death.`);
  }

  event6() {
    alert('Square Watermelons are grown by Japanese farmers for easier stack and store.');
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button
          className="btn btn-info rounded border border-2 border-dark w-100" 
          onClick={this.event1}>
          Fact #1
          </button>          
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button
          className="btn btn-info rounded border border-2 border-dark w-100" 
          onClick={this.event2}>
          Fact #2
          </button>            
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button
          className="btn btn-info rounded border border-2 border-dark w-100" 
          onClick={this.event3}>
          Fact #3
          </button>             
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button
          className="btn btn-info rounded border border-2 border-dark w-100" 
          onClick={this.event4}>
          Fact #4
          </button>             
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button
          className="btn btn-info rounded border border-2 border-dark w-100" 
          onClick={this.event5}>
          Fact #5
          </button>             
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button
          className="btn btn-info rounded border border-2 border-dark w-100" 
          onClick={this.event6}>
          Fact #6
          </button>             
        </div>
      </div>

    );
  }
}