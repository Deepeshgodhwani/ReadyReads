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

   // to formate into hours //

   const formatDate= (date)=>{
    if(date){
      let day=date.slice(8,10);
      let year=date.slice(0,4);
      let month=date.slice(5,7);
      month=parseInt(month);
      day=parseInt(day);
      let hour=date.slice(11,13);
      hour=parseInt(hour);
      let currDate=(new Date());
      let currDay=currDate.getDate();
      let currhour=currDate.getHours();
      if(day===currDay){
        return currhour-hour+" hours ago";
      }else{
        let monthMap=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
         return monthMap[month-1]+" "+day+", "+year;
      }
      
    }
     
  }

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
            <div className="flex group space-x-6">
              <div className=" xl:h-[24rem] md:w-[50%] xl:w-[20rem]  ">
                <a className="relative" href={frontArticle.url}>
                  <img
                    alt=""
                    className="w-[100%]  md:h-80 md:w-[100%] lg:h-96 xl:h-60 xl:w-[20rem] mb-4 rounded-lg h-80"
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
                    <p className={`text-xs px-1 absolute pb-2 hidden group-hover:flex font-bold  ${
                  
                  darkmode
                    ? "text-[rgb(146,145,146)]"
                    : "text-[rgb(162,164,162)]"
                
              } flex pt-2`}>
                    {frontArticle.author == null ? "NewsCast" : frontArticle.author}
                <p className="text-xs mx-2 bottom-0  text-[rgb(81,81,81)]">|</p> 
                      {formatDate(frontArticle.publishedAt)}</p>
                  </p>
                </a>
              </div>
              <div className="hidden flex-col gap-y-4 py-4  w-[50%] md:flex  xl:hidden">
                {asideArticles.map((element) => {
                  return (
                    <div
                      key={element.url}
                      className={`flex relative group pb-4 md:w-[100%]  border-b-1  ${
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
                          <p className={`text-xs px-1 font-bold  ${
                  
                  darkmode
                    ? "text-[rgb(146,145,146)]"
                    : "text-[rgb(162,164,162)]"
                
              } hidden group-hover:flex absolute py-2 bottom-3 pt-2`}>
                    {element.author == null ? "NewsCast" : element.author}
                <p className="text-xs mx-2  text-[rgb(81,81,81)]">|</p> 
                      {formatDate(element.publishedAt)}</p>
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
                  className={`flex mx-2 group relative pb-4 xl:pb-0 md:w-[47.5%] xl:w-[31%] border-b-1  ${
                    darkmode
                      ? "border-[rgb(53,57,57)]"
                      : "border-[rgb(210,210,210)]"
                  } gap-x-4`}
                >
                  <a className="relative  w-24 xl:w-20" href={element.url}>
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
                    <a className="" href={element.url}>
                      <p className="pb-4 sm:pb-0 ">
                        {element.title == null
                          ? element.title
                          : element.title.slice(0,70)}
                          ..
                      </p>
                      <p className={`text-xs px-1 font-bold  ${
                  
                  darkmode
                    ? "text-[rgb(146,145,146)]"
                    : "text-[rgb(162,164,162)]"
                
              } group-hover:flex absolute hidden  py-2 sm:bottom-5  md:bottom-0 pt-2`}>
                    {element.author == null ? "NewsCast" : element.author}
                <p className="text-xs mx-2  text-[rgb(81,81,81)]">|</p> 
                      {formatDate(element.publishedAt)}</p>
                  
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
