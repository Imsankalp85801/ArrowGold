export let LOGIN = "LOGIN";

export function pending(action) {
    return action + "_PENDING";
}

export function fulfilled(action) {
    return action + "_FULFILLED";
}

export function rejected(action) {
    return action + "_REJECTED";
}