import React from 'react'
import menuimg1 from "../assets/images/menu-01-free-img.jpg"
import Singlemenucard from './singlemenucard';
import Heading from './heading';
import LineContainer from './LineContainer';
import sidecircle from "../assets/images/truck.png";
import img2 from "../assets/images/menu-02-free-img.jpg";
import img3 from "../assets/images/menu-03-free-img.jpg";
import img4 from "../assets/images/menu-04-free-img.jpg";
import img5 from "../assets/images/menu-04-free-img.jpg";
import img6 from "../assets/images/menu-06-free-img.jpg";
import img7 from "../assets/images/menu-07-free-img.jpg";
import img8 from "../assets/images/menu-08-free-img.jpg";
import img9 from "../assets/images/menu-09-free-img.jpg";
import img10 from "../assets/images/menu-10-free-img.jpg";
import img11 from "../assets/images/menu-11-free-img.jpg";
import img12 from "../assets/images/menu-12-free-img.jpg";
import img13 from "../assets/images/menu-13-free-img.jpg";
import img14 from "../assets/images/menu-14-free-img.jpg";
import img15 from "../assets/images/menu-15-free-img.jpg";
import img16 from "../assets/images/menu-16-free-img.jpg";
const LongMenu = () => {
  return (
    <>
      <div className="container relative">
        <div className="row pt-32 z-1">
          <div className="col-6 col-11 mx-auto menuSection relative text-center">
            <h2 className="text-white">OUR MENU</h2>
            <div className="underline-container">
              <span className="underline"></span>
            </div>

            <p className=" text-white pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="row pt-20  mx-auto justify-center z-1">
          <div className="col-lg-6 col-11 mx-auto justify-center hovercolor border z-1 border-slate-500 relative">
            <div className="text-white ps-20 pe-20 pt-20 pb-10">
              <LineContainer titel="ICE cream" />
              <div className="d-flex flex-col  ">
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={menuimg1}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img2}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img3}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img4}
                  shortdes="A short description"
                  price="$ 2.45"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 hovercolor mx-auto justify-center col-11 border z-1 relative">
            <div className=" text-white ps-20 pe-20 pt-20 pb-10">
              <LineContainer titel="Shakes" />
              <div className="d-flex flex-col  ">
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img7}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img8}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img9}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img10}
                  shortdes="A short description"
                  price="$ 2.45"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="image-container1 relative z-0 ">
          <img src={sidecircle} alt="" className="w-75" />
        </div>
        <div className="row mx-auto justify-center  z-1">
          <div className="col-lg-6 hovercolor col-11 mx-auto justify-center border border-slate-500 z-1 relative">
            <div className=" text-white ps-20 pe-20 pt-20 pb-10">
              <div className="line-container">
                <span className="horizontal-line"></span>
              </div>
              <LineContainer titel="coolers" />
              <div className="d-flex flex-col  ">
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img5}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img6}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img15}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img16}
                  shortdes="A short description"
                  price="$ 2.45"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 hovercolor col-11 mx-auto justify-center border  relative z-1 ">
            <div className=" text-white ps-20 pe-20 pt-20 pb-10">
              <LineContainer titel="gelato" />
              <div className="d-flex flex-col  ">
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img5}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img6}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img11}
                  shortdes="A short description"
                  price="$ 2.45"
                />
                <Singlemenucard
                  headings="Ice Cream 01"
                  menuimg1={img12}
                  shortdes="A short description"
                  price="$ 2.45"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto justify-center pt-36 z-1 pb-16">
          <div className="col-lg-6  mx-auto justify-center col-11 relative">
            <div className="lg:ps-20 lg:pe-20 text-white">
              {/* <Heading titelmenu="LOCATION & SCHEDULE" /> */}
              <div className="menuSection uppercase text-lg-start  d-flex justify-center flex-col mx-auto">
                <h2 className="text-white">LOCATION & SCHEDULE</h2>
                <div className="relative spanLine2">
                  <span className="d-flex bg-white absolute"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6  mx-auto justify-center col-11 relative">
            <div className=" lg:ps-20 lg:pe-20 text-white">
              <h3>
                SED NON MAURIS VITAE ERAT CONSEQUAT AUCTOR EU IN ELIT. CLASS
                APTENT TACITI.
              </h3>
              <h5 className="">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LongMenu