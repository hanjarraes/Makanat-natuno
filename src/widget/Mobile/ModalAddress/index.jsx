import Modal from "react-modal";
import React, { useState } from 'react';
import Location from "../../../assets/img/Icon/Location.svg";
import usePlacesAutocomplete from "use-places-autocomplete";

const ModalAddress = ({
  parentDivClassName,
}) => {
  const [openModal, setOpenModal] = useState(false);


  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const customStyles = {
    overlay: {
      zIndex: 999,
    },
    content: {
      height: window.innerHeight - 75,
      width: window.innerWidth,
      background: "#fff",
    },
  };


  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    setOpenModal(false)
  };

  return (
    <div className={parentDivClassName}>
      <div className="form-control from-address-mobile " onClick={() => setOpenModal(!openModal)}>
        <img src={Location} alt="img-location" />
        <span>

          {value ? value : 'Where'}
        </span>
      </div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        className="modal-from-address"
        contentLabel="Nav Modal"
      >
        <div className="p-4">
          <div className="form-control">
            <img src={Location} alt="img-location" />
            <input
              placeholder="Where"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={!ready} />
          </div>
        </div>
        <hr />
        <div className="p-4">
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <div className="item-address-modal" onClick={() => handleSelect(description)} key={place_id} >
                {description}
              </div>
            ))}
        </div>
      </Modal>
    </div>
  );
};

export default ModalAddress;
