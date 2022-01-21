import React from 'react';
import './index.css';
import siteLogo from './images/Kawaii Japanese monkey.png';

//JS: deconstructing function arguements
export class Appetizers extends React.Component {

    render() {
        let lilMonkey = {
            main: 'chicken nuggets',
            sideOne: 'fries',
            sideTwo: 'fruit cup'
        };

        let monkey = {
            main: 'macaroni & cheese',
            sideOne: 'salad',
            sideTwo: 'fruit cup'
        };

        let papaMonkey = {
            main: 'garlic fries',
            sideOne: 'salad'
        };
   
        const printApp1 = ({main, sideOne, sideTwo}) => {
            return (
                <div>
                    <div><img src={siteLogo} alt="monkeyLogo" width="100px" height="auto" /></div>
                    <p>{main}<br />{sideOne}<br />{sideTwo}</p>               
                </div>
            )
        }

        const printApp2 = ({main, sideOne, sideTwo}) => {
            return (
                <div>
                    <div><img src={siteLogo} alt="monkeyLogo" width="100px" height="auto" /></div>
                    <p>{main}<br />{sideOne}<br />{sideTwo}</p>               
                </div>
            )
        }

        const printApp3 = ({main, sideOne}) => {
            return (
                <div>
                    <div><img src={siteLogo} alt="monkeyLogo" width="100px" height="auto" /></div>
                    <p>{main}<br />{sideOne}</p>               
                </div>
            )
        }

        return (
            <div className="d-flex justify-content-around">
                <div>{printApp1(lilMonkey)}</div>
                <div>{printApp2(monkey)}</div>    
                <div>{printApp2(papaMonkey)}</div>              
            </div>
        )

    }
}