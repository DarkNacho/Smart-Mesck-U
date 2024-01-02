import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PatientObservations = ({ patientId }) => {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    const fetchObservations = async () => {
      try {
        const response = await axios.get(`https://hapi.fhir.org/baseR4/Observation?subject=${patientId}`);
        console.log(response.data.entry)

        console.log("----")

        //getObservations

        //const observationService = new ObservationService();
        //const res = await observationService.getObservations(patientId);
        //console.log(res)

        setObservations(response.data.entry.map(entry => entry.resource));
      } catch (error) {
        console.error('Error fetching observations:', error);
      }
    };

    fetchObservations();
  }, [patientId]);

  const renderValue = observation => {
    if (observation.valueString) {
      return observation.valueString;
    } else if (observation.valueQuantity) {
      const { value, unit } = observation.valueQuantity;
      return `${value} ${unit || ''}`;
    }
    return '';
  };
  
  return (
    <div>
      <h2>Observations for Patient {patientId}</h2>
      {observations.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Value</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {observations.map(observation => (
              <tr key={observation.id}>
                <td>{observation.code && observation.code.text}</td>
                <td>{renderValue(observation)}</td>
                <td>{observation.meta && observation.meta.lastUpdated ? observation.meta.lastUpdated : observation.effectiveDateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No observations found.</p>
      )}
    </div>
  );
};

export default PatientObservations;