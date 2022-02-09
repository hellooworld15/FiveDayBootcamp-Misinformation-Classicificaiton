import styles from "./App.module.scss";
import { checkKeyword } from "../src/api/index";
import { SearchButton } from "./components/searchButton";
import { CriteriaRender } from "./components/criteriaRender";
function App() {
  // Testing get data from Database via Backend
  const checkKeywordValid = async () => {
    return checkKeyword();
  };

  checkKeywordValid().then((data) => {
    console.log(data);
  });

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>IDEA NAME HERE</h1>
        <SearchButton /> <CriteriaRender />
        {/* <CriteriaRender /> */}
      </div>
    </div>
  );
}

export default App;
