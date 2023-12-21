class PatientService 
{
    constructor(baseUrl) {
      this.client = new FHIR({ baseUrl });
      this.resourceType = 'Patient';
    }
  
    create(patient) {
      return this.client.create({ resource: patient});
    }
  
    read(id) {
      return this.client.read({ type: this.resourceType, id });
    }
  
    update(patient) {
      return this.client.update({ resource: patient});
    }
  
    delete(id) {
      return this.client.delete({ type: this.resourceType, id });
    }
  
    search(params) {d
      return this.client.search({ type: this.resourceType, query: params });
    }
  }