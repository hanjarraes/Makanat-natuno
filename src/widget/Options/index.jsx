import React, { useState } from 'react';
import Attendees from "../../assets/img/Icon/attendees.svg";

const Options = ({
  options,
  parentDivClassName,
  selectOption,
  setSelectOption
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={parentDivClassName}>
      <div onClick={() => setOpenModal(!openModal)} className={`btn-attendees px-3 ${selectOption ? ' active-attendees' : ''} attendees-position`}>
        {selectOption ? '' :
          <img src={Attendees} alt="img-attendees" />
        }
        <span style={{margin:0, paddingLeft: '11px'}}>
          {selectOption ? selectOption + ' People' : 'Attendees'}
        </span>
      </div>
      {openModal ?
        <label
          className="closeLabel"
          htmlFor={`select-opener`}
          onClick={() => setOpenModal(false)}
          aria-hidden="true"
        />
        : ''}
      {openModal ? (
        <div className="option-attendees">
          <div className="options">
            {options.map((data, idx) => {
              return (
                <div className="option" key={`${idx}-${data.label}`} onChange={() => { setSelectOption(data.label) }}>
                  <input id={`option${idx}`} type="radio" value={data.label} checked={selectOption === data.label} />
                  <label className='w-100' htmlFor={`option${idx}`} >{data.label}</label>
                </div>
              )
            })}
          </div>
          <hr />
          <div className='d-flex justify-content-between align-items-center px-3 pb-3'>
            <div className='btn-clear' onClick={() => { setSelectOption('') }}>Clear all</div>
            <button className='btn btn-primary' disabled={selectOption === ''} onClick={() => setOpenModal(!openModal)}>Apply</button>
          </div>
        </div>
      ) : ''}
    </div>
  );
};

export default Options;
