import "./Main.css";

function Main({city, clientIp, timezone}) {
  if (clientIp === "")
    clientIp = "cannot be found"

  if (timezone === "")
    timezone = "cannot be found."

  return (
    <section className="main" id="Main">

      <div className="main__info">
        <h2 className="main__title">What to Wear (WTWR) at {city}</h2>
        <div className="main__text">
        <p>
          This website detect your location using timezone API. Based on your location, this website will retrieve the current termpature and recommend what you should wear.
        </p>
        <p>
          According to the API
        </p>
        <p>
          You timezone: {timezone}
        </p>
        <p>
          You IP Address: {clientIp}
        </p>
        <p>
          Click on the WTWR tab to see what to wear.
        </p>
        </div>
      </div>


    </section>
    
  );
}

export default Main;

// Get IP Address: http://worldtimeapi.org/api/ip
// Get Location: http://ip-api.com/json/172.113.17.247
// Get Tempearture: 

/*
api1().then((res1) => {
  // If we `return` the api2 call, then the outer .catch can handle errors from it too
  return api2(res1.someValue).then((res2) => {
    setSomeState({ value1: res1.someValue, value2: res2.someValue })
    setSomeOtherState(...etc)
  })
}).catch((err) => {
  // Handle errors from either api1 or api2 here
})

*/