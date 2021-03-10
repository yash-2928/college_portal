import { API_URL } from "./config"

const POST_PATH = "/api"

export default class PostService {

    constructor(token) {
        this.token = token;
    }

    getAuthorizationHeader() {
        return {
            "Authorization": "Bearer " + this.token
        }
    }

    getPosts() {
        return fetch(API_URL + POST_PATH + "/posts", {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
    }

    getPostsByUserId(userId) {
        return fetch(API_URL + POST_PATH + "/users/" + userId + "/posts", {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
    }

    getPost(postId) {
        return fetch(API_URL + POST_PATH + "/posts/" + postId, {
            headers: this.getAuthorizationHeader()
        }).then(resp => resp.json())
    }

    createPost(file, postTitle, postContent, userId) {
        const formData = new FormData();
        if (file) {
            formData.append("file", file);
        }
        formData.append("postTitle", postTitle);
        formData.append("postContent", postContent);
        formData.append("userId", userId);

        return fetch(API_URL + POST_PATH + "/post", {
            method: "POST",
            body: formData,
            headers: {
                ...this.getAuthorizationHeader()
            }
        })
    }

    updatePost(postID, post) {
        return fetch(API_URL + POST_PATH + "/update/" + postID, {
            method: "PUT",
            body: JSON.stringify(post),
            headers: {
                "content-Type": "application/json",
                ...this.getAuthorizationHeader()
            }
        })
    }

    deletePost(postId) {
        return fetch(API_URL + POST_PATH + "/posts/" + postId, {
            method: "DELETE",
            headers: this.getAuthorizationHeader()
        })
    }

}