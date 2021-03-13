import { API_URL } from "./config"

const PROFILE_PATH = "/api"

export default class ProfileService {

    constructor(token) {
        this.token = token;
    }

    getAuthorizationHeader() {
        return {
            "Authorization": "Bearer " + this.token
        }
    }

    getUserData(userId) {
        return fetch(API_URL + PROFILE_PATH + "/users/" + userId, {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
            .catch(error => alert(error))
    }

    userUpdate(userUpdateRequest) {
        return fetch(API_URL + PROFILE_PATH + "/userUpdate", {
            method: "PUT",
            headers: {
                ...this.getAuthorizationHeader(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userUpdateRequest)
        }).then(resp => resp.json())
            .catch(error => {
                alert(error);
            })
    }

    updatePasswordRequest(userId, currentPassword, newPassword) {
        const requestBody = {
            userId,
            currentPassword,
            newPassword
        }
        return fetch(API_URL + PROFILE_PATH + "/updatePassword", {
            method: "PUT",
            headers: {
                ...this.getAuthorizationHeader(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        }).then(resp => alert(resp.text()))
            .catch(error => alert(error))
    }

    updatePhoto(userId, file) {
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("file", file);

        return fetch(API_URL + PROFILE_PATH + "/updatePhoto", {
            method: "PUT",
            body: formData,
            headers: {
                ...this.getAuthorizationHeader()
            }
        }).then(resp => resp.json())
            .catch(error => alert(error))
    }


}