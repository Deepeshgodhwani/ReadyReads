import React, { useState } from "react";
import Main from "./MAIN";
import Topstories from "./Topstories";
import BitcoinNews from "./NewsSection";
import NewsSlot from "./NewsSlot";
import NewsFrame from "./NewsFrame";
import MiscNews from "./MiscNews";
import Loading from "./Loading";

function Home(props) {
  let element = document.getElementById("root");
  document.title = "NewsCast";
  const { apiKey, darkmode, setcloseApp } = props;
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
        className={`pt-20 ${
          darkmode ? "bg-[rgb(39,39,39)]" : "bg-[rgb(234,234,234)]"
        } ${darkmode ? "text-white" : "text-black"}`}
      >
        <div className="flex flex-row space-x-6 ">
          <div className="xl:w-[70.5%]">
            <Main
              setProgress={props.setProgress}
              setloading={setLoading}
              loader={loader}
              setcloseApp={setcloseApp}
              darkmode={darkmode}
              key="general"
              category="general"
              apiKey={apiKey}
            />
          </div>
          <Topstories
            key="topstories"
            darkmode={darkmode}
            category="general"
            loader={loader}
            apiKey={apiKey}
          />
        </div>
        <NewsSlot
          key="health"
          theme="light"
          darkmode={darkmode}
          loader={loader}
          category="health"
          apiKey={apiKey}
        />
        <NewsSlot
          key="bitcoin"
          darkmode={darkmode}
          loader={loader}
          category="bitcoin"
          theme="dark"
          apiKey={apiKey}
        />
        <NewsFrame
          key="food"
          darkmode={darkmode}
          loader={loader}
          category="food"
          apiKey={apiKey}
        />
        <BitcoinNews
          key="eduction"
          darkmode={darkmode}
          category="education"
          loader={loader}
          apiKey={apiKey}
        />
        <MiscNews
          key="miscellaneous"
          darkmode={darkmode}
          loader={loader}
          category="general"
          apiKey={apiKey}
          setloading={setLoading}
          setcloseApp={setcloseApp}
        />
      </div>
    </>
  );
}

export default Home;
