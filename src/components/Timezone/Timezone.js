import "./Timezone.css";
import ItemCard from "../ItemCard/ItemCard";
import "../ItemCard/ItemCard.css";
import { defaultClothingItems } from "../../utils/ClothingItems";

function Timezone({ city, weatherTemp, onSelectCard }) {

  if (city === "")
    city = "(City Not Found)";
  
  const getWeatherType = () => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <section className="timezone" id="Timezone">
      <div className="timezone__info">
        <h2 className="timezone__title">What to Wear</h2>
        <p>Right now it is {weatherTemp} °F</p>
      </div>
      <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              card={filteredCards}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
 
    </section>
    );
}

export default Timezone;
