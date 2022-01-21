import React from 'react';
import './index.css';

export class MenuTable extends React.Component {
    render() {
        const menuPages1 = ['Specials', 'Breakfast', 'Coffee'];
        const menuPages2 = ['Appetizers', 'FULL MENU', 'Lunch'];
        const menuPages3 = ['Wines', 'Dinner', 'Favorites'];

        const menuPageLinks1 = menuPages1.map((link, index) => {
            return (
              <div key={index} className="col-4 p-4">
                <div className="menulink border-bottom border-top rounded-top rounded-bottom"><a href={'/' + link}>{link}</a></div>
              </div>
            )
        });
        const menuPageLinks2 = menuPages2.map((link, index) => {
            return (
              <div key={index} className="col-4 p-4">
                <div className="menulink border-bottom border-top rounded-top rounded-bottom"><a href={'/' + link}>{link}</a></div>
              </div>
            )
        });
        const menuPageLinks3 = menuPages3.map((link, index) => {
            return (
              <div key={index} className="col-4 p-4">
                <div className="menulink border-bottom border-top rounded-top rounded-bottom"><a href={'/' + link}>{link}</a></div>
              </div>
            )
        });
        return (
            <div id="homeMenu" className="row row-cols-3 mx-5">
                {menuPageLinks1}
                {menuPageLinks2}
                {menuPageLinks3}   
            </div>
        )
    }
}