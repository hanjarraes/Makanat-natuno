import React, { useState, useMemo, useEffect } from "react";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import MapAddress from "../../widget/MapAddress";
import SelectItem from "../../widget/SelectItem";
import Switch from "../../widget/Switch";
import Filter from "../../assets/img/Icon/filter.svg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Options from "../../widget/Options";

const Result = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBofbW6GkcildWJ_h7uPhJrRy0XkUwL9iE",
    libraries: ["places"],
  });
  const optionProductions = [
    { value: '1', label: 'Production' },
    { value: '2', label: 'Meeting' },
    { value: '3', label: 'Event' },
  ]
  const optionAttendees = [
    { value: '1', label: '2 to 10' },
    { value: '2', label: '11 to 25' },
    { value: '3', label: '26 to 50' },
    { value: '4', label: 'Over 100' },
  ]
  const [production, setProduction] = useState([]);
  const [isSwitch, setIsSwitch] = useState(true);
  const [addressVal, setAddressVal] = useState(null);
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

  const [dimension, setDimension] = useState({
    height: window.innerHeight - 411,
    width: window.innerWidth,
  });
  const { height } = dimension;

  useEffect(() => {
    const dimension = setDimension({
      height: window.innerHeight - 411,
    });
    window.addEventListener('resize', dimension);
    return () => {
      window.removeEventListener('resize', dimension);
    };
  }, []);

  useEffect(() => {

  }, [])
  return (
    <div>
      <Header />
      {isLoaded ?
        <>
          <div className="row px-md-5 py-md-3 nav-result">
            <div className="col-10 d-flex">
              <SelectItem
                name="Plan"
                options={optionProductions}
                showLabelOnly
                parentDivClassName='pr-2'
                placeholder="Plan"
                selectedValue={production}
                minChar={0}
                onChangeDropdown={(e) => setProduction(e)}
              />
              <MapAddress
                name="Where"
                placeholder="Where"
                parentDivClassName='pr-2'
                selectedValue={addressVal}
                setSelected={setAddressVal}
              />
              <Options
                options={optionAttendees}
                parentDivClassName='pr-2'
              />
              <div className="btn-attendees">
                <img src={Filter} alt="img-filter" />
              </div>
            </div>
            <div className="col-2 d-flex justify-content-end hidden-map">
              <div className="switch-map">
                <span>Map</span>
                <Switch checked={isSwitch} onClick={() => setIsSwitch(!isSwitch)} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`${isSwitch ? 'col-md-6 ' : 'col-md-12 '} d-flex`}>
              <div style={{ height: height }}>
              </div>
            </div>
            {isSwitch ?
              <div className="col-md-6 d-flex justify-content-end">
                <GoogleMap
                  zoom={10}
                  center={addressVal ? addressVal : center}

                  mapContainerClassName="map-container"
                >
                  {addressVal && <Marker position={addressVal} />}
                </GoogleMap>
              </div>
              : ''}
          </div>
        </>
        : ''}

      <Footer />
    </div>
  );
};

export default Result;
