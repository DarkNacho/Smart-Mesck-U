import GeneralWidget from "../components/GeneralWidget";
import GraphContainer from "../components/GraphContainer";
import "./DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboardpage">
      <GeneralWidget />
      <GraphContainer iconPath="/hearth.svg" title="Titulo 1" graphPath="http://localhost:8000/temperatura" edit/>
      <GraphContainer iconPath="/icon.svg" title="Titulo 2" graphPath="http://localhost:8000/temperatura"/>
    </div>
  );
};

export default DashboardPage;
