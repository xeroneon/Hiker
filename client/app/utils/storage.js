export function getFromStorage(key) {
    if (!key) {
        return null;
    }

    try {
        const valueStr = localStorage.getItem(key);

        if (valueStr) {
            return JSON.parse(valueStr);
        }
    } catch (err) {
        return null;
    }
}

export function setInStorage(key, obj) {
    if (!key) {
        console.log("error key is missing");
    }

    try {
        localStorage.setItem(key, JSON.stringify(obj));
    } catch (err) {
        console.log(err);
    }
}