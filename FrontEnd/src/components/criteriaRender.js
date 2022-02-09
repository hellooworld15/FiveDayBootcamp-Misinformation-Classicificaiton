import styles from "./criteriaRender.module.scss";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

export function CriteriaRender() {
  const criteria = {
    easeOfUse: true,
    trustedOrganisation: false,
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Criteria Passed</div>
        <ul>
          {Object.keys(criteria).map((key) => {
            console.log(key);
            return (
              <li className={styles.row} key={key}>
                <div className={styles.icon}>
                  {criteria[key] ? <TiTick /> : <ImCross />}
                </div>
                <div className={styles.criteria}>{`${key}: ${criteria[
                  key
                ].toString()}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
