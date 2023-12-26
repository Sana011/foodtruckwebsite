import React from "react";
import { useRef } from "react";
import women from "../assets/images/about-01-free-img.jpg";
import Heading from "./heading";
import signimg from "../assets/images/signature-free-img.png";
const About = ({ aboutRef }) => {
  return (
    <>
      <div className="lg:ps-28 lg:pe-28  pt-40" ref={aboutRef}>
        <div className="row">
          <div className="col-lg-5 col-11 mx-auto relative ps-0 ms-0">
            <img src={women} alt="" className="img-fluid " />
            <div className="signimg relative">
              <img src={signimg} alt="" className="abs absolute" />
            </div>
          </div>
          <div className="col-lg-7 col-11 mx-auto text-white">
            <div className=" pt-32 lg:ps-20 lg:pe-20">
              <div className="menuSection uppercase text-lg-start relative  d-flex justify-center flex-col mx-auto">
                <h2 className="text-white">about</h2>
                <div className="relative spanLine1">
                  <span className="d-flex bg-white absolute"></span>
                </div>
                <p className="pt-4 uppercase  text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  et vero nostrum cumque animi expedita deserunt impedit omnis
                  consequatur dignissimos?
                </p>
              </div>
              <h6 className="font-sans1">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
