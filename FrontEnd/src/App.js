import "./App.css";
import { checkKeyword } from "../src/api/index";
import { SearchButton } from "./components/searchButton";
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
      <SearchButton />{" "}
    </div>
  );
}

export default App;
