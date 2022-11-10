import React, { useState, useEffect } from "react";

import img from "../images/news-default-img.jpg";

// import {Link} from "react-router-dom";

function NewsSection(props) {
  const { apiKey, category, darkmode } = props;
  const [articles, setarticles] = useState([]);
  const [frontArticle, setfrontArticle] = useState({});
  const [asideArticles, setasideArticles] = useState([]);

  const UpdateNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&pagesize=14&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData.articles) {
      setfrontArticle(parsedData.articles.shift());
      setasideArticles(parsedData.articles.slice(1, 4));
      setarticles(parsedData.articles.slice(4, 13));
    }
  };

  useEffect(() => {
    UpdateNews();
    // eslint-disable-next-line
  }, []);

  const capitalize = (string) => {
    return string.charAt().toUpperCase() + string.slice(1);
  };

  return (
    <>
      {
        <div
          className={`py-10 md:flex-row flex-wrap xl:flex-nowrap  flex-col  px-4 flex ${
            darkmode ? "bg-[rgb(39,39,39)]" : "bg-[rgb(234,234,234)]"
          } gap-x-6 gap-y-6  rounded-sm`}
        >
          <div className="flex flex-col space-y-4">
            <div className=" bg-gradient-to-r px-4 text-white rounded-sm w-28 font-semibold text-lg from-[rgb(45,82,198)] to-[rgb(89,121,218)]">
              <p>{capitalize(category)}</p>
            </div>
            <div className="flex space-x-6">
              <div className=" md:w-[50%] xl:w-[20rem]  ">
                <a className="relative" href={frontArticle.url}>
                  <img
                    alt=""
                    className="w-[100%]  md:h-80 md:w-[100%] lg:h-96 xl:h-72 xl:w-[20rem] mb-4 rounded-lg h-80"
                    src={
                      frontArticle.urlToImage == null
                        ? img
                        : frontArticle.urlToImage
                    }
                  ></img>
                </a>
                <a
                  href={frontArticle.url}
                  className=" text-xl  xl:text-2xl  font-bold"
                >
                  <p
                    className={`${
                      darkmode
                        ? "text-[rgb(212,212,201)]"
                        : "text-[rgb(51,51,51)]"
                    } `}
                  >
                    {frontArticle.title}
                  </p>
                </a>
              </div>
              <div className="hidden flex-col gap-y-4 py-4  w-[50%] md:flex  xl:hidden">
                {asideArticles.map((element) => {
                  return (
                    <div
                      key={element.url}
                      className={`flex  pb-4 md:w-[100%]  border-b-1  ${
                        darkmode
                          ? "border-[rgb(53,57,57)]"
                          : "border-[rgb(210,210,210)]"
                      } gap-x-4`}
                    >
                      <a className="relative w-24" href={element.url}>
                        <img
                          alt=""
                          className="w-24 rounded-lg  h-[5rem]"
                          src={
                            element.urlToImage == null
                              ? img
                              : element.urlToImage
                          }
                        ></img>
                      </a>
                      <div
                        className={`w-[80%] xl:w-48  ${
                          darkmode
                            ? "text-[rgb(212,212,212)]"
                            : "text-[rgb(51,51,51)]"
                        } font-semibold `}
                      >
                        <a href={element.url}>
                          <p className=" ">
                            {element.title == null
                              ? element.title
                              : element.title.slice(0, 78)}
                          </p>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className={`flex flex-wrap  gap-y-4 xl:mt-3  ${
              darkmode ? "border-[rgb(53,57,57)]" : "border-[rgb(236,236,236)]"
            } border-t-1 md:border-t-0 xl:py-8 py-4`}
          >
            {articles.map((element) => {
              return (
                <div
                  key={element.url}
                  className={`flex mx-2 pb-4 xl:pb-0 md:w-[47.5%] xl:w-[31%] border-b-1  ${
                    darkmode
                      ? "border-[rgb(53,57,57)]"
                      : "border-[rgb(210,210,210)]"
                  } gap-x-4`}
                >
                  <a className="relative w-24 xl:w-20" href={element.url}>
                    <img
                      alt=""
                      className="w-24 xl:w-20 rounded-lg md:h-[5rem] h-[5.5rem]"
                      src={
                        element.urlToImage == null ? img : element.urlToImage
                      }
                    ></img>
                  </a>
                  <div
                    className={`w-[80%] xl:w-60   ${
                      darkmode
                        ? "text-[rgb(212,212,212)]"
                        : "text-[rgb(51,51,51)]"
                    } font-semibold `}
                  >
                    <a href={element.url}>
                      <p className=" ">
                        {element.title == null
                          ? element.title
                          : element.title.slice(0, 78)}
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    </>
  );
}

export default NewsSection;
