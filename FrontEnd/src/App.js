import styles from "./App.module.scss";
import { SearchButton } from "./components/searchButton";
import { CriteriaRender } from "./components/criteriaRender";
import { ExampleRender } from "./components/exampleRender";
import { useState } from "react";

function App() {
  // Testing get data from Database via Backend

  const [state, setState] = useState();

  const interceptSetState = (data) => {
    setState(data);
    console.log(data);
  };

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>IDEA NAME HERE</h1>
        <SearchButton setState={interceptSetState} />
        <CriteriaRender state={state} />
        <ExampleRender state={state} />
        {/* <CriteriaRender /> */}
      </div>
    </div>
  );
}

export default App;
