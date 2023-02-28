import React from "react";
import Instagram from "../../assets/img/Icon/Instagram.svg"
import Twitter from "../../assets/img/Icon/Twitter.svg"
import SnapChat from "../../assets/img/Icon/mingcute_snapchat-fill.svg"
import Youtube from "../../assets/img/Icon/mdi_youtube.svg"

import Vector from "../../assets/img/Icon/vector/Vector.svg"
import Vector1 from "../../assets/img/Icon/vector/Vector-1.svg"
import Vector2 from "../../assets/img/Icon/vector/Vector-2.svg"
import Vector3 from "../../assets/img/Icon/vector/Vector-3.svg"
import Vector4 from "../../assets/img/Icon/vector/Vector-4.svg"
import Vector5 from "../../assets/img/Icon/vector/Vector-5.svg"

import MakanatIcon from "../../assets/img/Icon/makanat-icon.svg"

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="footer-title">MAKANAT</div>
              <div className="footer-items">
                <a target="_blank" href="https://makanat.com/about" rel="noreferrer">About us</a>
              </div>
              <div className="footer-items">
                <a target="_blank" href="https://help.makanat.com/ar/" rel="noreferrer">FAQ</a>
              </div>
              <div className="footer-items">
                <a target="_blank" href="https://makanat.com/contact-us" rel="noreferrer">Contact Us</a>
              </div>
            </ div>
            <div className="col-6 col-md-3">
              <div className="footer-title">EXPLORE</div>
              <div className="footer-items">
                <a href="https://makanat.com/activities" rel="noreferrer">Activities</a>
              </div>
              <div className="footer-items">
                <a href="https://makanat.com/locations" rel="noreferrer">Location</a>
              </div>
              <div className="footer-items">
                <a target="_blank" href="https://blog.makanat.com/ar" rel="noreferrer">Blog</a>
              </div>
            </ div>
            <div className="col-6 col-md-3">
              <div className="footer-title">LEGAL</div>
              <div className="footer-items">
                <a href="https://makanat.com/terms" rel="noreferrer">Terms of use</a>
              </div>
              <div className="footer-items">
                <a target="_blank" href="https://help.makanat.com/ar/articles/6802995-%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%A5%D9%84%D8%BA%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%AF%D8%A7%D8%AF" rel="noreferrer">Refund Policy</a>
              </div>
              <div className="footer-items">
                <a target="_blank" href="/" rel="noreferrer">License Agreement</a>
              </div>
            </ div>
            <div className="col-6 col-md-3">
              <div className="footer-title">HOSTING</div>
              <div className="footer-items">
                <a target="_blank" href="https://makanat.com/about" rel="noreferrer">List your space</a>
              </div>
              <div className="footer-items">
                <a target="_blank" href="https://help.makanat.com/ar/articles/6522504-%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%B6%D9%8A%D9%81-%D8%A5%D9%84%D9%89-%D9%85%D9%83%D8%A7%D9%86%D8%A7%D8%AA" rel="noreferrer">Hosting guide</a>
              </div>
            </ div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="footer-right">
            <div className="footer-icon">
              <a rel="noreferrer" target=" _blank" href="https://www.instagram.com/Makanattt/"><img src={Instagram} alt="instagram" /></a>
              <a rel="noreferrer" target=" _blank" href="https://twitter.com/makanat"><img src={Twitter} alt="twitter" /></a>
              <a rel="noreferrer" target=" _blank" href="https://www.snapchat.com/add/makan-at"><img src={SnapChat} alt="SnapChat" /></a>
              <a rel="noreferrer" target=" _blank" href="https://twitter.com/makanat"><img src={Youtube} alt="Youtube" /></a>
            </div>
            <div className="tect-checkout">Secure Checkout</div>
            <div className="footer-vector">
              <img src={Vector} alt="Credit Card" />
              <img src={Vector1} alt="Credit Card1" />
              <img src={Vector2} alt="Credit Card2" />
              <img src={Vector3} alt="Credit Card3" />
              <img src={Vector4} alt="Credit Card4" />
              <img src={Vector5} alt="Credit Card5" />
            </div>
            <img src={MakanatIcon} className='icon-makanat' alt="Credit Card5" />
            <div className="copy-right">©2023 Makanat International LLC</div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
