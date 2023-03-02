import React from "react";

const Become = () => {
  const textData = {
    title: "Become a Makanat Host!",
    desc: "Use your space's downtime  and start earning!",
    button: "List your space",
  };

  return (
    <div className="content-become">
      <div className="custom-container">
        <div className="container bg-become">
          <div className="become-title">{textData.title}</div>
          <div className="become-desc">{textData.desc}</div>
          <a href="https://makanat.com/login">{textData.button}</a>
        </div>
      </div>
    </div>
  );
};

export default Become;
