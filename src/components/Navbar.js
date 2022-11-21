import React, { useState } from "react";
import "../public.css";

import sun from "../images/sun.png";
import moon from "../images/moon.png";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [veiwMenu, setveiwMenu] = useState(false);

  const [prevstate, setprevstate] = useState("home");
  const [prevstate2, setprevstate2] = useState("homepara");

  // console.log(Loading)
  const { darkmode, mode } = props;

  const toggleMenu = () => {
    let menuElem = document.getElementById("menu");
    let elem1 = document.getElementById("elem1");
    let elem2 = document.getElementById("elem2");
    if (!veiwMenu) {
      setveiwMenu(true);
      menuElem.style.display = "flex";
      elem2.style.display = "flex";
      elem1.style.display = "none";
    } else {
      setveiwMenu(false);
      menuElem.style.display = "none";
      elem1.style.display = "flex";
      elem2.style.display = "none";
    }
    window.onresize = function () {
      setveiwMenu(false);
      menuElem.style.display = "none";
      elem1.style.display = "flex";
      elem2.style.display = "none";
    };
  };

  const changeCursor = (event, value, value2) => {
    let homeEl = document.getElementById(prevstate);
    let homeE2 = document.getElementById(prevstate2);

    if (homeEl) {
      homeEl.style.display = "none";
    }

    if (homeE2) {
      homeE2.style.borderBottomWidth = "0px";
    }

    let element = document.getElementById(value);
    let element2 = document.getElementById(value2);

    if (element) {
      element.style.display = "flex";
    }

    if (element2) {
      element2.style.borderBottomWidth = "4px";
    }

    setprevstate(value);
    setprevstate2(value2);
  };

  return (
    <>
      {
        <div
          className={`flex  py-6 justify-between lg:justify-start fixed z-30  space-x-10 h-10 px-3 lg:pl-8 pr-4 x  items-center text-white  w-[100%] ${
            darkmode ? "bg-[rgb(45,85,209)]" : "bg-[rgb(39,94,254)]"
          } 
      font-bold`}
        >
          <div onClick={toggleMenu} className="text-2xl pb-1 lg:hidden">
            <i id="elem1" className="fa-solid fa-bars"></i>
            <i id="elem2" className=" hidden fa-solid fa-xmark"></i>
          </div>

          <div
            id="menu"
            onClick={toggleMenu}
            className={`menu top-12 ${
              darkmode ? "text-white" : "text-black"
            } border-b-2 hidden lg:hidden border-[rgb(138,138,138)] text-base -left-10  w-full justify-center z-50 absolute 
           capitalize flex-col ${
             darkmode ? "bg-[rgb(39,39,39)]" : "bg-[rgb(242,242,242)]"
           } `}
          >
            <Link to="/">
              {" "}
              <p
                onClick={(event) => changeCursor(event, "home", "homepara")}
                className={`border-b-2   ${
                  darkmode
                    ? "border-[rgb(53,57,57)]"
                    : "border-[rgb(230,230,230)]"
                }  px-4 py-4`}
              >
                Home
              </p>
            </Link>
            <Link to="/business">
              <p
                onClick={(event) =>
                  changeCursor(event, "business", "businesspara")
                }
                className={`border-b-2  ${
                  darkmode
                    ? "border-[rgb(53,57,57)]"
                    : "border-[rgb(230,230,230)]"
                }  px-4 py-4`}
              >
                Business
              </p>
            </Link>
            <Link to="/entertainment">
              <p
                onClick={(event) =>
                  changeCursor(event, "entertainment", "entertainpara")
                }
                className={`border-b-2  ${
                  darkmode
                    ? "border-[rgb(53,57,57)]"
                    : "border-[rgb(230,230,230)]"
                }  px-4 py-4`}
              >
                Entertainment
              </p>
            </Link>
            <Link to="/health">
              <p
                onClick={(event) => changeCursor(event, "health", "healthpara")}
                className={`border-b-2  ${
                  darkmode
                    ? "border-[rgb(53,57,57)]"
                    : "border-[rgb(230,230,230)]"
                }  px-4 py-4`}
              >
                Health
              </p>
            </Link>
            <Link to="/science">
              <p
                onClick={(event) =>
                  changeCursor(event, "science", "sciencepara")
                }
                className={`border-b-2  ${
                  darkmode
                    ? "border-[rgb(53,57,57)]"
                    : "border-[rgb(230,230,230)]"
                }  px-4 py-4`}
              >
                Science
              </p>
            </Link>
            <Link to="/sports">
              <p
                onClick={(event) => changeCursor(event, "sports", "sportspara")}
                className={`border-b-2  ${
                  darkmode
                    ? "border-[rgb(53,57,57)]"
                    : "border-[rgb(230,230,230)]"
                }  px-4 py-4`}
              >
                Sports
              </p>
            </Link>
            <Link to="/technology">
              <p
                onClick={(event) =>
                  changeCursor(event, "technology", "techpara")
                }
                className="px-4 py-4"
              >
                {" "}
                Technology
              </p>
            </Link>
          </div>

          <div className="flex  flex-col">
            <Link to="/">
              {" "}
              <p className="text-3xl font-cursive font-bold pb-2 lg:pb-1">
                NewsCast
              </p>
            </Link>
          </div>
          <div
            className={`absolute overflow-y-hidden font-bold -bottom-9 px-4 lg:bottom-auto lg:left-auto -left-10  lg:py-0  lg:px-0   flex lg:w-auto ${
              darkmode ? "bg-[rgb(39,39,39)]" : "bg-white"
            }
     text-[rgb(128,128,128)] lg:text-white
       lg:bg-transparent   overflow-x-scroll scrollbar-hide w-full lg:static text-sm lg:flex lg:font-semibold space-x-4 lg:space-x-6 `}
          >
            <Link to="/">
              <p
                id="homepara"
                onClick={(event) => changeCursor(event, "home", "homepara")}
                className="lg:pt-3 py-2  border-b-4 lg:border-none rounded-sm  border-[rgb(39,94,254)]"
              >
                Home
              </p>
              <i
                id="home"
                className={`absolute text-opacity-0 lg:text-opacity-100 -bottom-3 mx-4 ${
                  darkmode ? "text-[rgb(39,39,39)]" : "text-[rgb(234,234,234)]"
                } text-lg fa-sharp fa-solid fa-caret-up`}
              ></i>
            </Link>

            <Link to="/business">
              <p
                id="businesspara"
                onClick={(event) =>
                  changeCursor(event, "business", "businesspara")
                }
                className=" lg:pt-3 lg:px-0 px-2 py-2  lg:border-none  rounded-sm  border-[rgb(39,94,254)]"
              >
                Business
              </p>
              <i
                id="business"
                className={`hidden text-opacity-0 lg:text-opacity-100 absolute -bottom-3 mx-5 ${
                  darkmode ? "text-[rgb(39,39,39)]" : "text-[rgb(234,234,234)]"
                } text-lg fa-sharp fa-solid fa-caret-up`}
              ></i>
            </Link>
            <Link to="/entertainment">
              <p
                id="entertainpara"
                onClick={(event) =>
                  changeCursor(event, "entertainment", "entertainpara")
                }
                className="lg:px-0 lg:pt-3 px-2 py-2  rounded-sm lg:border-none   border-[rgb(39,94,254)]"
              >
                Entertainment
              </p>
              <i
                id="entertainment"
                className={`hidden text-opacity-0 lg:text-opacity-100 absolute -bottom-3 mx-10 ${
                  darkmode ? "text-[rgb(39,39,39)]" : "text-[rgb(234,234,234)]"
                } text-lg fa-sharp fa-solid fa-caret-up`}
              ></i>
            </Link>
            <Link to="/health">
              <p
                id="healthpara"
                onClick={(event) => changeCursor(event, "health", "healthpara")}
                className="lg:px-0 lg:pt-3 px-2 py-2  lg:border-none   rounded-sm  border-[rgb(39,94,254)]"
              >
                Health
              </p>
              <i
                id="health"
                className={`hidden absolute text-opacity-0 lg:text-opacity-100 -bottom-3 mx-4 ${
                  darkmode ? "text-[rgb(39,39,39)]" : "text-[rgb(234,234,234)]"
                } text-lg fa-sharp fa-solid fa-caret-up`}
              ></i>
            </Link>
            <Link to="/science">
              <p
                id="sciencepara"
                onClick={(event) =>
                  changeCursor(event, "science", "sciencepara")
                }
                className="lg:px-0 lg:pt-3 px-2 py-2 lg:border-none    rounded-sm  border-[rgb(39,94,254)]"
              >
                Science
              </p>
              <i
                id="science"
                className={`hidden absolute text-opacity-0 lg:text-opacity-100 -bottom-3 mx-5 ${
                  darkmode ? "text-[rgb(39,39,39)]" : "text-[rgb(234,234,234)]"
                } text-lg fa-sharp fa-solid fa-caret-up`}
              ></i>
            </Link>
            <Link to="/sports">
              <p
                id="sportspara"
                onClick={(event) => changeCursor(event, "sports", "sportspara")}
                className="lg:px-0 lg:pt-3 px-2 py-2 lg:border-none    rounded-sm  border-[rgb(39,94,254)]"
              >
                Sports
              </p>
              <i
                id="sports"
                className={`hidden absolute text-opacity-0 lg:text-opacity-100 -bottom-3 mx-4 ${
                  darkmode ? "text-[rgb(39,39,39)]" : "text-[rgb(234,234,234)]"
                } text-lg fa-sharp fa-solid fa-caret-up`}
              ></i>
            </Link>
            <Link to="/technology">
              <p
                id="techpara"
                onClick={(event) =>
                  changeCursor(event, "technology", "techpara")
                }
                className="lg:px-0 lg:pt-3 px-2 py-2 lg:border-none    rounded-sm  border-[rgb(39,94,254)]"
              >
                Technology
              </p>
              <i
                id="technology"
                className={`hidden text-opacity-0 lg:text-opacity-100 absolute -bottom-3 mx-7 ${
                  darkmode ? "text-[rgb(39,39,39)]" : "text-[rgb(234,234,234)]"
                } text-lg fa-sharp fa-solid fa-caret-up`}
              ></i>
            </Link>
          </div>
          <div
            onClick={mode}
            className="text-white mb-1 lg:mb-0 lg:absolute  lg:right-14 lg:border-none  bg-[rgb(67,115,254)] rounded-md py-2 px-2  "
          >
            <img id="sun" className="w-4 hidden" alt="" src={sun}></img>
            <img id="moon" className="w-4" alt="" src={moon}></img>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;
