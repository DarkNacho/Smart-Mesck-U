import GeneralWidget from "../components/GeneralWidget";
//import InfoList from "../components/InfoList";
import GraphContainer from "../components/GraphContainer";
import "./DashboardPage.css";

import HeaderComponent from "../components/HeaderComponent";

import AddPatienteComponent from "../components/AddPatienteComponent";


const DashboardPage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="dashboardpage">
        <AddPatienteComponent></AddPatienteComponent>
        <GeneralWidget></GeneralWidget>
        <GraphContainer iconPath="/hearth.svg" title="Gráfico de Prueba" graphPath="http://localhost:8000/temperatura"/>
      </div>
    </div>
  );
};

export default DashboardPage;
