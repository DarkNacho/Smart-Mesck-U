import "./PatienOverview.css";

const PatienOverview = () => {
  return (
    <div className="patienoverview">
      <div className="icon">
          <div className="icon-child" style={{ backgroundImage: `url(/avatar.JPG)` }}></div>
      </div>
      <div className="navlocation">
        <div className="location">
          <div className="item">
            <div className="item">
              <div className="text">Patients</div>
            </div>
            <div className="item1">
              <div className="text">{`>`}</div>
            </div>
            <div className="item">
              <div className="text">Juan Carlos Bodoque</div>
            </div>
            <div className="item1">
              <div className="text">{`>`}</div>
            </div>
            <div className="item">
              <div className="label1">Overview</div>
            </div>
          </div>
        </div>
        <b className="user">Juan Carlos Bodoque</b>
        <div className="tabstop">
          <div className="location">
            <div className="tabs-group">
              <div className="item5">
                <div className="title">
                  <div className="text1">Encounters</div>
                </div>
              </div>
              <div className="item5">
                <div className="title">
                  <div className="text1">Documents</div>
                </div>
              </div>
              <div className="item5">
                <div className="title">
                  <div className="text1">Encounters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="mask-group-icon1" alt="" src="/mask-group@2x.png" />
    </div>
  );
};

export default PatienOverview;
