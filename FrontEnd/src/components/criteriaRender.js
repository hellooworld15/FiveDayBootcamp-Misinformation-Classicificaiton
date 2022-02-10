import styles from "./criteriaRender.module.scss";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons/lib";

export function CriteriaRender(props) {
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
      criteriaFour: ["Website has no typographical errors", !has_typo_errors],
      criteriaFive: ["Website has been updated", has_updated],
    };

    return (
      <>
        <div className={styles.container}>
          <div className={styles.title}>Criteria Passed</div>
          <ul>
            {Object.keys(criteria).map((key) => {
              //   console.log(criteria[key][1]);
              if (criteria[key][1]) {
                return (
                  <li className={styles.row} key={key}>
                    <div className={styles.contain}>
                      <div className={styles.icon}>
                        <IconContext.Provider
                          value={
                            criteria[key][1]
                              ? { color: "green", size: 30 }
                              : { color: "red", size: 20 }
                          }
                        >
                          <div>
                            {criteria[key][1] ? <TiTick /> : <ImCross />}
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div
                        className={styles.criteria}
                      >{`${criteria[key][0]}`}</div>
                    </div>
                  </li>
                );
              }
            })}
            {/* REALLY BAD PRACTICE - DONT DUPLICATE CODE LIKE THIS  */}
            {Object.keys(criteria).map((key) => {
              //   console.log(criteria[key][1]);
              if (!criteria[key][1]) {
                return (
                  <li className={styles.row} key={key}>
                    <div className={styles.contain}>
                      <div className={styles.icon}>
                        <IconContext.Provider
                          value={
                            criteria[key][1]
                              ? { color: "green", size: 30 }
                              : { color: "red", size: 20 }
                          }
                        >
                          <div>
                            {criteria[key][1] ? <TiTick /> : <ImCross />}
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div
                        className={styles.criteria}
                      >{`${criteria[key][0]}`}</div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </>
    );
  } else return <></>;
}
