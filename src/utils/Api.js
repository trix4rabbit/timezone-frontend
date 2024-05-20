
export const getIP = () => {

  const worldtimeAPI = fetch(
    `http://worldtimeapi.org/api/ip`
  ).then(parseResponse);

  console.log("worldtimeAPI: " + worldtimeAPI);
  return worldtimeAPI;
};

export const getLocation = (clientIp) => {
  console.log("getLocation.clientIp: " + clientIp);
  const ipAPI = fetch(
    `http://ip-api.com/json/${clientIp}`
  ).then(parseResponse);

  console.log("ipAPI: " + ipAPI);
  return ipAPI;
};


const parseResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};


