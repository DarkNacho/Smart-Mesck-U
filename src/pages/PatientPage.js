import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PatienOverview from '../components/PatienOverview';
import InfoList from '../components/InfoList';
import axios from 'axios';
import GeneralWidget from '../components/GeneralWidget';


function obtenerPrimerNumeroTelefono(recurso) {
    if (recurso && recurso.telecom && Array.isArray(recurso.telecom)) {
      const numeroTelefono = recurso.telecom.find(
        (contacto) => contacto.system === "phone" && contacto.value
      );
      if (numeroTelefono) {
        return numeroTelefono.value;
      }
    }
    return 'no phone';
  }

function parsePatientName(patient) {
    let name = "";
  
    // Intenta obtener el nombre usando patient.name[0].text
    if (patient.name && patient.name[0] && patient.name[0].text) {
      name = patient.name[0].text;
    } else if (patient.name && patient.name[0]) {
      // Intenta obtener el nombre usando patient.name[0].given y patient.name[0].family
      const givenNames = patient.name[0].given ? patient.name[0].given.join(" ") : "";
      const familyName = patient.name[0].family ? patient.name[0].family : "";
      name = `${givenNames} ${familyName}`;
    } else if (patient.name && patient.name[0] && patient.name[0].use === "official") {
      // Intenta obtener el nombre usando patient.name[0].prefix, patient.name[0].given y patient.name[0].family
      const prefix = patient.name[0].prefix ? patient.name[0].prefix.join(" ") : "";
      const givenNames = patient.name[0].given ? patient.name[0].given.join(" ") : "";
      const familyName = patient.name[0].family ? patient.name[0].family : "";
      name = `${prefix} ${givenNames} ${familyName}`;
    }
    else name = 'no nombre';
  
    return name;
  }

function PatientPage() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [medications, setMedications] = useState(null);
  const [observation, setObservation] = useState(null);

  const fetchPatient = async () => {
    try { 
      //const response = await axios.get(`https://demo.kodjin.com/fhir/Patient/${id}`);
      const response = await axios.get(`https://hapi.fhir.org/baseR4/Patient/${id}`);
      setPatient(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMedication = async () => {
    try {
      //const response = await axios.get(`https://demo.kodjin.com/fhir/MedicationStatement?subject=Patient/${id}`);
      const response = await axios.get(`https://hapi.fhir.org/baseR4/MedicationStatement?subject=Patient/${id}`);
      if (response.data.total > 0)
      {
        const medicationStatements = response.data.entry.map(entry => entry.resource);

        const mappedMedications = medicationStatements.map(statement => {
            const name = statement.medicationCodeableConcept.coding[0].display;
            const value = statement.dosage[0].text;
            return {
            name,
            value
            };
        });
    
        setMedications(mappedMedications);
        
    }
    else 
    {
        setMedications([]);
        console.log("No se encontraron medicamentos");
    }
    } catch (error) {
      console.error(error);
    }
  };


  const ObservationValueParse = observation => {
    if (observation.valueString) {
      return observation.valueString;
    } else if (observation.valueQuantity) {
      const { value, unit } = observation.valueQuantity;
      return `${value} ${unit || ''}`;
    }
    return '';
  };

  const fetchObservations = async () => {
    try {
      //const response = await axios.get(`https://demo.kodjin.com/fhir/MedicationStatement?subject=Patient/${id}`);
      const response = await axios.get(`https://hapi.fhir.org/baseR4/Observation?subject=${id}`);
      if (response.data.total > 0)
      {
        const observations = response.data.entry.map(entry => entry.resource);
        console.log("obs", observations)
        const mappedObservation = observations.map(obs => {
            const name = obs.code?.text;
            const value = ObservationValueParse(obs);
            return {
            name,
            value
            };
        });
    
        setObservation(mappedObservation);
        
        console.log("maped obs", mappedObservation)
    }
    else 
    {
        setObservation([]);
        console.log("No se encontraron observaciones");
    }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMedication();
    fetchPatient();
    fetchObservations();
  }, [id]);


  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PatienOverview name={parsePatientName(patient)} id={patient.id} avatar={patient.photo?.[0]?.url} ></PatienOverview>
      <GeneralWidget birthDate={patient.birthDate} gender={patient.gender} id={patient.id} phone={obtenerPrimerNumeroTelefono(patient)}></GeneralWidget>
      {medications && <InfoList data={medications} title={"Medicamentos"} icon={"/medication.svg"}></InfoList>}
      {observation && <InfoList data={observation} title={"Observaciones"} icon={"/hearth.svg"}></InfoList>}
      {/* Render other patient details */}
    </div>
  );
}

export default PatientPage;