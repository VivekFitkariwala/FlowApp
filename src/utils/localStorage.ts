// save in local storage
export function saveLocalStorage(key: string, value: any) {
  return localStorage.setItem(key, JSON.stringify(value));
}

// clean local storage
export function clearLocalStorage(key: string) {
  return localStorage.removeItem(key);
}

// get from local storage
export function getFromLocalStorage(key: string) {
  const stringData = localStorage.getItem(key);
  return stringData && JSON.parse(stringData);
}
