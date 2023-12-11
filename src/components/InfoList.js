import "./InfoList.css";

const InfoList = () => {
  return (
    <div className="infolist">
      <div className="title">
        <div className="icon">
          <div className="ellipse" />
          <img className="contacts-icon" alt="" src="/contacts.svg" />
        </div>
        <b className="title1">Info List</b>
        <b className="text">Edit</b>
      </div>
      <div className="table">
        <ul className="text-wrapper">
          <div className="item">
            <div className="text1">Covid-19 Vacuna</div>
            <div className="text2"> 10/10/2022</div>
          </div>
          <div className="item">
            <div className="text1">Pneumococcal PPSV23</div>
            <div className="text2">11/10/2022</div>
          </div>
          <div className="item">
            <div className="text1">Ejemplo 1</div>
            <div className="text2">11/10/2022</div>
          </div>
          <div className="item">
            <div className="text1">Ejemplo 2</div>
            <div className="text2">11/10/2022</div>
          </div>
          <div className="item">
            <div className="text1">Ejemplo 3</div>
            <div className="text2">11/10/2022</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default InfoList;
