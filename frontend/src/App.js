import Review from "./component/Review";
import "./app.css";
import image from "./images/img-1.jpg";
import icon1 from "./images/home-expertise.svg";
import icon2 from "./images/home-hygiene.svg";
import icon3 from "./images/home-lab.svg";
import icon4 from "./images/home-retention.svg";
import icon6 from "./images/instagram.svg";
import icon7 from "./images/facebook.svg";
import Fader from './component/Fader'

function App() {
  return (
    <div className="App">
      <div className="heroContainer">
        <div>
          <h1 className="textLogo">RoosterGrin</h1>
        </div>

        <div className="greetingBox">
          <h2 className="greetingText">
            Welcome To <br></br>
            <Fader/>
          </h2>
          <button className="button"> BUTTON BUTTON</button>
        </div>
      </div>

      <div className="bgimage-container flex">
        <div className="box">
          <div className="center space">
            <h3 className="title">LOREM IPSUM</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a className="link" href="https://www.google.com/">
              > Lorem ipsum
            </a>
          </div>
        </div>
        <img src={image} className="box"></img>
      </div>

      <div className="bgimage-container banner1">
        <div className="banner1-text">
          <h3 className="title">Lorem Ipsum</h3>
          <button className="button">BUTTON BUTTON</button>
        </div>
      </div>

      <div className="block-container flex">
        <div className="box">
          <div className="center space">
            <h3 className="title">LOREM IPSUM DOLOR SIT AMET</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <a className="link" href="https://www.google.com/">
              > Lorem Ipsum
            </a>
          </div>
        </div>

        <div className=" box grey icon-flex">
          <div className="items-center">
            <div className="icon-container icon-margin1">
              <div className="icon-border">
                <img className="icon" src={icon1}></img>
              </div>
              <h2 className="icon-text">LOREM</h2>
            </div>

            <div className="icon-container icon-margin2">
              <div className="icon-border">
                <img className="icon" src={icon2}></img>
              </div>
              <h2 className="icon-text">LOREM IPSUM</h2>
            </div>
          </div>

          <div className="items-center">
            <div className="icon-container icon-margin1">
              <div className="icon-border">
                <img className="icon" src={icon3}></img>
              </div>
              <h2 className="icon-text">LOREM IPSUM</h2>
            </div>

            <div className="icon-container icon-margin2">
              <div className="icon-border">
                <img className="icon" src={icon4}></img>
              </div>
              <h2 className="icon-text">LOREM</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bgimage-container banner2">
        <div></div>
        <div className="banner2-text-container">
          <div className="banner2-text">
            <h2 className="title"> LOREM IPSUM</h2>
            <p className="text-space">
              Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit
              quam, ut pede ut ante, in biberra eros dictum nisl liqula.
            </p>
            <button className="button">BUTTON BUTTON</button>
          </div>
        </div>
      </div>
      <div className="block-container flex">
        <div className="box space">
          <div className="center">
            <h1>LOREM IPSUM DOLOR SIT AMET</h1>
            <div>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>
        <div className="box flex">
          <Review />
        </div>
      </div>
      <div className="footer-container grey">
        <div className="contact">
          <h4 className="contact-text">Follow Us:</h4>
          <div>
            <img className="contact-img" src={icon6}></img>
            <img className="contact-img" src={icon7}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
