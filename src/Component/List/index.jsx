import React from "react";
import ListImg from "../../assets/img/imageList.svg";
import List1 from "../../assets/img/Icon/ic_outline-local-activity.svg";
import List2 from "../../assets/img/Icon/fluent_collections-add-24-regular.svg";
import List3 from "../../assets/img/Icon/material-symbols_free-cancellation-outline-rounded.svg";
import List4 from "../../assets/img/Icon/ri_secure-payment-line.svg";
import List5 from "../../assets/img/Icon/icon-park-outline_agreement.svg";
import List6 from "../../assets/img/Icon/mingcute_message-1-line.svg";
import List7 from "../../assets/img/Icon/tabler_report-money.svg";
import List8 from "../../assets/img/Icon/bx_support.svg";

const textData = {
  title: "With a suite of tools, features and friendly interface",
  secondTitleBold: "List and manage as many spaces",
  secondTitle: "who to welcome",
  listItem: [
    {
      id: 1,
      icon: List1,
      title: "Select what activities to hold",
      desc: "Space owners can choose on one or all three categories.",
    },
    {
      id: 2,
      icon: List2,
      title: "Offer add-ons on checkout",
      desc: "Space owners can offer add-on services to be included booking.",
    },
    {
      id: 3,
      icon: List3,
      title: "Preferred cancellation policy",
      desc: "Four different policies to fit your type of hosting.",
    },
    {
      id: 4,
      icon: List4,
      title: "Secure payments confirmation",
      desc: "Hosts will only receive already paid requests.",
    },
    {
      id: 5,
      icon: List5,
      title: "Auto-generated agreement",
      desc: "Both guest and hosts will receive short term agreement.",
    },
    {
      id: 6,
      icon: List6,
      title: "Message guests",
      desc: "Use our app for more efficient communication.",
    },
    {
      id: 7,
      icon: List7,
      title: "Payouts and income reporting",
      desc: "We provide income reporting and show you applicable VAT.",
    },
    {
      id: 8,
      icon: List8,
      title: "24/7 care and support",
      desc: "We have answers to your questions, please visit our help center.",
    },
  ],
};

const List = () => {
  return (
    <div className="list-content">
      <div className="container container-mobile-list">
        <div className="list-title-small" data-aos="fade-up">
          {textData.title}
        </div>
        <div className="list-title" data-aos="fade-up">
          <span>{textData.secondTitleBold}</span> {textData.secondTitle}
        </div>
        <img
          src={ListImg}
          alt="List-Img"
          className="list-img"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <div className="list-content-item">
          {textData.listItem.map(function (item) {
            return (
              <div className="list-item" data-aos="fade-up" key={item.id}>
                <img src={item.icon} className="icon-list" alt="List-item" />
                <div className="list-card-title">{item.title}</div>
                <div className="list-card-desc">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
