import React, { useRef } from "react";
import Navbar from "../components/navbar";
import Herosection from "../components/herosection";
import Menu from "../components/menu";
import LongMenu from "../components/longMenu";
import Locations from "../components/locations";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import FrameMap from "../components/FrameMap";
import { ThemeProvider } from "../components/ThemeContext.js";
import Buttonfixed from "../assets/button";

const Homepage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const locationRef = useRef(null);
  const menuRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <>
      <ThemeProvider>
        <div className="container-fluid p-0 z-0 h-auto  ">
          <Navbar
            aboutRef={aboutRef}
            contactRef={contactRef}
            locationRef={locationRef}
            menuRef={menuRef}
            homeRef={homeRef}
          />
          <Buttonfixed />
          <Herosection homeRef={homeRef} />
          <Menu menuRef={menuRef} />
          <LongMenu />
          {/* <Map/> */}
          <FrameMap locationRef={locationRef} />
          <Locations />

          <About aboutRef={aboutRef} />
          <Contact contactRef={contactRef} />
        </div>

        <div className="container-fliud bg-purple p-0 relative z-1">
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
