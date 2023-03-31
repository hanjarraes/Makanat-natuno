import React, { useRef, useState } from "react";
import FilterIcon from "../../assets/img/Icon/filter.svg";
import FilterIcon2 from "../../assets/img/Icon/filter2.svg";
import CloseIcon from "../../assets/img/Icon/close.svg";
import Slider, { SliderTooltip } from "rc-slider";

import "rc-tooltip/assets/bootstrap.css";
import "rc-slider/assets/index.css";

const { Range, Handle } = Slider;
const intlNumber = Intl.NumberFormat("en", { notation: "compact" });

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlayInnerStyle={{
        backgroundColor: "transparent",
        boxShadow: "none",
        color: "#09ACF8",
      }}
      overlay={`$${intlNumber.format(value)}`}
      visible
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const handleStyle = { backgroundColor: "#09ACF8", borderColor: "#09ACF8" };
const trackStyle = { backgroundColor: "#09ACF8" };

export default function Filter({ filterShort, setFilterShort }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);
  const [btnRelevance, setBtnRelevance] = useState(true);
  const [btnDistance, setBtnDistance] = useState(false);

  const handleMinChange = (event) => {
    setMin(Math.min(Number(event.target.value), max));
  };

  const handleMaxChange = (event) => {
    const newMax = Math.min(Number(event.target.value), 5000);
    setMax(Math.max(newMax, min));
  };

  const handleClick = () => {
    setShow(!show);
  };
  const handleChange = (value) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  return (
    <>
      <div ref={ref} style={{ minWidth: `${filterShort ? "90px" : ""}` }}>
        <div className={`btn-attendees ${filterShort ? ' active-attendees' : ''}`} onClick={handleClick}>
          <img src={filterShort ? FilterIcon2 : FilterIcon} alt="img-filter" /> <span>{filterShort}</span>
        </div>
        {show ?
          <label
            className="closeLabel"
            htmlFor={`select-opener`}
            onClick={() => setShow(false)}
            aria-hidden="true"
          />
          : ''}
        {show ?
          <div className="modal-filter" >
            <div className="filter-sort">
              <div className="row">
                <div className="col-6 title-filter-sort">
                  Filter & Sort
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <img
                    src={CloseIcon}
                    style={{ cursor: 'pointer', width: '26px' }}
                    alt="img-close"
                    onClick={() => {
                      setShow(false);
                    }}
                  />
                </div>
              </div>
              <p style={{ paddingTop: '32px', margin: 0, paddingBottom: '8px' }}>Sort by:</p>
              <div className="row tab-filter">
                <div
                  className={`col-6 pr-0 item-filter ${btnRelevance ? "active-filter" : "non-active-filter "}`}
                  onClick={() => {
                    setBtnRelevance(true);
                    setBtnDistance(false);
                  }}>
                  Relevance
                </div>
                <div
                  className={`col-6 pl-0 item-filter ${btnDistance ? "active-filter" : "non-active-filter "}`}
                  onClick={() => {
                    setBtnDistance(true);
                    setBtnRelevance(false);
                  }}>
                  Distance
                </div>
              </div>
              <div style={{ borderBottom: '1px solid #D0D0D3', paddingTop: '24px' }}></div>
              <div style={{ paddingTop: '24px' }}>
                <p style={{ margin: 0, paddingBottom: '16px' }}>Price range:</p>
                <div style={{ minWidth: '310px', paddingBottom: '16px', paddingLeft: '9px', paddingRight: '8px' }}>
                  <Range
                    min={0}
                    max={5000}
                    defaultValue={[0, 5000]}
                    value={[Number(min), Number(max)]}
                    handle={handle}
                    allowCross={false}
                    onChange={handleChange}
                    trackStyle={[trackStyle]}
                    handleStyle={[handleStyle, handleStyle]}
                  />
                </div>
              </div>
              <div className="row" style={{ paddingBottom: '24px' }}>
                <div className="col">
                  SAR
                  <input
                    className="filter-input"
                    type="number"
                    id="min-input"
                    value={min.toLocaleString("id-ID")}
                    onChange={handleMinChange}
                    min="0"
                    max="5000"
                  />
                </div>
                <div className="col d-flex justify-content-end align-items-center ">
                  SAR
                  <input
                    className="filter-input"
                    type="number"
                    id="max-input"
                    value={max.toLocaleString("id-ID")}
                    onChange={handleMaxChange}
                    min="0"
                    max="5000"
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`btn btn-primary`}
                style={{ width: '100%' }}
                onClick={() => {
                  setFilterShort("2 Filters");
                  setShow(false);
                }}
              >
                Apply
              </button>
            </div>
          </div>
          : ''}
      </div>
    </>
  );
}
