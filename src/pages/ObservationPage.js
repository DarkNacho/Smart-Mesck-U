import PatientObservations from "../components/PatientObservations";
import { useParams } from 'react-router-dom';
const ObservationPage = () => {

    const { id } = useParams();
  return (
    <div>
        pagina de obs
        <PatientObservations patientId={id}></PatientObservations>
    </div>
  );
};

export default ObservationPage;
