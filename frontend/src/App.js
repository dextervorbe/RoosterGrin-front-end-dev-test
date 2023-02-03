import "./app.css";
import image from "./images/img-1.jpg";

function App() {
  return (
    <div className="App">
      <div className="heroContainer">
      
        <div>
          <h1 className="textLogo">RoosterGrin</h1>
        </div>

        <div className="greetingBox">
          <h2>
            Welcome To <br></br>
            <span>Rooster Grin</span>
          </h2>
          <button> BUTTON BUTTON</button>
        </div>
      </div>

      <div className="container flex">
        <div className="box"></div>
        <img src={image} className="aa"></img>
      </div>
    </div>
  );
}

export default App;
