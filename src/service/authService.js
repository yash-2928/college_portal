import { API_URL } from "./config";

const AUTH_PATH = "/api/auth";

export async function login(username, password) {
  try {
    const resp = await fetch(API_URL + AUTH_PATH + "/signin", {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (resp.ok) {
      return resp.json();
    }
    throw new Error("Error signing in!");
  } catch (error) {
    return alert(error);
  }
}

export async function signUp(user) {
  const resp = await fetch(API_URL + AUTH_PATH + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await resp.json();
}
