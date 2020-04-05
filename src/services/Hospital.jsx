import RequestService from "./Request";

const HospitalService = {
    getHospital(hospitalId) {
        return RequestService.get(`hospital/${hospitalId}`);
    },
    getHospitals(filters) {
        return RequestService.get('hospital/', filters);
    },
    addHospital(hospitalData) {
        return RequestService.post(`hospital`, hospitalData);
    },
    modifyHospital(hospitalId, hospitalData) {
        return RequestService.post(`hospital/${hospitalId}`, hospitalData);
    }
};

export default HospitalService;
