import React, { useState } from "react";

import "../public.css";
import Main from "./MAIN";
import MiscNews from "./MiscNews";
import Topstories from "./Topstories";
import Loading from "./Loading";

const NewsComponent = (props) => {
  let element = document.getElementById("root");
  const { category, apiKey, darkmode, setcloseApp } = props;
  const [loader, setloader] = useState(false);

  const setLoading = (val) => {
    if (val) {
      element.style.height = "100vh";
      element.style.overflow = "hidden";
    } else {
      element.style.height = "auto";
      element.style.overflow = "none";
    }
    setloader(val);
  };

  return (
    <>
      {loader && <Loading darkmode={darkmode} />}
      <div
        className={`flex flex-row space-x-6 pt-20 ${
          darkmode ? "bg-[rgb(39,39,39)]" : "bg-[rgb(234,234,234)]"
        } 
     ${darkmode ? "text-white" : "text-black"}`}
      >
        <div className="xl:w-[70.5%]">
          <Main
            setProgress={props.setProgress}
            setloading={setLoading}
            darkmode={darkmode}
            loader={loader}
            key={category}
            category={category}
            apiKey={apiKey}
            setcloseApp={setcloseApp}
          />
        </div>
        <Topstories
          key="topstories"
          category={category}
          darkmode={darkmode}
          apiKey={apiKey}
        />
      </div>
      <MiscNews
        key="miscellaneous"
        category={category}
        darkmode={darkmode}
        apiKey={apiKey}
        setcloseApp={setcloseApp}
      />
    </>
  );
};

export default NewsComponent;
