import "./GeneralWidget.css";

const GeneralWidget = () => {
  return (
    <div className="generalwidget">
      <div className="title">
        <img className="icon" alt="" src="/icon.svg" />
        <b className="title1">General information</b>
        <b className="text">Edit</b>
      </div>
      <ul className="componentstable-columntext">
        <header className="table-celltext">
          <ul className="text-wrapper">
            <div className="item">
              <div className="text1">Birth date</div>
              <div className="text2"> 05/12/1955 • 66 y.o.</div>
            </div>
            <div className="item">
              <div className="text1">Sex</div>
              <div className="text4">Female</div>
            </div>
            <div className="item">
              <div className="text1">BMI</div>
              <div className="text6">10</div>
            </div>
            <div className="item">
              <div className="text1">Phone number</div>
              <div className="text4">123-12-123</div>
            </div>
            <div className="item">
              <div className="text1">SSN</div>
              <div className="text4">123-12-123</div>
            </div>
          </ul>
        </header>
      </ul>
    </div>
  );
};

export default GeneralWidget;
