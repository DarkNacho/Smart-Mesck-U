//import GeneralWidget from "../components/GeneralWidget";
import InfoList from "../components/InfoList";
import GraphContainer from "../components/GraphContainer";
import "./DashboardPage.css";

import HeaderComponent from "../components/HeaderComponent";

import AddPatienteComponent from "../components/AddPatienteComponent";

import PatienOverview from "../components/PatienOverview"


const DashboardPage = () => {
  const datos = [
    {
      name: "item 1",
      value: "hola mundo"
    },
    {
      name: "item 2",
      value: "hola"
    },
    {
      name: "item 3",
      value: "bla bla bla"
    }
  ];

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      
      <div className="dashboardpage">
        <AddPatienteComponent></AddPatienteComponent>
        <InfoList data={datos}></InfoList>
        <GraphContainer iconPath="/hearth.svg" title="Gráfico de Prueba" graphPath="http://localhost:8000/temperatura"/>
      </div>
    </div>
  );
};

export default DashboardPage;
