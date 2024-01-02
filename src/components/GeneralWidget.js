import styles from "./GeneralWidget.module.css";

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const fechaNac = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const mes = hoy.getMonth() - fechaNac.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
  }

  return edad;
}

const GeneralWidget = ({birthDate, gender, phone, id, edit}) => {
  return (
    <div className={styles.generalwidget}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <div className={styles.ellipse} />
          <img
            className={styles["contacts-icon"]}
            alt=""
            src="/contacts.svg"
          />
        </div>
        <b className={styles.title1}>Información General</b>
        {edit && <b className={styles.text}>Edit</b>}
      </div>
      <div className={styles.table}>
        <ul className={styles["text-wrapper"]}>
          <div className={styles.item}>
            <div className={styles.text1}>Fecha de Nacimiento</div>
            <div className={styles.text2}> {birthDate} • {calcularEdad(birthDate)} y.o.</div>
          </div>
          <div className={styles.item}>
            <div className={styles.text1}>Sexo</div>
            <div className={styles.text2}>{gender}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.text1}>Número Telefónico</div>
            <div className={styles.text2}>{phone}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.text1}>ID</div>
            <div className={styles.text2}>{id}</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default GeneralWidget;