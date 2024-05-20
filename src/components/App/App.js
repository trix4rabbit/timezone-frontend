import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Timezone from "../Timezone/Timezone";

import { getIP, getLocation }  from "../../utils/Api";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/WeatherApi";

import "./App.css";
import "../ModalWithForm/ModalWithForm.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  
  const [clientIp, setClientIP] = useState("");
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [temperature, setTemp] = useState(0);

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // Call API to retrieve client IP
  useEffect(() => {
    getIP()
    .then((data) => {
      //console.log(JSON.stringify(data));
      //console.log("clientIp: " + data.client_ip);
      //const clientIp = data.client_ip;
      console.log("data.timezone: " + data.timezone);
      setClientIP(data.client_ip);
      setTimezone(data.timezone);
      return getLocation(data.client_ip)
        .then((data2) => {
          //console.log("getLocation: " + JSON.stringify(data2));
          if (data2.status === "success") {
            setCity(data2.city);

            //const latitude = data2.lat;
            //setLatitude(latitude);
            //console.log("latitude: " + latitude);

            //const longitude = data2.lon;
            //setLongitude(longitude);
            //console.log("longitude: " + data2.lon);

            return getForecastWeather(data2.lat, data2.lon)
              .then((data3) => {
                const temperature = parseWeatherData(data3);
                const weatherNumber = parseInt(temperature.temperature.f, 10);
                setTemp(weatherNumber.toString());
              })
          }
      })  
    })
    .catch(console.error);
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
        <Main city={city} clientIp={clientIp} timezone={timezone} />
        </Route>
        <Route path="/timezone">
          <Timezone city={city} weatherTemp={temperature} onSelectCard={handleSelectedCard} />  
        </Route>
        <Route path="/about">
          <About />
        </Route>  
      </Switch>

      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal} buttonText={"Add garment"}>
          <div className="modal__input-group">
            <label htmlFor="name">Name</label>
            <input className="modal__input-name" type="text" placeholder="Name" name="name" id="name" minLength={1} maxLength={30}/>
          </div>
          <div className="modal__input-group">
            <label htmlFor="link">Image</label>
            <input
              className="modal__input-link" type="url" placeholder="Image URL" name="link" id="link" minLength={1} maxLength={30}/>
          </div>
          <div className="modal__input-group">
            <p>
              <b>Select the weather type:</b>
            </p>
            <div className="modal__radio-btns">
              <label>
                <input className="modal__input-radio" type="radio" id="hot" value="hot" name="weatherType"/>
                Hot
              </label>
              <label>
                <input className="modal__input-radio" type="radio" id="warm" value="warm" name="weatherType"/>
                Warm
              </label>
              <label>
                <input className="modal__input-radio" type="radio" id="cold" value="cold" name="weatherType"/>
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal}/>
      )}
      <Footer />
      {/* <Preloader /> */}

    </div>
  );
}

export default App;
