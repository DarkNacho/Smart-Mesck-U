import styles from "./InfoList.module.css";

const InfoList = ({ data, title, icon , edit }) => {
  console.log("data:", data);

  let content;

  if (!data || data.length === 0) {
    content = <div className={styles.emptyMessage}>No hay datos disponibles</div>;
  } else {
    content = data.map((dato, index) => (
      <div className={styles.item} key={index}>
        <div className={styles.text1}>{dato.name}</div>
        <div className={styles.text2}>{dato.value}</div>
      </div>
    ));
  }

  return (
    <div className={styles.infolist}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <div className={styles.ellipse} />
          <img
            className={styles["contacts-icon"]}
            alt=""
            src={icon}
          />
        </div>
        <b className={styles.title1}>{title}</b>
        { edit && <b className={styles.text}>Edit</b> }
      </div>
      <div className={styles.table}>
        <ul className={styles["text-wrapper"]}>{content}</ul>
      </div>
    </div>
  );
};

export default InfoList;