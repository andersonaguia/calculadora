export const getData = (key) => {
    return localStorage.getItem(key);
};

export const setData = (key, data) => {
    return localStorage.setItem(key, data);
};

export const clearData = (key) => {
    return localStorage.clear(key);
};