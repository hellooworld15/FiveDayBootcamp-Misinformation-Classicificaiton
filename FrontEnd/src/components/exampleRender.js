import styles from "./exampleRender.module.scss";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import image from "./tempImage.png";

export function ExampleRender(props) {
  console.log(props);
  if (props.state) {
    const {
      has_external_sources,
      has_past_content,
      has_trusted_domain,
      has_typo_errors,
      has_updated,
    } = props.state[0];
    console.log(has_past_content);

    const criteria = {
      criteriaOne: ["Website cites external sources", has_external_sources],
      criteriaTwo: ["Website has past content avaliable", has_past_content],
      criteriaThree: [
        "Website contains trusted domain name",
        has_trusted_domain,
      ],
      criteriaFour: ["Website has typo errors", has_typo_errors],
      criteriaFive: ["Website has been updated", has_updated],
    };
    const URL = props.state[1];
    console.log(URL);
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
  } else {
    return <></>;
  }
}
