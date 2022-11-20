import React, { useState, useEffect } from "react";

import img from "../images/news-default-img.jpg";

export default function Topstories(props) {
  const [articles, setarticles] = useState([]);
  const { apiKey, category, darkmode, loader } = props;

  const UpdateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pagesize=13&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();

    if (parsedData.articles) {
      setarticles(parsedData.articles.slice(1, 12));
    }
  };

  useEffect(() => {
    UpdateNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    
    {!loader&&<div
      className={`w-[26%] flex-col xl:h-[200vh] space-y-3  hidden xl:flex mr-6   rounded-lg pt-7 `}
    >
      <div
        className={` font-bold rounded-sm  ${
          darkmode ? "bg-[rgb(51,51,51)]" : "bg-[rgb(255,255,255)]"
        } -mb-3 text-lg pl-5 w-40 pb-1  ${
          darkmode ? "text-[rgb(212,212,212)]" : "text-[rgb(51,51,51)]"
        } `}
      >
        <p className="pt-1">Top Headlines</p>
      </div>
      {articles.map((element) => {
        return (
          <div
            key={element.url}
            className={`flex px-4 ${
              darkmode ? "bg-[rgb(51,51,51)]" : "bg-[rgb(255,255,255)]"
            } py-3 space-x-4  pr-3`}
          >
            <a href={element.url}>
              <img
                alt=""
                className="w-20 h-[4.5rem] rounded-lg"
                src={element.urlToImage == null ? img : element.urlToImage}
              />
            </a>
            <a className="w-[15rem]" href={element.url}>
              <p
                className={`${
                  darkmode ? "text-[rgb(212,212,212)]" : "text-[rgb(51,51,51)]"
                } pt-2 font-semibold text-sm`}
              >
                {element.title.slice(0, 72)}.
              </p>
            </a>
          </div>
        );
      })}
    </div>}

    </>
  );
}
