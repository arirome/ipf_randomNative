const baseUrl = "http://192.168.167.120:5000";

const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
 

  if (method === "GET") {
    return fetch(url, {
      method,
    
    });
  } else {
    return fetch(url, {
      method,
    
      body: JSON.stringify(data),
    });
  }
};




export { fetchSinToken, fetchConToken };
