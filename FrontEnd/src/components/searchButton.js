import styles from "./searchButton.module.scss";
import { getWebsiteData } from "../api";

export function SearchButton(props) {
  const { setState } = props;
  // Get input from user in search field

  const handleKeyPress = async (e) => {
    // console.log(e);

    // ISSUE FOR NOW
    if (e.key === "Enter") {
      const website = e.target.value;
      const webData = { my_url: website };
      const data = await getWebsiteData(webData);
      console.log(data);
      setState(data);
    }
  };

  return (
    <>
      <link
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      />

      <div className={styles.body}>
        <div className={styles.search_container}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className={styles.search_input}
            onKeyPress={handleKeyPress}
          />
          <a href="#" className={styles.search_btn}>
            <i className={styles.fas}></i>
          </a>
        </div>
      </div>
    </>
  );
}
