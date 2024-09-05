export const GET_FROM_LOCALSTORAGE = (key) =>{
    if (!key) throw new Error("Invalid key")
        if (typeof window !== 'undefined' && localStorage && localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        return null
}

export const STORE_IN_LOCAL_STORAGE = (key, data) => {
    if (key && data) {
        if (typeof window !== 'undefined' && localStorage) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    } else {
        console.log("INVALID DATA FOR STORE");
    }
}
export const GET_FROM_SESSION_STORAGE = (key) => {
    if (!key) throw new Error("Invalid key");
    if (typeof window !== 'undefined' && sessionStorage && sessionStorage.getItem(key)) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    return null;
}

export const STORE_IN_SESSION_STORAGE = (key, data) => {
    if (key && data) {
        if (typeof window !== 'undefined' && sessionStorage) {
            sessionStorage.setItem(key, JSON.stringify(data));
        }
    } else {
        console.log("INVALID DATA FOR STORE");
    }
}

export function setCookie(name, value, minutes) {
    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name) {
    var nameEQ = name + "=";
    var dca = document.cookie.split(';');
    for (var ca of dca) {
        var c = ca;
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}