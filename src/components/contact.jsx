import React, { useRef } from "react";
import Heading from "./heading";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import CustomShape from "./CustomShape";
const Contact = ({ contactRef }) => {
  return (
    <>
      <div
        className="container-fluid relative  lg-pb-56 pb-20 p-0 "
        ref={contactRef}
      >
        <div className="container lg-pt-60 pt-28">
          <div className=" border-b-2 border-white-400 pt-3 pb-3 mb-4"></div>
          <div className="row mx-auto">
            <div className="col-lg-6 col-12 ">
              <div className="lg:p-12">
                <Heading titelmenu="contact" />
                <h6 className="font-sans1 text-white">
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor.
                </h6>
                <div className="flex flex-col text-white pt-4">
                  <div className="flex  justify-start align-items-center ">
                    <div className=" p-3 border-white border rounded-full text-white">
                      <FaPhoneAlt className="" />
                    </div>
                    <div className="ps-3">
                      <p className=" m-0">Phone </p>
                      <p className="font-sans1">929-242-6868</p>
                    </div>
                  </div>
                  <div className="flex justify-start align-items-center pb-5 pt-3">
                    <div className=" p-3 border-white border rounded-full text-white">
                      <FaRegEnvelope />
                    </div>
                    <div className="ps-3">
                      <p className=" m-0"> Email</p>
                      <p className="font-sans1">contact@info.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-11 mx-auto">
              <div className="lg:p-12">
                <form>
                  <div className="row mb-3">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control p-3"
                        id="firstName"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control p-3"
                        id="lastName"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control p-3"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Address"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      title="Enter a valid email address"
                    />
                  </div>
                  <div className=" mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      id="floatingTextarea2"
                      style={{ height: "150px" }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="ps-5 pe-5 rounded-full pt-2 pb-2  text-white color1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomShape />
    </>
  );
};

export default Contact;
