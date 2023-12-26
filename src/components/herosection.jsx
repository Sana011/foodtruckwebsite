import React, { useRef } from "react";
import truck from "../assets/images/truck-img.png";
import sidecircle from "../assets/images/truck.png";
const Herosection = ({ homeRef }) => {
  return (
    <>
      <div className="container-fluid hero-sec p-0 lg:mt-20" ref={homeRef}>
        <div className="relative h-full   p-0">
          <div className="image-container">
            <img src={sidecircle} alt="" className="w-50" />
          </div>
          <div className="container z-2 relative">
            <div className="row flex justify-center text-lg-start text-center">
              <div className="col-lg-12 col-10 lg:mx-auto  justify-center">
                <h1 className="font-extrabold tracking-wider uppercase m-0  ">
                  FOOD TRUCK
                </h1>
                <h2 className="text-xl font-bold text-white ">Welcome</h2>
              </div>
            </div>
            <div className="row justify-center text-lg-start text-center">
              <div className="col-lg-5 col-10  relative text-lg-start text-center  ">
                <span className="d-flex bg-white absolute"></span>
                <h3 className="lg:pt-[100px] pt-[40px]  text-white">
                  WE HAVE THE BEST SED NON MAURIS VITAE ERAT CONSEQUAT AUCTOR EU
                  IN ELIT.
                </h3>
                <p className="text-white">
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin.
                </p>
              </div>
              <div className="col-lg-7 col-6 relative">
                <img src={truck} alt="" className="absolute truckimg " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
