export const CURRENT_USER = "currentUser";

export function getSignedInUser() {
    const currentUser = localStorage.getItem(CURRENT_USER);
    return currentUser && JSON.parse(currentUser);
}

export function loadSignedInUser(currentUser) {
    localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser));
}

export function removeSignedInUser() {
    localStorage.removeItem(CURRENT_USER)
}