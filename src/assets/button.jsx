import React ,{useState,useEffect}from 'react'
import { useTheme } from "../components/ThemeContext";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Buttonfixed = ({ onButtonClick }) => {
    const { changeThemeColor } = useTheme();
  const [isCustomizeVisible, setIsCustomizeVisible] = useState(false);
  const [isButtonTransition, setisButtonTransition] = useState(false);
  useEffect(() => {
    // Set a timeout to delay the appearance of the button
    const timeout = setTimeout(() => {
      setisButtonTransition(true);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);
  const custmizeTheme = () => {
    setIsCustomizeVisible(!isCustomizeVisible);
  };

  const closeCustmizeplate = () => {
    setIsCustomizeVisible(!isCustomizeVisible);
  };
   const handelDefaultColor = () => {
     alert("fghj")
     changeThemeColor("#1e5799");
     if (onButtonClick) {
       onButtonClick();
     }
   };

  return (
    <>
      <div
        className={`fixed-button-container  ${
          isButtonTransition ? "visible" : ""
        }`}
        onClick={custmizeTheme}
      >
        <button className="flex justify-center items-center p-2  fixed-button">
          <IoColorPaletteSharp className="icon  " />
          <span className="text ps-2">Customize</span>
        </button>
      </div>

      {/* Overlay div */}
      {isCustomizeVisible && (
        <div className=" customplateMenu visible">
          <div className="customize-div">
            <div className="flex w-full  bg-white shadows">
              <div className="flex ps-4 pe-4 pt-3 pb-3  w-100 justify-between items-center">
                <div>
                  <p className="m-0">Food truck</p>
                </div>
                <div className="p-2 border">
                  <FaXmark onClick={closeCustmizeplate} />
                </div>
              </div>
            </div>
            <div className="p-4">
              <p>
                Use the template as-is or try different colors and fonts from
                the options below.
              </p>
              <div className="flex w-full  bg-white ">
                <div className="flex mb-3 w-100 justify-between items-center">
                  <div>
                    <p className="m-0">Try other colors</p>
                  </div>
                  <div className="">
                    <button>default</button>
                  </div>
                </div>
              </div>
              {/* defult color plates */}
              <div className="flex w-full p-2  bg-white border border-slate-400">
                <div className="flex  w-100 justify-between items-center">
                  <div>
                    <button>Defult color</button>
                  </div>
                  <div className="flex" onClick={handelDefaultColor}>
                    <div class="color-circle color-red"></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                </div>
              </div>
              {/* other color plates  */}
              <div className="flex w-full  mt-3 mb-2 bg-white">
                <div className="flex  w-100 justify-between items-center">
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red"></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red "></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                </div>
              </div>
              {/* other plates */}
              <div className="flex w-full  mt-3 mb-2 bg-white">
                <div className="flex  w-100 justify-between items-center">
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red"></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green1"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red "></div>
                    <div class="color-circle color-blue11"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                </div>
              </div>
              {/* plate 3 */}
              <div className="flex w-full  mt-3 mb-2 bg-white">
                <div className="flex  w-100 justify-between items-center">
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red"></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green1"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red "></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                </div>
              </div>
              {/* plate 4 */}
              <div className="flex w-full  mt-3 mb-2 bg-white">
                <div className="flex  w-100 justify-between items-center">
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red"></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red "></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                </div>
              </div>
              {/* plate5 */}
              <div className="flex w-full  mt-3 mb-2 bg-white">
                <div className="flex  w-100 justify-between items-center">
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red"></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow1"></div>
                    <div class="color-circle color-purple"></div>
                  </div>
                  <div className="flex border border-slate-500 p-2">
                    <div class="color-circle color-red "></div>
                    <div class="color-circle color-blue"></div>
                    <div class="color-circle color-green"></div>
                    <div class="color-circle color-yellow"></div>
                    <div class="color-circle color-purple1"></div>
                  </div>
                </div>
              </div>
              <div className="border-b border-slate-400 mt-5 mb-3"> </div>
              <div className="flex w-full  bg-white ">
                <div className="flex  w-100 justify-between items-center">
                  <div>
                    <p className="m-0">Try other Fonts</p>
                  </div>
                  <div className="">
                    <button>default</button>
                  </div>
                </div>
              </div>

              <div className="flex  w-100 justify-center items-center border border-slate-500 mt-3 mb-3 p-2">
                <p className="m-0">Default Colors</p> &nbsp;/&nbsp;{" "}
                <span>Open Sans Serif</span>
              </div>

              <div className="flex justify-between">
                <div className="font-square flex">
                  <a className="my-anchor-element text-dark">Aa</a>
                  <Tooltip anchorSelect=".my-anchor-element" place="top">
                    playfair display / Source sans pro
                  </Tooltip>
                </div>
                <div className="font-square flex ">
                  <a className="my-anchor-element1 text-dark">Aa</a>
                  <Tooltip anchorSelect=".my-anchor-element1" place="top">
                    Poppins Lato
                  </Tooltip>
                </div>
                <div className="font-square flex">
                  <a className="my-anchor-element2 text-dark">Aa</a>
                  <Tooltip anchorSelect=".my-anchor-element2" place="top">
                    Monserat Lato
                  </Tooltip>
                </div>
                <div className="font-square flex">
                  <a className="my-anchor-element3 text-dark">Aa</a>
                  <Tooltip anchorSelect=".my-anchor-element3" place="bottom">
                    Rubik / Karla
                  </Tooltip>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="font-square flex">
                  <a className="my-anchor-element4 text-dark">Aa</a>
                  <Tooltip anchorSelect=".my-anchor-element4" place="top">
                    Roboto Condence
                  </Tooltip>
                </div>
                <div className="font-square flex">
                  <a className="my-anchor-element5 text-dark">Aa</a>
                  <Tooltip anchorSelect=".my-anchor-element5" place="top">
                    Merriweather Inter
                  </Tooltip>
                </div>
                <div className="font-square flex">
                  <a className="my-anchor-element6 text-dark">Aa</a>
                  <Tooltip anchorSelect=".my-anchor-element6" place="top">
                    Volkam
                  </Tooltip>
                </div>
                <div className="font-square flex">
                  <a className="my-anchor-element7 text-dark">Aa</a>
                  <Tooltip anchorSelect=".my-anchor-element7" place="bottom">
                    Open Sans
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Buttonfixed