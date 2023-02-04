import "./app.css";
import image from "./images/img-1.jpg";
import icon1 from "./images/home-expertise.svg";
import icon2 from "./images/home-hygiene.svg";
import icon3 from "./images/home-lab.svg";
import icon4 from "./images/home-retention.svg";

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
            <span>Rooster Grin</span>
          </h2>
          <button> BUTTON BUTTON</button>
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
          <button>Button Button</button>
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
            <div className="icon-container aa">
              <div className="icon-border">
                <img className="icon" src={icon1}></img>
              </div>
              <h2 className="icon-text">LOREM</h2>
            </div>

            <div className="icon-container aaa">
              <div className="icon-border">
                <img className="icon" src={icon2}></img>
              </div>
              <h2 className="icon-text">LOREM IPSUM</h2>
            </div>
          </div>

          <div className="items-center">
            <div className="icon-container aa">
              <div className="icon-border">
                <img className="icon" src={icon3}></img>
              </div>
              <h2 className="icon-text">LOREM IPSUM</h2>
            </div>

            <div className="icon-container aaa">
              <div className="icon-border">
                <img className="icon" src={icon4}></img>
              </div>
              <h2 className="icon-text">LOREM</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
