import GeneralWidget from "../components/GeneralWidget";
//import InfoList from "../components/InfoList";
import GraphContainer from "../components/GraphContainer";
import "./DashboardPage.css";


const DashboardPage = () => {
  return (
      <div className="dashboardpage">
        <GeneralWidget></GeneralWidget>
        <GraphContainer iconPath="/hearth.svg" title="Gráfico de Prueba" graphPath="http://localhost:8000/temperatura"/>
      </div>
  );
};

export default DashboardPage;
