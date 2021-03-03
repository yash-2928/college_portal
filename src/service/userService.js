const baseUrl = "http://localhost:8080"

export function addUser(user) {
    const body = JSON.stringify(user);
    const headers = {
        "Content-Type": "application/json"
    }
    fetch(baseUrl + "/addUser", {
        headers: headers,
        body: body,
        method: "POST"
    }).then(resp => resp.json())
        .then(data => console.log(data))
    .catch(err => console.error(err))
}

export function loginUser(user) {
    const body = JSON.stringify(user);
    const headers = {
        "Content-Type": "application/json"
    }
    fetch(baseUrl + "/login", {
        headers: headers,
        body: body,
        method: "GET"
    }).then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}