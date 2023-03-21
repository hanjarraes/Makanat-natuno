import Modal from "react-modal";
import React, { useState } from 'react';

const ModalSelect = ({
  parentDivClassName,
  optionData
}) => {
  const [selectOption, setSelectOption] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const customStyles = {
    overlay: {
      zIndex: 999,
    },
    content: {
      height: 200,
      width: window.innerWidth,
      background: "#fff",
    },
  };
  return (
    <div className={parentDivClassName}>
      <div className="form-control from-plan-mobile" onClick={() => setOpenModal(!openModal)}>
        {selectOption ? selectOption : 'Plan'}
        <i className="ri-arrow-down-s-line" />
      </div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        className="modal-from-plan"
        contentLabel="Nav Modal"
      >
        <div>
          <div className="nav-modal-plan" >
            <span>Activity</span>
            <i className="ri-close-line" onClick={() => { setOpenModal(false) }} />
          </div>
          <hr />
          <div className="options">
            {optionData.map((data, idx) => {
              return (
                <div className="option" key={`${idx}-${data.label}`} >
                  <input type="radio" value={data.label} checked={selectOption === data.label} onChange={() => { setSelectOption(data.label); setOpenModal(false) }} />
                  <label htmlFor={`option${idx}`}>{data.label}</label>
                </div>
              )
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSelect;
