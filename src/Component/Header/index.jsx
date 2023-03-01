/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Whatsapp, HambergerMenu, ArrowDown2, ArrowUp2 } from "iconsax-react";
import Modal from "react-modal";
import Close from "../../assets/img/Icon/close.svg";
import LogoMakanat from "../../assets/img/Icon/makanat_logo.svg";
import World from "../../assets/img/Icon/world.svg";

const textData = {
  listTitle: "Activities",
  listItem: [
    {
      id: "1",
      title: "Marketing",
      link: "https://makanat.com/activities/3",
    },
    {
      id: "2",
      title: "Event",
      link: "https://makanat.com/activities/12",
    },
    {
      id: "3",
      title: "Productions",
      link: "https://makanat.com/activities/4",
    },
  ],
  buttonSpace: "List Your Space",
  textSignUp: "Sign up",
  textLogin: "Login",
};

const customStyles = {
  overlay: {
    zIndex: 999,
  },
  content: {
    height: window.innerHeight,
    width: window.innerWidth,
    background: "#fff",
  },
};

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-header">
        <div style={{ display: "contents" }}>
          <a className="navbar-brand d-flex" href="/">
            <img src={LogoMakanat} alt="LogoMakanat" className="img-header" />
          </a>
          <div
            className="d-flex d-md-none"
            onClick={() => setOpenModal(!openModal)}
          >
            <HambergerMenu className="burger-nav" />
          </div>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" />
            </ul>
            <div>
              <ul className="navbar-nav nav-header-custom mr-auto d-flex align-items-center">
                <li className="nav-item dropdown">
                  <div onClick={() => setOpenDropdown(!openDropdown)}>
                    {textData.listTitle}
                    {openDropdown ? <ArrowUp2 /> : <ArrowDown2 />}
                  </div>
                  {openDropdown ? (
                    <div className="dropdown-item-nav">
                      {textData.listItem.map(function (item) {
                        return (
                          <a key={item.id} href={item.link}>
                            {item.title}
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </li>
                <li className="nav-item active mx-2">
                  <a className="nav-link" href="/">
                    <div className="btn-light-space">{textData.title}</div>
                  </a>
                </li>
                <li className="nav-item active mx-2">
                  <a className="nav-link" href="https://makanat.com/SignUp">
                    {textData.textSignUp}
                  </a>
                </li>
                <li className="nav-item active mx-2">
                  <a className="nav-link" href="https://makanat.com/login">
                    {textData.textLogin}
                  </a>
                </li>
                <li className="nav-item active mx-2">
                  <img src={World} alt="LogoMakanat" className="img-header" />
                </li>
                <li className="nav-item active mx-2">
                  <div className="vertical-line" />
                </li>
                <li className="nav-item active mx-2">
                  <a className="nav-link" href="/">
                    SAR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal
          isOpen={openModal}
          style={customStyles}
          className="modalNavCustomHero"
          contentLabel="Nav Modal"
        >
          <div>
            <div className="modalNavHeaderHero">
              <img src={LogoMakanat} alt="Logo Header" />
              <img
                src={Close}
                onClick={() => setOpenModal(!openModal)}
                alt="close"
              />
            </div>
            <div className="content-nav-modal">
              <div className="title-nav-mobile">{textData.listTitle}</div>
              <div className="items-modal">
                {textData.listItem.map(function (item) {
                  return (
                    <a key={item.id} href={item.link}>
                      {item.title}
                    </a>
                  );
                })}
              </div>
              <div className="line-nav-hori" />
              <div className="items-modal">
                <a href="https://makanat.com/SignUp" className="small">
                  {textData.textSignUp}
                </a>
                <a href="https://makanat.com/login" className="small">
                  {textData.textLogin}
                </a>
                <a
                  href="/"
                  className="small btn-list"
                  onClick={() => setOpenModal(!openModal)}
                >
                  {textData.button}
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </nav>
    </>
  );
};

export default Header;
