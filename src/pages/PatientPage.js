import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PatienOverview from '../components/PatienOverview';
import InfoList from '../components/InfoList';
import axios from 'axios';
import { Info } from '@mui/icons-material';
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


  useEffect(() => {
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
    fetchMedication();
    fetchPatient();
  }, [id]);


  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PatienOverview name={parsePatientName(patient)} id={patient.id} avatar={patient.photo?.[0]?.url} ></PatienOverview>
      <GeneralWidget birthDate={patient.birthDate} gender={patient.gender} id={patient.id} phone={obtenerPrimerNumeroTelefono(patient)}></GeneralWidget>
      {medications && <InfoList data={medications}></InfoList>}
      {/* Render other patient details */}
    </div>
  );
}

export default PatientPage;