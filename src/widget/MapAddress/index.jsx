import React from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Close from "../../assets/img/Icon/closeBlack.svg";
import Location from "../../assets/img/Icon/Location.svg";

const MapAddress = ({
  name,
  selectedValue,
  setSelected,
  parentDivClassName,
  placeholder,
  className
}) => {

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };
  return (
    <div className={parentDivClassName}>
      <div className='form-control input-Address '>
        <img src={Location} alt="img-location" />
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className={className}
            placeholder={placeholder}
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
        {selectedValue ? <img src={Close} className="clear-address" onClick={() => { setSelected(null); setValue('') }} alt="close" /> : ''}
      </div>
    </div>
  );
};

export default MapAddress;
