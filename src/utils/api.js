const token = "6be9abb7-ced4-4a7c-8643-2f58993788b8";

export function Api(configApi) {
  const url = configApi.baseUrl;
  const headers = configApi.headers;

  return fetch(url + "/cards", {
    headers: headers,
  }).then(res);
}
