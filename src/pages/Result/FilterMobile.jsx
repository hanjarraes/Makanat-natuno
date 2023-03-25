import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  optionAttendees,
} from "./service";
// import Datepick from "../../widget/Datepick";

import Slider, { SliderTooltip } from "rc-slider";
import DatePickMobile from "../../widget/Datepick/DatePickMobile";



const FilterMobile = ({ openModal, setOpenModal }) => {
  const { Range, Handle } = Slider;
  const [btnRelevance, setBtnRelevance] = useState(true);
  const [btnDistance, setBtnDistance] = useState(false);
  const [selectOption, setSelectOption] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);

  const [dimension, setDimension] = useState({
    height: window.innerHeight - 200,
    width: window.innerWidth,
  });
  const { height } = dimension;

  useEffect(() => {
    const dimension = setDimension({
      height: window.innerHeight - 200,
    });
    window.addEventListener('resize', dimension);
    return () => {
      window.removeEventListener('resize', dimension);
    };

  }, []);

  const handleStyle = { backgroundColor: "#2A4DFF", borderColor: "#2A4DFF", height: 20, width: 20 };
  const trackStyle = { backgroundColor: "#2A4DFF", height: 10 };
  const intlNumber = Intl.NumberFormat("en", { notation: "compact" });

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlayInnerStyle={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "red",
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


  const handleMinChange = (event) => {
    setMin(Math.min(Number(event.target.value), max));
  };

  const handleMaxChange = (event) => {
    const newMax = Math.min(Number(event.target.value), 5000);
    setMax(Math.max(newMax, min));
  };
  const handleChange = (value) => {
    setMin(value[0]);
    setMax(value[1]);
  };
  return (

    <Modal
      isOpen={openModal}
      style={customStyles}
      className="modal-mobile-filter"
      contentLabel="Nav Modal"
    >
      <div className="top-modal">
        <span>Filter</span>
        <i className="ri-close-line" onClick={() => setOpenModal(!openModal)} />
      </div>
      <div className="content-modal" style={{ height: height }}>
        <div className="title-modal">When?</div>
        <DatePickMobile />
        <hr />
        <div className="title-modal">Attendees</div>
        <div className="options-attends">
          {optionAttendees.map((data, idx) => {
            return (
              <div className="option" key={`${idx}-${data.label}`} >
                <input type="radio" value={data.label} checked={selectOption === data.label} onChange={() => { setSelectOption(data.label) }} />
                <label htmlFor={`option${idx}`}>{data.label}</label>
              </div>
            )
          })}
        </div>
        <hr />
        <div className="title-modal">Sort by:</div>
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
        <hr />
        <div className="title-modal">Price range:</div>
        <div>
          <div>
            <div className="range-price">
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
          <div className="row">
            <div className="col">
              SAR
              <input
                className="filter-input"
                type="number"
                id="min-input"
                value={min}
                onChange={handleMinChange}
                min="0"
                max="5000"
              />
            </div>
            <div className="col d-flex justify-content-end align-items-center">
              SAR
              <input
                className="filter-input"
                type="number"
                id="max-input"
                value={max}
                onChange={handleMaxChange}
                min="0"
                max="5000"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-modal">
        <span>Clear All</span>
        <button
          type="submit"
          className={`btn btn-primary`}
          onClick={() => setOpenModal(!openModal)}
        >
          Apply Filter
        </button>
      </div>
    </Modal>
  );
};

export default FilterMobile;
