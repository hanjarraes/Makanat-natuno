import Location from "../../assets/img/Icon/Location.svg";
import React from "react";

const textData = {
  title: "Earn Money hosting with us!",
  desc: "Utilize your space by renting for meetings, events, and films or photo shoots",
  button: "Become a host",
  placeholder: "Where?",
};

const Hero = () => {
  return (
    <div className={`Hero bg-img-hero`} id="ListYourSpace">
      <div className="container hero-content" data-aos="fade-up">
        <div className="hero-tittle">{textData.title}</div>
        <div className="hero-desc">{textData.desc}</div>
        <div className="hero-search d-none d-md-flex">
          <img src={Location} alt="Phone-Hosting" />
          <input type="text" placeholder={textData.placeholder} />
          <button>{textData.button}</button>
        </div>
        <div className="hero-search-mobile d-block d-md-none">
          <div className="hero-search">
            <img src={Location} alt="Phone-Hosting" />
            <input type="text" placeholder={textData.placeholder} />
          </div>
          <button>{textData.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
