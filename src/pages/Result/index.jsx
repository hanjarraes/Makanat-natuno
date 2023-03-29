import React, { useState, useMemo, useEffect, useRef } from "react";
import Header from "../../Component/Header";
import MapAddress from "../../widget/MapAddress";
import SelectItem from "../../widget/SelectItem";
import Switch from "../../widget/Switch";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Options from "../../widget/Options";
import CardContent from "../../widget/CardContent";
import {
  optionProductions,
  optionAttendees,
  ContentCard,
  colourOptions,
  showItems,
  showPagination,
} from "./service";
import SelectMulti from "../../widget/SelectMulti";
import Datepick from "../../widget/Datepick";
import Filter from "../../widget/Filter";

import LogoFilter from "../../assets/img/Icon/filter2.svg";
import LogoList from "../../assets/img/Icon/list.svg";
import LogoMap from "../../assets/img/Icon/map.svg";
import ModalSelect from "../../widget/Mobile/ModalSelect";
import ModalAddress from "../../widget/Mobile/ModalAddress";
import FilterMobile from "./FilterMobile";
const libraries = ["places"];
const Result = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBofbW6GkcildWJ_h7uPhJrRy0XkUwL9iE",
    libraries,
  });
  const divRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(0);
  const [production, setProduction] = useState(null);
  const [activities, setActivities] = useState([]);
  const [isSwitch, setIsSwitch] = useState(true);
  const [isSwitchM, setIsSwitchM] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [addressVal, setAddressVal] = useState(null);
  const [totalFilter, setTotalFilter] = useState('');
  const [startDate, setStartDate] = useState("");
  const [selectOption, setSelectOption] = useState('')
  const [filterShort, setFilterShort] = useState("");
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

  const [dataContent, setDataContent] = useState([]);
  const [dataPage, setDataPage] = useState([]);
  const [selectPage, setSelectPage] = useState(1);

  const [dimension, setDimension] = useState({
    height: window.innerHeight - 154,
    width: window.innerWidth,
  });
  const { height } = dimension;

  let titleTop = `Showing 12 of ${ContentCard.length} result for Production spaces near Riyadh`
  if (window.matchMedia('screen and (max-width: 1400px)').matches) {
    titleTop = `${ContentCard.length} Production spaces near Riyadh, Saudi Arabia.`
  }

  useEffect(() => {
    if (window.matchMedia('screen and (max-width: 762px)').matches) {
      setIsSwitchM(false);
      const dimension = setDimension({
        height: window.innerHeight - 150,
      });
      window.addEventListener('resize', dimension);
      return () => {
        window.removeEventListener('resize', dimension);
      };
    } else {
      const dimension = setDimension({
        height: window.innerHeight - 154,
      });
      window.addEventListener('resize', dimension);
      return () => {
        window.removeEventListener('resize', dimension);
      };
    }
  }, []);

  //pagination
  const showData = 12;
  const totalItems = ContentCard.length;
  const totalPages = Math.ceil(totalItems / showData);

  useEffect(() => {
    showItems({ selectPage, showData, setDataContent });
    showPagination({ selectPage, totalPages, setDataPage });
  }, [selectPage, totalPages]);


  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      setIsAtBottom(div.scrollTop);
    };
    const div = divRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
      return () => {
        div.removeEventListener('scroll', handleScroll);
      };
    }
  });
  console.log(production)
  const ActiveReset = startDate || selectOption || filterShort || production != null || addressVal ? true : false
  return (
    <div>
      <Header />
      {isLoaded ?
        <>
          <div className="row py-md-3 nav-result">
            <div className={`col-6 d-md-none d-block ${isAtBottom === 0 ? 'py-3' : 'py-1'}`}>
              <ModalSelect optionData={optionProductions} selectedValue={production} />
            </div>
            <div className={`col-6 d-md-none d-block ${isAtBottom === 0 ? 'py-3' : 'py-1'}`}>
              <ModalAddress />
            </div>
            <div className="col-md-10 d-none d-md-flex col-12">
              <SelectItem
                name="Plan"
                options={optionProductions}
                showLabelOnly
                parentDivClassName="pr-2"
                placeholder="Plan"
                selectedValue={production}
                minChar={0}
                onChangeDropdown={(e) => setProduction(e)}
              />
              <MapAddress
                name="Where"
                placeholder="Where"
                parentDivClassName="pr-2"
                selectedValue={addressVal}
                setSelected={setAddressVal}
              />
              <Datepick
                placeholder={"When?"}
                startDate={startDate}
                setStartDate={setStartDate}
              />
              <Options
                selectOption={selectOption}
                setSelectOption={setSelectOption}
                options={optionAttendees}
                parentDivClassName="pr-2"
              />
              <Filter filterShort={filterShort} setFilterShort={setFilterShort} />
              {ActiveReset ?
                <div
                  className="reset-all-filter"
                  onClick={() => {
                    setProduction(null);
                    setAddressVal('');
                    setStartDate('');
                    setSelectOption('');
                    setFilterShort('')
                    if (addressVal) {
                      const clearAddress = document.getElementById('clear-address');
                      clearAddress.click();
                    }
                  }}>Reset</div>
                : ''}
            </div>
            <div className="col-2 d-none d-md-flex d-flex justify-content-end hidden-map">
              <div className="switch-map">
                <span>Map</span>
                <Switch
                  checked={isSwitch}
                  onClick={() => setIsSwitch(!isSwitch)}
                />
              </div>
            </div>
          </div>
          {isSwitchM ?
            (
              <div className="col-12 d-flex justify-content-end" style={{ height: height }}>
                <GoogleMap
                  zoom={16}
                  center={addressVal ? addressVal : center}
                  mapContainerClassName="map-container"
                >
                  {addressVal && <Marker position={addressVal} />}
                </GoogleMap>
              </div>
            )
            :
            (
              <div className="row bg-white" style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset" }}>
                <div className={`${isSwitch ? 'col-md-6 ' : 'col-md-12 '} pr-0 d-flex card-item`}>
                  <div ref={divRef} className="content-card-item" style={{ height: height }} >
                    <div className="row w-100 pl-3 top-content-card">
                      <div className={`col-md-6 py-md-3 pt-3 title-top d-flex col-12`}>
                        {titleTop}
                      </div>
                      <div className={`col-md-6 col-12 py-3 pr-3`}>
                        <SelectMulti
                          selectedValue={activities}
                          onChangeDropdown={(e) => setActivities(e)}
                          name="colors"
                          placeholder="Search activities"
                          options={colourOptions}
                        />
                      </div>
                    </div>
                    <div className="row w-100 pl-3">
                      {dataContent.map((itemContent, idx) => {
                        return (
                          <div className={`${isSwitch ? 'col-md-6 ' : 'col-md-3 '} pt-2 pb-3`} key={idx} >
                            <CardContent data={itemContent} />
                          </div>
                        )
                      })}
                    </div>
                    <ul className="pagination justify-content-center mb-3">
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
                  <div className="col-md-6 d-flex justify-content-end pl-0">
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
            )
          }
        </>
        : ''}
      <div className="d-md-none btn-filter-map">
        <div className="item-filter-map" onClick={() => setOpenModal(!openModal)}>
          <img src={LogoFilter} alt="LogoFilter" />
          <span>Filter</span>
          {totalFilter ?
            <div className="text-filter">{totalFilter}</div>
            : ''
          }
        </div>
        <div className="vertical-line" />
        <div className="item-filter-map" onClick={() => setIsSwitchM(!isSwitchM)}>
          {isSwitchM ?
            <>
              <img src={LogoList} alt="LogoList" />
              <span>List</span>
            </>
            :
            <>
              <img src={LogoMap} alt="LogoMap" />
              <span>Map</span>
            </>}
        </div>
      </div>
      <FilterMobile setTotal={setTotalFilter} openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Result;
