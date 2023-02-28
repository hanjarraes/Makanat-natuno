import React from "react";
import ListImg from '../../assets/img/imageList.svg'
import List1 from "../../assets/img/Icon/ic_outline-local-activity.svg"
import List2 from "../../assets/img/Icon/fluent_collections-add-24-regular.svg"
import List3 from "../../assets/img/Icon/material-symbols_free-cancellation-outline-rounded.svg"
import List4 from "../../assets/img/Icon/ri_secure-payment-line.svg"
import List5 from "../../assets/img/Icon/icon-park-outline_agreement.svg"
import List6 from "../../assets/img/Icon/mingcute_message-1-line.svg"
import List7 from "../../assets/img/Icon/tabler_report-money.svg"
import List8 from "../../assets/img/Icon/bx_support.svg"

const List = () => {
  return (
    <div className="list-content">
      <div className="container">
        <div className="list-title-small">With a suite of tools, features and friendly interface</div>
        <div className="list-title"><span>List and manage as many spaces</span> who to welcome</div>
        <img src={ListImg} alt="Phone-Hosting" />
        <div className="list-content-item">
          <div className="list-item">
            <img src={List1} alt="List-item" />
            <div className="list-card-title">Select what activities to hold</div>
            <div className="list-card-desc">Space owners can choose on one or all three categories.</div>
          </div>
          <div className="list-item">
            <img src={List2} alt="List-item" />
            <div className="list-card-title">Offer add-ons on checkout</div>
            <div className="list-card-desc">Space owners can offer add-on services to be included booking.</div>
          </div>
          <div className="list-item">
            <img src={List3} alt="List-item" />
            <div className="list-card-title">Preferred cancellation policy</div>
            <div className="list-card-desc">Four different policies to fit your type of hosting.</div>
          </div>
          <div className="list-item">
            <img src={List4} alt="List-item" />
            <div className="list-card-title">Secure payments confirmation</div>
            <div className="list-card-desc">Hosts will only receive already paid requests.</div>
          </div>
          <div className="list-item">
            <img src={List5} alt="List-item" />
            <div className="list-card-title">Auto-generated agreement</div>
            <div className="list-card-desc">Both guest and hosts will receive short term agreement.</div>
          </div>
          <div className="list-item">
            <img src={List6} alt="List-item" />
            <div className="list-card-title">Message guests</div>
            <div className="list-card-desc">Use our app for more efficient communication.</div>
          </div>
          <div className="list-item">
            <img src={List7} alt="List-item" />
            <div className="list-card-title">Payouts and income reporting</div>
            <div className="list-card-desc">We provide income reporting and show you applicable VAT.</div>
          </div>
          <div className="list-item">
            <img src={List8} alt="List-item" />
            <div className="list-card-title">24/7 care and support</div>
            <div className="list-card-desc">We have answers to your questions, please visit our help center.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
