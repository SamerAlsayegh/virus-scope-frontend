import RequestService from "./Request";

const PatientService = {
    getPatient(patientId) {
        return RequestService.get(`patient/${patientId}`);
    },
    getPatients(filters) {
        return RequestService.get('patient/', filters);
    },
    addPatient(patientData) {
        return RequestService.post(`patient`, patientData);
    },
    modifyPatient(patientId, patientData) {
        return RequestService.post(`patient/${patientId}`, patientData);
    }
};

export default PatientService;
