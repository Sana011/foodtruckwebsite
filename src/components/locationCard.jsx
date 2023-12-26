import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
const LocationCard = (props) => {
  return (
    <>
      <div className="col-lg-3 col-11  mx-auto justify-center p-0   text-white ">
        <div className=" m-1 border-t-4  border-white">
          <p className="pt-3">{props.date}</p>
          <h3>{props.titel}</h3>
          <div className="relative spansLine">
            <span className="d-flex bg-slate-200 absolute "></span>
          </div>
          <div className="flex flex-col text-white pt-4">
            <div className="flex justify-start align-items-center">
              <FaMapMarkerAlt />
              <p className="ps-2 m-0">20 Cooper Square, NY 10003 </p>
            </div>
            <div className="flex justify-start align-items-center pb-5 ">
              <FaRegClock />
              <p className="ps-2 m-0">09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationCard