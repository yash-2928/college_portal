import Postitem from "../component/PostItem";
import { API_URL } from "./config"

const USER_PATH = "/admin/api"

export default class UserService {

    constructor(token) {
        this.token = token;
    }

    getAuthorizationHeader() {
        return {
            "Authorization": "Bearer " + this.token
        }
    }

    getUsers() {
        return fetch(API_URL + USER_PATH + "/users", {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
    }

    deleteUser(userId) {
        return fetch(API_URL + USER_PATH + "/users/" + userId, {
            method: "DELETE",
            headers: this.getAuthorizationHeader()
        })
    }

}