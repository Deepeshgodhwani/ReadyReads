import React from "react";
import img from "../images/gif.gif";

function Loading(props) {
  return (
    <div
      className={`flex h-[100vh] ${
        props.darkmode ? "bg-[rgb(39,39,39)]" : "bg-[rgb(234,234,234)]"
      } justify-center items-center`}
    >
      <img alt="" className="w-14" src={img}></img>
    </div>
  );
}

export default Loading;
