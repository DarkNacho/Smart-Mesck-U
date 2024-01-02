import FHIR from 'fhir.js';

class ObservationService {
  constructor() {
    this.client = new FHIR({
      baseUrl: 'http://hapi.fhir.org/baseR4', // Ajusta la URL base según tu servidor FHIR
      resourceType: 'Observation',
    });
  }

  async getObservations(patientId) {
    try {
      const response = await this.client.search({
        searchParams: {
          patient: patientId,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener las observaciones:', error);
      throw error;
    }
  }
}

export default ObservationService;