import { API_URL } from "./config"

const REPORT_PATH = "/api"

export default class ReportService {

    constructor(token) {
        this.token = token;
    }

    getAuthorizationHeader() {
        return {
            "Authorization": "Bearer " + this.token
        }
    }

    getReports() {
        return fetch(API_URL + REPORT_PATH + "/reports", {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
    }

    reportPost(userId, postId, message) {
        const reportBody = {
            userId,
            postId,
            message
        }

        return fetch(API_URL + REPORT_PATH + "/report", {
            method: "POST",
            body: JSON.stringify(reportBody),
            headers: {
                "Content-Type": "application/json",
                ...this.getAuthorizationHeader()
            }
        }).then(resp => resp.text())
    }

    deleteReport(reportId) {
        return fetch(API_URL + REPORT_PATH + "/report/" + reportId, {
            method: "DELETE",
            headers: this.getAuthorizationHeader()
        })
    }

}