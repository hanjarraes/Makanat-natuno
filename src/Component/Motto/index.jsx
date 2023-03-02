import React from "react";

const Motto = () => {
  const textData = {
    titleBold: "List your space ",
    title: "& leave the promotion to us!",
    desc: `Everyone from professional photographers and fitness experts, to companies need places to meet, create, and celebrate. Get your space in front of the most people searching for spaces like yours.`,
  };

  return (
    <div>
      <div className="motto-content" data-aos="fade-up" data-aos-duration="300">
        <div className="motto-title">
          <span>{textData.titleBold}</span> {textData.title}
        </div>
        <div className="motto-desc">{textData.desc}</div>
      </div>
    </div>
  );
};

export default Motto;
