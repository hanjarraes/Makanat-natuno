import React, { useState, useMemo, useEffect } from "react";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import MapAddress from "../../widget/MapAddress";
import SelectItem from "../../widget/SelectItem";
import Switch from "../../widget/Switch";
import Attendees from "../../assets/img/Icon/attendees.svg";
import Filter from "../../assets/img/Icon/filter.svg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Result = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBofbW6GkcildWJ_h7uPhJrRy0XkUwL9iE",
    libraries: ["places"],
  });
  const optionProductions = [
    { value: '1', label: 'Production' },
    { value: '2', label: 'Event' },
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
                name="Address"
                placeholder="Address"
                parentDivClassName='pr-2'
                selectedValue={addressVal}
                setSelected={setAddressVal}
              />
              <div className="btn-attendees">
                <img src={Attendees} alt="img-attendees" />
                <span>
                  Attendees
                </span>
              </div>
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
                kontol
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
