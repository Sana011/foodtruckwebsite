import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="pt-20">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-6 col-8 ">
              <div className="mx-auto flex flex-col justify-center  text-center text-white">
                <h3 className="uppercase pb-4">It's trucking goods</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <div className="socialLinks flex mx-auto justify-center pb-10">
                  <div className="bg-purple1 p-3 m-2">
                    <FaFacebookSquare className=" text-white" />
                  </div>
                  <div className="bg-purple1 p-3 m-2">
                    <FaTwitter className=" text-white" />
                  </div>
                  <div className="bg-purple1 p-3 m-2">
                    <FaYoutube className=" text-white" />
                  </div>
                </div>

                <p>Copyright © 2023 Food Truck | Powered by Food Truck</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
