import Location from "../../assets/img/Icon/Location.svg";
import MapAddress from "../../widget/MapAddress";
import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

const textData = {
  title: "Earn Money hosting with us!",
  desc: "Utilize your space by renting for meetings, events, and films or photo shoots",
  button: "Become a host",
  placeholder: "Where?",
};

const Hero = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBofbW6GkcildWJ_h7uPhJrRy0XkUwL9iE",
    libraries: ["places"],
  });
  const [addressVal, setAddressVal] = useState(null);
  return (
    <div className={`Hero bg-img-hero`} id="ListYourSpace">
      <div className="container hero-content" data-aos="fade-up">
        <div className="hero-tittle">{textData.title}</div>
        <div className="hero-desc">{textData.desc}</div>
        {isLoaded ? (
          <div className="hero-search d-none d-md-flex">
            <MapAddress
              name="Address"
              placeholder={textData.placeholder}
              parentDivClassName='pr-2'
              selectedValue={addressVal}
              setSelected={setAddressVal}
            />
            <button className="btn">{textData.button}</button>
          </div>
        ) : ''}
        <div className="hero-search-mobile d-block d-md-none">
          <div className="hero-search">
            <img src={Location} alt="Phone-Hosting" />
            <input type="text" placeholder={textData.placeholder} />
          </div>
          <button className="btn">{textData.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
