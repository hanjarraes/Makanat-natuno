import React from "react";
import HpHoasting1 from "../../assets/img/hosting/illustrative.svg";
import HpHoasting2 from "../../assets/img/hosting/illustrative-1.svg";
import HpHoasting3 from "../../assets/img/hosting/illustrative-2.svg";

const textData = {
  titleBold: "How ",
  title: "hosting works",
  listCard: [
    {
      id: 1,
      title: "List your space at Makanat",
      desc: `Set your price, add photos and details, then your listing is ready to be seen by millions of people searching for space.`,
      img: HpHoasting1,
    },
    {
      id: 2,
      title: "Welcome guests to your space",
      desc: `Manage booking through Makanat. Once you confirm, your guests will receive information on how to get there and space details.`,
      img: HpHoasting2,
    },
    {
      id: 3,
      title: "Get paid every time",
      desc: `Guests are charged upfront through Makanat's secure payment system. Your payout is directly deposited after each booking.`,
      img: HpHoasting3,
    },
  ],
};

const Hosting = () => {
  return (
    <div className="hosting-content">
      <div className="custom-container">
        <div className="hosting-title">
          <span>{textData.titleBold}</span>
          {textData.title}
        </div>

        <div className="content-card-hosting">
          {textData.listCard.map(function (item) {
            return (
              <div className="card-hosting" data-aos="fade-up" data-aos-duration="300" key={item.id}>
                <img src={item.img} alt="Phone-Hosting" />
                <div className="hosting-card-title">{item.title}</div>
                <div className="hosting-card-desc">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hosting;
