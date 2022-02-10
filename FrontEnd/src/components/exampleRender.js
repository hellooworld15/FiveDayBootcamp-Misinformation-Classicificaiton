import styles from "./exampleRender.module.scss";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import image from "./logo.png";

export function ExampleRender(props) {
  let total = 0;
  //   console.log(props);
  if (props.state) {
    const {
      has_external_sources,
      has_past_content,
      has_trusted_domain,
      has_typo_errors,
      has_updated,
    } = props.state[0];
    // console.log(has_past_content);

    const criteria = {
      criteriaOne: ["Website cites external sources", has_external_sources],
      criteriaTwo: ["Website has past content avaliable", has_past_content],
      criteriaThree: [
        "Website contains trusted domain name",
        has_trusted_domain,
      ],
      criteriaFour: ["Website has typo errors", !has_typo_errors],
      criteriaFive: ["Website has been updated", has_updated],
    };

    Object.keys(criteria).map((key) => {
      if (criteria[key][1]) {
        total += 1;
      }
    });
    // console.log(total);

    const URL = props.state[1];
    // console.log(URL);

    const onHoverHandler = () => {};

    return (
      <>
        <div className={styles.container}>
          <div className={styles.title}>Example of Rendering with URL</div>
          <div className={styles.render_example}>
            <div className={styles.resultsContainer}>
              <div>{`${total}/5`}</div>
              <p>Learn More</p>
              <div></div>
            </div>
            <img src={image} alt="thisisimage" onHover={onHoverHandler} />
            <a href="#">{URL}</a>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
