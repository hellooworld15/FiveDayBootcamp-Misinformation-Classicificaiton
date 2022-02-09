import styles from "./searchButton.module.scss";

export function SearchButton() {
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

      <body>
        <div className={styles.search_container}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className={styles.search_input}
          />
          <a href="#" class={styles.search_btn}>
            <i className={styles.fas}></i>
          </a>
        </div>
      </body>
    </>
  );
}
