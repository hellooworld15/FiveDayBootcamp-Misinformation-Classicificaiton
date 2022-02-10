import styles from "./App.module.scss";
import { checkKeyword, addWebsiteData } from "../src/api/index";
import { SearchButton } from "./components/searchButton";
import { CriteriaRender } from "./components/criteriaRender";
import { ExampleRender } from "./components/exampleRender";
import { useState } from "react";

function App() {
  // Testing get data from Database via Backend
  const checkKeywordValid = async () => {
    return checkKeyword();
  };

  checkKeywordValid().then((data) => {
    console.log(data);
  });

  const [state, setState] = useState(true);
  // Get data from dummyWebsite
  // const sendWebsiteData = async () => {
  //   return addWebsiteData();
  // };

  // sendWebsiteData().then((data) => {
  //   console.log(data);
  // });

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>IDEA NAME HERE</h1>
        <SearchButton state={state} />
        <CriteriaRender />
        <ExampleRender />
        {/* <CriteriaRender /> */}
      </div>
    </div>
  );
}

export default App;
