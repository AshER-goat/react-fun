import React from 'react';
import './index.css';
import siteLogo from './images/Kawaii Japanese monkey.png';

export class NavBar extends React.Component {
    render() {
      const pages = ['home', 'menu', 'hours & locations', 'contact', 'about'];

      const navLinks = pages.map((page, index) => {
          return (
            <span key={index} className="px-2">
              <a href={'/' + page}>{page}</a>
            </span>
          )
      });
        
        return (
          <div className="container-fluid fixed-top px-0">
            <nav className="navbar navbar-expand-lg navbar-light px-3">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mx-auto">
                  <a href="#">
                    <img src={siteLogo} width="65px" height="auto"/>
                  </a>
                  <ul className="navbar-nav">
                    <li className="nav-item">{navLinks}</li>
                  </ul> 
                </div>
              </div>
            </nav>
          </div>
        )
      //};
  
      //return <nav>{navLinks}</nav>;
    }
  }