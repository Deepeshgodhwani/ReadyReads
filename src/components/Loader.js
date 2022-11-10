import React from "react";

import logo from "../images/newsCast logo.png";

const Loader = (props) => {
  return (
    <div
      className={`flex ${
        props.darkmode ? "bg-[rgb(39,39,39)]" : "bg-[rgb(234,234,234)]"
      }  flex flex-col justify-center items-center w-full h-[100vh] `}
    >
      <div className="flex flex-col space-y-2 mb-10 items-center ">
        <img className="w-20" alt="" src={logo}></img>
        <p
          className={`text-3xl ${
            props.darkmode ? "text-white" : "text-black"
          } font-bold`}
        >
          NewsCast
        </p>
      </div>
      {!props.loaded && (
        <div className="flex flex-col absolute bottom-7 items-center gap-y-6 px-10 py-10 ">
          <p className="font-semibold">
            Made with &nbsp;
            <i className=" text-[rgb(248,49,47)] fa-solid fa-heart"></i>{" "}
            &nbsp;by Deepesh Godwani
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/deepesh-godwani-4269531b0/"
              target="__blank"
            >
              <p className="bg-[rgb(8,99,190)] cursor-pointer font-bold px-2 py-1">
                {" "}
                <i className="fa-brands fa-linkedin"></i>&nbsp;linkedIn
              </p>
            </a>
            <a target="__blank" href="https://github.com/Deepeshgodwani">
              <p className="font-bold pt-1 bg-[rgb(255,0,0)] cursor-pointer pb-1 px-3">
                {" "}
                <i className="fa-brands fa-square-github"></i>&nbsp;Github
              </p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
