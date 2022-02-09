import styles from "./exampleRender.module.scss";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import image from "./tempImage.png";

export function ExampleRender() {
  const criteria = {
    easeOfUse: true,
    trustedOrganisation: false,
  };
  {
    /* Method to get the url from Search bar input - pass down through props probably */
  }
  const URL = "www.google.com";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Example of Rendering with URL</div>
        <div className={styles.render_example}>
          <img src={image} alt="thisisimage" />
          <a href="#">{URL}</a>
        </div>
      </div>
    </>
  );
}
