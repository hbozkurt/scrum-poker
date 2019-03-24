const BaseUrl = process.env.REACT_APP_API_BASE_URL;

function Post(url: string, payload: any) {
  const options = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload)
  }
  return fetch(url, options);
}

const api = {
  createSession(payload: any) {
    const url = `${BaseUrl}/sessions/`;
    return Post(url, payload);
  }
};

export default api;