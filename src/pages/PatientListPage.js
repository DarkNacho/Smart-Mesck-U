import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

  return name;
}

const PatientListPage = () => {
  const [patients, setPatients] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const navigate = useNavigate();

  const fetchPatients = async url => {
    try {
      const response = await axios.get(url);
      setPatients(response.data.entry.map(entry => entry.resource));

      console.log(response.data)

      // Extraer las URLs de las páginas siguientes y anteriores
      const nextPageLink = response.data.link.find(link => link.relation === 'next');
      const previousPageLink = response.data.link.find(link => link.relation === 'previous');
      setNextPageUrl(nextPageLink?.url);
      setPreviousPageUrl(previousPageLink?.url);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  useEffect(() => {
    //const initialUrl = 'https://demo.kodjin.com/fhir/Patient?_count=10'
    const initialUrl = 'https://hapi.fhir.org/baseR4/Patient?_count=10';
    fetchPatients(initialUrl);
  }, []);

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchPatients(nextPageUrl);
    }
  };

  const handlePreviousPage = () => {
    if (previousPageUrl) {
      fetchPatients(previousPageUrl);
    }
  };

  const handlePatientClick = patient => {
    console.log(patient)
    setSelectedPatient(patient);
    //navigate(`/Observation/${patient.id}`);
  };

  const bdasd = () => {
    console.log("holi")
  };

  return (
    <div>
      <h1>Patient List</h1>
      <List>
        {patients.map(patient => (
          <ListItem key={patient.id} button onClick={() => handlePatientClick(patient)} onDoubleClick = { () => navigate(`/Patient/${patient.id}`)}>
            <ListItemText
              primary={`ID: ${patient.id}`}
              secondary={`Name: ${parsePatientName(patient)}, Gender: ${patient.gender || 'N/A'}`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={handlePreviousPage} disabled={!previousPageUrl}>
        Previous Page
      </Button>
      <Button variant="contained" color="primary" onClick={handleNextPage} disabled={!nextPageUrl}>
        Next Page
      </Button>
    

      {selectedPatient && (
        <div>
          <h2>Selected Patient</h2>
          <p>ID: {selectedPatient.id}</p>
          <p>Name: {selectedPatient.name && selectedPatient.name.length > 0 ? selectedPatient.name[0].family : 'N/A'}</p>
          <p>Gender: {selectedPatient.gender || 'N/A'}</p>
         
          {/* Aquí puedes mostrar el resto de la información del paciente */}
        </div>
      )}
    </div>
  );
};

export default PatientListPage;
