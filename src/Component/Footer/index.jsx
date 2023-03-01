import React from "react";
import Instagram from "../../assets/img/Icon/Instagram.svg";
import Twitter from "../../assets/img/Icon/Twitter.svg";
import SnapChat from "../../assets/img/Icon/mingcute_snapchat-fill.svg";
import Youtube from "../../assets/img/Icon/mdi_youtube.svg";

import Vector from "../../assets/img/Icon/vector/Vector.svg";
import Vector1 from "../../assets/img/Icon/vector/Vector-1.svg";
import Vector2 from "../../assets/img/Icon/vector/Vector-2.svg";
import Vector3 from "../../assets/img/Icon/vector/Vector-3.svg";
import Vector4 from "../../assets/img/Icon/vector/Vector-4.svg";
import Vector5 from "../../assets/img/Icon/vector/Vector-5.svg";

import MakanatIcon from "../../assets/img/Icon/makanat-icon.svg";

const Footer = () => {
  const textData = {
    title1: "MAKANAT",
    menu1: [
      {
        id: 1,
        title: "About us",
        link: "https://makanat.com/about",
      },
      {
        id: 2,
        title: "FAQ",
        link: "https://help.makanat.com/ar/",
      },
      {
        id: 3,
        title: "Contact Us",
        link: "https://makanat.com/contact-us",
      },
    ],
    title2: "EXPLORE",
    menu2: [
      {
        id: 1,
        title: "Activities",
        link: "https://makanat.com/activities",
      },
      {
        id: 2,
        title: "Location",
        link: "https://makanat.com/locations",
      },
      {
        id: 3,
        title: "Blog",
        link: "https://blog.makanat.com/ar",
      },
    ],
    title3: "LEGAL",
    menu3: [
      {
        id: 1,
        title: "Terms of use",
        link: "https://makanat.com/terms",
      },
      {
        id: 2,
        title: "Refund Policy",
        link: "https://help.makanat.com/ar/articles/6802995-%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%A5%D9%84%D8%BA%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%AF%D8%A7%D8%AF",
      },
      {
        id: 3,
        title: "License Agreement",
        link: "/",
      },
    ],
    title4: "LEGAL",
    menu4: [
      {
        id: 1,
        title: "List your space",
        link: "#ListYourSpace",
      },
      {
        id: 2,
        title: "Hosting guide",
        link: "https://help.makanat.com/ar/articles/6522504-%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%B6%D9%8A%D9%81-%D8%A5%D9%84%D9%89-%D9%85%D9%83%D8%A7%D9%86%D8%A7%D8%AA",
      },
    ],
    secure: "Secure Checkout",
    copyright: "©2023 Makanat International LLC",
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-6 col-md-3 item-footer">
                <div className="footer-title">{textData.title1}</div>
                {textData.menu1.map(function (item) {
                  return (
                    <div className="footer-items" key={item.id}>
                      <a target="_blank" href={item.link} rel="noreferrer">
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="col-6 col-md-3 item-footer">
                <div className="footer-title">{textData.title2}</div>
                {textData.menu2.map(function (item) {
                  return (
                    <div className="footer-items" key={item.id}>
                      <a target="_blank" href={item.link} rel="noreferrer">
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="col-6 col-md-3 item-footer">
                <div className="footer-title">LEGAL</div>
                {textData.menu3.map(function (item) {
                  return (
                    <div className="footer-items" key={item.id}>
                      <a target="_blank" href={item.link} rel="noreferrer">
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="col-6 col-md-3 item-footer">
                <div className="footer-title">{textData.title4}</div>
                <div className="footer-items">
                  {textData.menu4.map(function (item) {
                    return (
                      <div className="footer-items" key={item.id}>
                        <a target="_blank" href={item.link} rel="noreferrer">
                          {item.title}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-right">
              <div className="footer-icon">
                <a
                  rel="noreferrer"
                  target=" _blank"
                  href="https://www.instagram.com/Makanattt/"
                >
                  <img src={Instagram} alt="instagram" />
                </a>
                <a
                  rel="noreferrer"
                  target=" _blank"
                  href="https://twitter.com/makanat"
                >
                  <img src={Twitter} alt="twitter" />
                </a>
                <a
                  rel="noreferrer"
                  target=" _blank"
                  href="https://www.snapchat.com/add/makan-at"
                >
                  <img src={SnapChat} alt="SnapChat" />
                </a>
                <a
                  rel="noreferrer"
                  target=" _blank"
                  href="https://twitter.com/makanat"
                >
                  <img src={Youtube} alt="Youtube" />
                </a>
              </div>
              <div className="tect-checkout">{textData.secure}</div>
              <div className="footer-vector">
                <img src={Vector} alt="Credit Card" />
                <img src={Vector1} alt="Credit Card1" />
                <img src={Vector2} alt="Credit Card2" />
                <img src={Vector3} alt="Credit Card3" />
                <img src={Vector4} alt="Credit Card4" />
                <img src={Vector5} alt="Credit Card5" />
              </div>
              <img
                src={MakanatIcon}
                className="icon-makanat"
                alt="Credit Card5"
              />
              <div className="copy-right">{textData.copyright}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
