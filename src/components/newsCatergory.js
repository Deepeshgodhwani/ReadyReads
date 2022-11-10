import React from "react";

import "../public.css";
import Main from "./MAIN";
import MiscNews from "./MiscNews";
import Topstories from "./Topstories";

const NewsComponent = (props) => {
  const { category, apiKey, darkmode, setloading } = props;

  return (
    <>
      <div
        className={`flex flex-row space-x-6 pt-20 ${
          darkmode ? "bg-[rgb(39,39,39)]" : "bg-[rgb(234,234,234)]"
        } 
     ${darkmode ? "text-white" : "text-black"}`}
      >
        <div className="xl:w-[70.5%]">
          <Main
            setProgress={props.setProgress}
            setloading={setloading}
            darkmode={darkmode}
            key={category}
            category={category}
            apiKey={apiKey}
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
      />
    </>
  );
};

export default NewsComponent;
