import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatepickerIcon from "../../assets/img/Icon/datepicker.svg";
import { format } from "date-fns";

export default function DatePickMobile({ placeholder }) {
  const [startDate, setStartDate] = useState("");
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const [hours, setHours] = useState([]);
  const [select, setSelect] = useState(false);
  const [modifyDate, setModifyDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );

  let dayLength, monthLength;
  if (startDate) {
    dayLength = format(startDate, "EEEE").length;
    monthLength = format(startDate, "MMMM").length;
  }


  useEffect(() => {
    const now = new Date();
    let hour = now.getHours();
    const ampm = hour >= 12 ? "PM" : "AM";
    let end = hour + 8;
    hour = hour % 12 || 12;
    end = end % 12 || 12;
    setSelectedStartTime(`${hour}:00 ${ampm}`);
    setSelectedEndTime(`${end}:00 ${ampm}`);
    const hourOptions = [];
    for (let i = 1; i <= 12; i++) {
      hourOptions.push(`${i}:00 ${i === 12 ? "PM" : "AM"}`);
    }
    for (let i = 1; i <= 12; i++) {
      hourOptions.push(`${i}:00 ${i === 12 ? "AM" : "PM"}`);
    }
    setHours(hourOptions);
  }, [select]);

  const ExampleCustomTimeInput = () => (
    <>
      <div
        className="row custom-add-time"
        style={{
          marginRight: `${startDate && "-139px"}`,
        }}
      >
        <p
          style={{ fontSize: "14px", fontWeight: 700 }}
          className="justify-content-center d-flex"
        >
          {startDate &&
            format(
              startDate,
              `${dayLength <= 6 ? "EEEE" : "EE"}, dd ${monthLength <= 6 ? "MMMM" : "MMM"
              } yyyy`
            )}
        </p>
        <select
          className="datepick-time col"
          value={selectedStartTime}
          onChange={(e) => setSelectedStartTime(e.target.value)}
        >
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select
          className="datepick-time col"
          value={selectedEndTime}
          onChange={(e) => setSelectedEndTime(e.target.value)}
        >
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className="p-0 footer-datepick"></div>
        <div className="row footer-btn-date">
          <div
            class="col-6 "
            style={{
              textDecorationLine: "underline",
              color: "#3D4152",
              cursor: "pointer",
            }}
            onClick={async () => {
              if (startDate) {
                setStartDate("");
                setModifyDate(new Date())
                setSelectedStartTime("");
                setSelectedEndTime("");
              }
              setSelect(false);
            }}
          >
            Clear all
          </div>
          <div class="col-6 d-flex justify-content-end">
            <button
              type="submit"
              disabled={!startDate}
              class={`btn btn-primary`}
              onClick={() => {
                if (startDate) {
                  setModifyDate(startDate)
                  setSelect(false)
                };
              }}
            >
              Apply Date & Time
            </button>
          </div>
        </div>
      </div>
      <div className="header-close-date">
        <span>Select date & time</span>
        <i
          className="ri-close-line"
          onClick={() => {
            setSelect(false);
          }}
        />
      </div>
    </>
  );

  const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
    <>
      <div
        className={`btn-datepick ${startDate ? "btn-primary" : ""}`}
        onClick={() => {
          onClick();
          setSelect(!select);
        }}
        ref={ref}
      >
        {!startDate ? (
          <>
            <img src={DatepickerIcon} alt="img-datepick" />
            <span>{"Select Date & Time"}</span>
          </>
        ) : (
          <>
            {format(startDate, "MMM dd")}, {selectedStartTime} -{" "}
            {selectedEndTime}
          </>
        )}
      </div>
    </>
  ));
  return (
    <DatePicker
      selected={modifyDate}
      monthsShown={3}
      onChange={(date) => setStartDate(date)}
      showTimeInput
      open={select}
      minDate={new Date()}
      customTimeInput={<ExampleCustomTimeInput />}
      customInput={<ExampleCustomInput />}
    />
  );
}
