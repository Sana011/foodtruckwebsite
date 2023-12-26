import React, {useState,useRef}from 'react'
import logo from "../assets/images/logo-regular-free-img.png"
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const Navbar = ({ aboutRef, contactRef,homeRef, menuRef ,locationRef }) => {

  const [isOpen, setIsOpen] = useState(false);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      console.log("scrolling" + aboutRef.current);
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }  
  };


   const scrollToContact = () => {
     if (contactRef.current) {
       contactRef.current.scrollIntoView({ behavior: "smooth" });
     }
   };


      const scrollToHome = () => {
        if (homeRef.current) {
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };


        const scrollTomenu = () => {
          if (menuRef.current) {
          menuRef.current.scrollIntoView({ behavior: "smooth" });
          }
        };


          const scrollToLocation = () => {
            if (locationRef.current) {
              locationRef.current.scrollIntoView({ behavior: "smooth" });
            }
          };
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative">
      <div className="flex justify-center ">
        <img src={logo} className="pt-4" alt="" />
      </div>
      <nav>
        <div className="d-lg-none mt-4 mb-3 rounded-full  flex justify-center bg-white align-items-center w-[3rem] h-[3rem]  mx-auto">
          {isOpen ? (
            <FaXmark className="cursor-pointer" onClick={handleMenu} />
          ) : (
            <FaBars className="cursor-pointer" onClick={handleMenu} />
          )}
        </div>

        <ul
          class={`lg:flex lg:flex-row lg:justify-center absolute w-full   z-3 flex flex-col justify-center mt-3    p-0 navbarmobileView  ${
            isOpen ? "navbarmobileViewappear" : "navbarmobileViewhide"
          }`}
        >
          <li
            className=" p-3 active-tab     lg:border-0 border-slate-400 border-b"
            onClick={scrollToHome}
          >
            Home
          </li>
          <li
            className=" p-3 active-tab     lg:border-0 border-slate-400 border-b"
            onClick={scrollTomenu}
          >
            Menu
          </li>
          <li
            className=" p-3 active-tab     lg:border-0 border-slate-400 border-b"
            onClick={scrollToLocation}
          >
            Location & Schedule
          </li>
          <li
            className="p-3 active-tab     lg:border-0 border-slate-400 border-b"
            onClick={scrollToAbout}
          >
            about
          </li>
          <li
            className=" p-3 active-tab     lg:border-0 border-slate-400 border-b"
            onClick={scrollToContact}
          >
            contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar