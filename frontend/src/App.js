import "./app.css";
import hero from "./images/hero.jpg";

function App() {
  return (
    <div className="App">
      <div className="header container">
        {/* <img src={hero}></img> */}
        <div>
          <h1 className="textLogo">RoosterGrin</h1>
        </div>

        <div className="greetingBox">
          <h2>
            Welcome To <br></br>
            <span>Rooster Grin</span>
          </h2>
          <button></button>
        </div>
      </div>

      {/* <div className="container">
        <p></p>
      </div> */}
    </div>
  );
}

export default App;
