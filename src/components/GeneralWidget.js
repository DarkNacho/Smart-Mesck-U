import "./GeneralWidget.css";

const GeneralWidget = () => {
  return (
    <div className="generalwidget">
      <div className="title">
        <div className="icon">
          <div className="ellipse" />
          <img className="contacts-icon" alt="" src="/contacts.svg" />
        </div>
        <b className="title1">General information</b>
        <b className="text">Edit</b>
      </div>
      <div className="table">
        <ul className="text-wrapper">
          <div className="item">
            <div className="text1">Birth date</div>
            <div className="text2"> 05/12/1955 • 66 y.o.</div>
          </div>
          <div className="item">
            <div className="text1">Sex</div>
            <div className="text2">Female</div>
          </div>
          <div className="item">
            <div className="text1">Phone number</div>
            <div className="text2">123-12-123</div>
          </div>
          <div className="item">
            <div className="text1">SSN</div>
            <div className="text2">123-12-123</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default GeneralWidget;
