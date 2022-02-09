import logo from "./logo.svg";
import "./App.css";
import { checkKeyword } from "../src/api/index";

function App() {
  // Testing get data from Database via Backend
  const checkKeywordValid = async () => {
    return checkKeyword();
  };

  checkKeywordValid().then((data) => {
    console.log(data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
