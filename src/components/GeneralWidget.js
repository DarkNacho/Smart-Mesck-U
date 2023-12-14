import "./GeneralWidget.css";

const GeneralWidget = () => {
  return (
    <div className="generalwidget">
      <div className="title">
        <div className="icon">
          <div className="ellipse" />
          <img className="contacts-icon" alt="" src="/contacts.svg" />
        </div>
        <b className="title1">Información General</b>
        <b className="text">Edit</b>
      </div>
      <div className="table">
        <ul className="text-wrapper">
          <div className="item">
            <div className="text1">Fecha de Nacimiento</div>
            <div className="text2"> 05/12/1955 • 66 y.o.</div>
          </div>
          <div className="item">
            <div className="text1">Sexo</div>
            <div className="text2">Masculino</div>
          </div>
          <div className="item">
            <div className="text1">Número Telefónico</div>
            <div className="text2">+56912345678</div>
          </div>
          <div className="item">
            <div className="text1">Rut</div>
            <div className="text2">12345678-K</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default GeneralWidget;
