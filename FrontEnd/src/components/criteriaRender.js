import styles from "./criteriaRender.module.scss";

export function CriteriaRender() {
  const criteriaPassed = {
    easeOfUse: true,
    trustedOrganisation: true,
  };

  return (
    <>
      <div>Criteria Passed</div>
      {Object.keys(criteriaPassed).map((key) => {
        console.log(key);
        return (
          <li className={styles.row} key={key}>
            <div className={styles.icon}></div>
            <div>{`${key}: ${criteriaPassed[key].toString()}`}</div>
          </li>
        );
      })}
    </>
  );
}
