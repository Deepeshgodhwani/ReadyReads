import React from "react";
import Main from "./MAIN";
import Topstories from "./Topstories";
import BitcoinNews from "./NewsSection";
import NewsSlot from "./NewsSlot";
import NewsFrame from "./NewsFrame";
import MiscNews from "./MiscNews";

function Home(props) {
  document.title = "NewsCast";
  const { apiKey, darkmode, setloading } = props;

  return (
    <div
      className={`pt-20 ${
        darkmode ? "bg-[rgb(39,39,39)]" : "bg-[rgb(234,234,234)]"
      } ${darkmode ? "text-white" : "text-black"}`}
    >
      <div className="flex flex-row space-x-6 ">
        <div className="xl:w-[70.5%]">
          <Main
            setProgress={props.setProgress}
            setloading={setloading}
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
          apiKey={apiKey}
        />
      </div>
      <NewsSlot
        key="health"
        theme="light"
        darkmode={darkmode}
        category="health"
        apiKey={apiKey}
      />
      <NewsSlot
        key="bitcoin"
        darkmode={darkmode}
        category="bitcoin"
        theme="dark"
        apiKey={apiKey}
      />
      <NewsFrame
        key="food"
        darkmode={darkmode}
        category="food"
        apiKey={apiKey}
      />
      <BitcoinNews
        key="eduction"
        darkmode={darkmode}
        category="education"
        apiKey={apiKey}
      />
      <MiscNews
        key="miscellaneous"
        darkmode={darkmode}
        category="general"
        apiKey={apiKey}
      />
    </div>
  );
}

export default Home;
