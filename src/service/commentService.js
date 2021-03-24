import { API_URL } from "./config"

const COMMENT_PATH = "/api"

export default class CommentService {

    constructor(token) {
        this.token = token;
    }

    getAuthorizationHeader() {
        return {
            "Authorization": "Bearer " + this.token
        }
    }

    createComment(userId, commentContent, postId = null, jobId = null) {
        const commentBody = {
            userId,
            postId,
            jobId,
            commentContent
        }

        return fetch(API_URL + COMMENT_PATH + "/comment", {
            method: "POST",
            body: JSON.stringify(commentBody),
            headers: {
                "Content-Type": "application/json",
                ...this.getAuthorizationHeader()
            }
        })
    }

    deletePost(commentId) {
        return fetch(API_URL + COMMENT_PATH + "/comment/" + commentId, {
            method: "DELETE",
            headers: this.getAuthorizationHeader()
        })
    }

}