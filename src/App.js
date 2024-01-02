import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

//import {DashboardPage , NewPage, PatientListPage, ObservationPage} from "./pages"
import ObservationPage from "./pages/ObservationPage";
import PatientListPage from "./pages/PatientListPage";
import NewPage from "./pages/NewPage";
import PatientPage from "./pages/PatientPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PatientListPage></PatientListPage>}></Route>
      <Route path="/Observation/:id" element={<ObservationPage></ObservationPage>} />
      <Route path="/que" element={<NewPage></NewPage>}></Route>
      <Route path="/Patient/:id" element={<PatientPage></PatientPage>}></Route>
    </Routes>
  );
}
export default App;
