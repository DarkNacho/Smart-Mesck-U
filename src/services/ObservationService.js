import { FhirClient } from "fhir.js/src/fhir";

class ObservationService 
{
    constructor(baseUrl) {
      this.client = new FhirClient.FHIR({ baseUrl });
      this.resourceType = 'Observation';
    }
  
    create(patientId, observation) {
  
      observation.subject = { reference: `Patient/${patientId}` };
  
      //console.log(JSON.stringify(observation, null, 2));
      return this.client.create( { resource: observation});
    }
  
    read(id) {
      return this.client.read({ type: this.resourceType, id });
    }
  
    update(observation) {
      return this.client.update({ resource: observation});
    }
  
    delete(id) {
      return this.client.delete({ type: this.resourceType, id });
    }
  
    searchByPatient(patientId) {
      const params = { subject: `Patient/${patientId}` };
      return this.client.search({ type: this.resourceType, query: params });
    }
  }

  export default ObservationService;