import React from "react";
import HpHoasting1 from "../../assets/img/hosting/illustrative.svg"
import HpHoasting2 from "../../assets/img/hosting/illustrative-1.svg"
import HpHoasting3 from "../../assets/img/hosting/illustrative-2.svg"
const Hosting = () => {
  return (
    <div className="hosting-content">
      <div className="container">
        <div className="hosting-title"><span>How</span> hosting works</div>

        <div className="content-card-hosting">
          <div className="card-hosting" data-aos="fade-up">
            <img src={HpHoasting1} alt="Phone-Hosting" />
            <div className="hosting-card-title">List your space at Makanat</div>
            <div className="hosting-card-desc">Set your price, add photos and details, then your listing is ready to be seen by millions of people searching for space.</div>
          </div>
          <div className="card-hosting" data-aos="fade-up">
            <img src={HpHoasting2} alt="Phone-Hosting2" />
            <div className="hosting-card-title">Welcome guests to your space</div>
            <div className="hosting-card-desc">Manage booking through Makanat. Once you confirm, your guests will receive information on how to get there and space details.</div>
          </div>
          <div className="card-hosting" data-aos="fade-up">
            <img src={HpHoasting3} alt="Phone-Hosting3" />
            <div className="hosting-card-title">Get paid every time</div>
            <div className="hosting-card-desc">Guests are charged upfront through Makanat's secure payment system. Your payout is directly deposited after each booking.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
