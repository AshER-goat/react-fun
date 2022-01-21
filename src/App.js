//import logo from './logo.svg';
//import siteLogo from './images/Kawaii Japanese monkey.png';
import './App.css';
import {NavBar} from './NavBar';
//import {Greeting} from './Greeting';
import {MenuTable} from './MenuTable';
//import {Gallery} from './Gallery';
import {Game} from './XOXO';
import {HomeGallery} from './Gallery';
import {Appetizers} from './Appetizers';
import {ButtonList} from './ButtonList';
import {RandomVeggie} from './RandomVeggie';
//import { Button } from './ButtonList';
//import { Facts1 } from './ButtonList';
import { Facts } from './ButtonList';
import {Footer} from './Footer';

//old logo: "https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg"
//<img src=siteLogo width="150px" height="auto" /> className="d-flex justify-content-center align-content-center p-5 my-3" //<Greeting name="Healthy One" />  
function App() {
  return (
    <div className="App">

      <header className="App-header mt-0">
        <NavBar /> 
        <div id="bg-header" className="container-fluid">
          <div id="headerDivs">
            <MenuTable /> 
          </div>
        </div>
      </header>

      <div className="container-fluid m-0 p-3">
        <h1>Welcome To Monkey Caf&eacute;</h1>
        <hr />

        <div className="container-fluid bg-linen p-2 my-2">
          <div className="container">
            <h4>XOXO</h4>
            <Game />
          </div>
        </div>        

        <div className="container-fluid p-2 my-2">
          <div className="container">
            <h4>Healthy Appetizers</h4>
            <h5>Gluten Free, Dairy Free, and Soy Free!</h5>
            <Appetizers />
          </div>
        </div>

        <div className="container-fluid bg-linen p-2 my-2">
          <div className="d-flex justify-content-center">
            <div className="container">
              <h4>Fruits We Offer</h4>
              <h5>Delevered from local farms daily!</h5>
              <HomeGallery />
            </div>
          </div>
        </div>

        <div className="container-fluid p-2 my-2">
          <div className="container">
            <Facts />
          </div>
        </div>

        <div className="container-fluid bg-linen p-2 my-2">
          <div className="container">
            <RandomVeggie />
          </div>
        </div>

        <div className="container-fluid p-2 my-2">
          <div className="container">
            <h4>RGB Healthy Food By Color</h4>
            <ButtonList />
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

/* DELETED ORIGINAL CONTENT
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to awesomness!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
*/

export default App;
