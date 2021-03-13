import { API_URL } from "./config"

const POST_PATH = "/api"

export default class JobService {

    constructor(token) {
        this.token = token;
    }

    getAuthorizationHeader() {
        return {
            "Authorization": "Bearer " + this.token
        }
    }

    getJobs() {
        return fetch(API_URL + POST_PATH + "/jobs", {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
    }

    getJob(jobId) {
        return fetch(API_URL + POST_PATH + "/jobs/" + jobId, {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
    }

    createJob(companyName, jobTitle, jobContent, link, file, userId) {
        const formData = new FormData();
        if (file) {
            formData.append("file", file);
        }
        formData.append("companyName", companyName);
        formData.append("link", link);
        formData.append("jobTitle", jobTitle);
        formData.append("jobContent", jobContent);
        formData.append("userId", userId);

        return fetch(API_URL + POST_PATH + "/job", {
            method: "POST",
            body: formData,
            headers: {
                ...this.getAuthorizationHeader()
            }
        })
    }

    updateJob(jobID, job) {
        return fetch(API_URL + POST_PATH + "/update/" + jobID, {
            method: "PUT",
            body: JSON.stringify(job),
            headers: {
                "content-Type": "application/json",
                ...this.getAuthorizationHeader()
            }
        })
    }

    deleteJob(jobId) {
        return fetch(API_URL + POST_PATH + "/jobs/" + jobId, {
            method: "DELETE",
            headers: this.getAuthorizationHeader()
        })
    }

    getJobsByUserId(userId) {
        return fetch(API_URL + POST_PATH + "/users/" + userId + "/jobs", {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
    }

}