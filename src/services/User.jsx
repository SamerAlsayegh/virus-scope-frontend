import RequestService from "./Request";

const UserService = {
    getUser() {
        return RequestService.get(`user`);
    },
    updateUser(userData) {
        return RequestService.post('user',userData);
    }
};

export default UserService;
