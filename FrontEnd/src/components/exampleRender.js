import styles from "./exampleRender.module.scss";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import image from "./logo.png";
import { IconContext } from "react-icons/lib";

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

    // Ease of Use Check
    let easeOfUseScore = 0;
    if (criteria.criteriaOne[1]) {
      easeOfUseScore = 1;
    }

    // Trustworthiness
    let trustworthiness = 0;
    if (criteria.criteriaTwo[1] && criteria.criteriaThree[1]) {
      trustworthiness = 1;
    }
    console.log(trustworthiness);

    // Amatuerism
    let amat = 0;

    const overallScore = {
      easeOfUse: ["Ease of use", easeOfUseScore],
      trustworthiness: ["Trustworthiness", trustworthiness],
    };

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
              <div className={styles.horizontal}>
                <div className={styles.score}>{`${total}/5`}</div>
                <p className={styles.learn_more}>Learn More</p>
              </div>

              <div>
                {Object.keys(overallScore).map((key) => {
                  return (
                    <div key={key} className={styles.contain}>
                      <div className={styles.icon}>
                        <IconContext.Provider
                          value={
                            overallScore[key][1]
                              ? { color: "green", size: 30 }
                              : { color: "red", size: 20 }
                          }
                        >
                          <div>
                            {overallScore[key][1] ? <TiTick /> : <ImCross />}
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div
                        className={styles.criteria}
                      >{`${overallScore[key][0]}`}</div>
                    </div>
                  );
                })}
              </div>
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
