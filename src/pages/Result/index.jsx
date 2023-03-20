import React, { useState, useMemo, useEffect } from "react";
import Header from "../../Component/Header";
import MapAddress from "../../widget/MapAddress";
import SelectItem from "../../widget/SelectItem";
import Switch from "../../widget/Switch";
import Filter from "../../assets/img/Icon/filter.svg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Options from "../../widget/Options";
import CardContent from "../../widget/CardContent";
import { optionProductions, optionAttendees, ContentCard, colourOptions, showItems, showPagination } from "./service"
import SelectMulti from "../../widget/SelectMulti";


const Result = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBofbW6GkcildWJ_h7uPhJrRy0XkUwL9iE",
    libraries: ["places"],
  });
  const [production, setProduction] = useState([]);
  const [activities, setActivities] = useState([]);
  const [isSwitch, setIsSwitch] = useState(true);
  const [addressVal, setAddressVal] = useState(null);
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

  const [dataContent, setDataContent] = useState([]);
  const [dataPage, setDataPage] = useState([]);
  const [selectPage, setSelectPage] = useState(1);


  const [dimension, setDimension] = useState({
    height: window.innerHeight - 260,
    width: window.innerWidth,
  });
  const { height } = dimension;

  useEffect(() => {
    const dimension = setDimension({
      height: window.innerHeight - 280,
    });
    window.addEventListener('resize', dimension);
    return () => {
      window.removeEventListener('resize', dimension);
    };
  }, []);

  //pagination
  const showData = 2;
  const totalItems = ContentCard.length;
  const totalPages = Math.ceil(totalItems / showData);


  useEffect(() => {
    showItems({ selectPage, showData, setDataContent });
    showPagination({ selectPage, totalPages, setDataPage });
  }, [selectPage, totalPages]);

  console.log(totalPages)

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
          <div className="row bg-white" style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset" }}>
            <div className={`${isSwitch ? 'col-md-6 ' : 'col-md-12 '} d-flex`}>
              <div className='w-100'>
                <div className="row px-3 top-content-card">
                  <div className={`col-md-6 py-3 title-top`}>
                    Showing 12 of {ContentCard.length} result for Production spaces near Riyadh
                  </div>
                  <div className={`col-md-6 py-3 p-0 pr-3`}>
                    <SelectMulti
                      selectedValue={activities}
                      onChangeDropdown={(e) => setActivities(e)}
                      name="colors"
                      placeholder="Search activities"
                      options={colourOptions}
                    />
                  </div>
                </div>
                <div className="row overflow-auto px-3" style={{ height: height }} >
                  {dataContent.map((itemContent, idx) => {
                    return (
                      <div className={`${isSwitch ? 'col-md-6 ' : 'col-md-3 '} py-3`} key={idx} >
                        <CardContent data={itemContent} />
                      </div>
                    )
                  })}
                </div>
                <ul className="pagination justify-content-center">
                  <li className="page-item" onClick={() => {
                    if (selectPage > 1) setSelectPage(selectPage - 1)
                  }}>
                    <div className="page-link">
                      <i className="ri-arrow-left-s-line" />
                    </div>
                  </li>
                  {dataPage.map((data, idx) => {
                    return (
                      <li className={`page-item ${data === selectPage ? 'active-item' : ''}`} key={idx} onClick={() => setSelectPage(data)}>
                        <div className="page-link ">{data}</div>
                      </li>
                    )
                  })}
                  <li className="page-item" onClick={() => {
                    if (selectPage < totalPages) setSelectPage(selectPage + 1)
                  }}>
                    <div className="page-link">
                      <i className="ri-arrow-right-s-line" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {isSwitch ?
              <div className="col-md-6 d-flex justify-content-end">
                <GoogleMap
                  zoom={16}
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
    </div>
  );
};

export default Result;
