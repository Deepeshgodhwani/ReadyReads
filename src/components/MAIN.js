import React, { useState, useEffect } from "react";

import img from "../images/news-default-img.jpg";

function Main(props) {
  const { apiKey, category, loader, darkmode, setloading } = props;
  const [articles, setarticles] = useState([]);
  const [frontArticle, setfrontArticle] = useState({});
  const [TrendingArticle, setTrendingArticle] = useState([]);

  const { setProgress } = props;
  const UpdateNews = async () => {
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pagesize=23&page=1`;
    setloading(true);
    let data = await fetch(url);
    setProgress(40);
    let parsedData = await data.json();
    setProgress(70);

    if (parsedData.articles) {
      setfrontArticle(parsedData.articles.shift());
      setarticles(parsedData.articles.slice(12, 18));
      setTrendingArticle(parsedData.articles.slice(19, 22));
    }
    if(articles){
      setloading(false);
    }
    setProgress(100);
  };

  useEffect(() => {
    UpdateNews();
    // eslint-disable-next-line
  }, []);


  
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
         return monthMap[month-1]+day+","+year;
      }
      
    }
     
  }

  return (
    <>
      {!loader && (
        <div className=" flex  xl:mx-6 rounded-lg py-10 lg:py-6 flex-col">
          <div
            className={`xl:space-x-4 flex-col xl:flex-row xl:w-[97%]  ${
              darkmode ? "bg-[rgb(51,51,51)]" : "bg-[rgb(255,255,255)]"
            } xl:rounded-lg  flex `}
          >
            <a href={frontArticle.url}>
              <img
                alt=""
                className="w-[100%] h-60 sm:h-80 md:h-[35rem] lg:h-[40rem] xl:w-[32rem] xl:h-[25rem]  xl:rounded-l-lg "
                src={
                  frontArticle.urlToImage == null
                    ? img
                    : frontArticle.urlToImage
                }
              />
            </a>
            <a
              href={frontArticle.url}
              className="px-4 pb-3 xl:pb-0 relative xl:w-[23rem] "
            >
              <p
                className={` pb-6 xl:pt-10 py-4 xl:text-lg text-lg ${
                  darkmode ? "text-[rgb(212,212,212)]" : "text-[rgb(51,51,51)]"
                } font-bold`}
              >
                {frontArticle.title}
              </p>
              <p
                className={` pb-3 darkmode?"text-[rgb(212,207,207)]":"text-[rgb(57,51,51)]"`}
              >
                {frontArticle.description}
              </p>
              <p
                className={` py-2 xl:hidden pb-3 darkmode?"text-[rgb(212,207,207)]":"text-[rgb(57,51,51)]"`}
              >
                {frontArticle.content == null
                  ? frontArticle.content
                  : frontArticle.content.slice(0, 80)}
                .
              </p>
              <p
                className={`${
                  
                    darkmode
                      ? "text-[rgb(146,145,146)]"
                      : "text-[rgb(162,164,162)]"
                  
                } flex mt-4  xl:absolute bottom-4 text-sm font-semibold`}
              >
                {frontArticle.author == null ? "NewsCast" : frontArticle.author} <p className="text-xs mx-2 text-[rgb(81,81,81)]">|</p> 
                {formatDate(frontArticle.publishedAt)}
              </p>
            
            </a>
          </div>
          <div
            className={`flex md:flex-row flex-wrap flex-col gap-y-10 px-3 xl:px-0 space-y-6 md:space-y-0 mt-14 gap-x-8 xl:mt-10 border-b-1 ${
              darkmode ? "border-[rgb(53,57,57)]" : "border-[rgb(210,210,210)]"
            } py-6 `}
          >
            {articles.map((element) => {
              return (
                <div
                  key={element.url}
                  className={`flex flex-col  ${
                    darkmode ? "shadow-none" : "shadow-xl"
                  }   shadow-[rgb(210,210,210)] relative rounded-lg md:w-[47.8%] lg:w-[31%] xl:w-[30%]
                 ${
                   darkmode ? "bg-[rgb(51,51,51)]" : "bg-[rgb(255,255,255)]"
                 }   border-[rgb(53,57,57)]`}
                >
                  <a href={element.url}>
                    <img
                      alt=""
                      className="xl:w-[20rem] w-[100%] sm:h-96   h-60 md:h-[17rem] lg:h-[16rem] xl:h-[13rem] rounded-t-lg"
                      src={
                        element.urlToImage == null ? img : element.urlToImage
                      }
                    />
                  </a>
                  <a className=" relative pt-3 px-4" href={element.url}>
                    <p
                      className={`${
                        darkmode
                          ? "text-[rgb(212,212,212)]"
                          : "text-[rgb(51,51,51)]"
                      } font-semibold text-lg lg:pb-12 xl:text-base`}
                    >
                      {element.title}
                    </p>

                    <p
                      className={`${
                        darkmode
                          ? "text-[rgb(212,212,212)]"
                          : "text-[rgb(51,51,51)]"
                      }  lg:hidden py-4 pb-12 `}
                    >
                      {element.description}
                    </p>
                  </a>
                  <p className={`${
                  
                  darkmode
                    ? "text-[rgb(146,145,146)]"
                    : "text-[rgb(162,164,162)]"
                
              } px-4 my-2  font-[calibri]  absolute bottom-0 flex text-sm font-bold`}>{element.author == null ? "NewsCast" : element.author} <p className="text-xs mx-2 text-[rgb(81,81,81)]">|</p> 
                {formatDate(element.publishedAt)}</p>
                </div>
              );
            })}
          </div>
          <span
            className=" bg-gradient-to-r w-28 text-sm px-2 py-1  xl:mx-0 mx-4 my-2 mt-8 rounded-sm  font-bold 
           from-[rgb(206,78,76)] to-[rgb(225,116,114)]"
          >
            <p className="bg-gradient-to-r  from-[rgb(206,78,76)] text-white to-[rgb(225,116,114)]">
              TRENDING{" "}
              <i className="pl-1  text-xs fa-solid fa-chevron-right"></i>{" "}
            </p>
          </span>

          <div className="flex md:flex-row flex-col space-y-10 md:space-y-0  gap-x-4 px-4 xl:px-0 py-3 mb-6">
            {TrendingArticle.map((element) => {
              return (
                <div
                  className="relative md:w-[33%]  w-[100%] xl:w-[31%]"
                  key={element.url}
                >
                  <a key={element.url} href={element.url}>
                    <img
                      alt=""
                      className={` xl:w-72 w-[100%] h-80 sm:h-96 md:h-60 lg:h-72 xl:h-48 rounded-lg ${
                        darkmode ? "opacity-70" : "opacity-90"
                      } `}
                      src={
                        element.urlToImage == null ? img : element.urlToImage
                      }
                    ></img>
                    <p className="absolute bottom-0 text-white w-[100%] px-4 pb-4 font-semibold bg-gradient-to-t from-black to-transparent rounded-lg ">
                      {element.title == null
                        ? element.title
                        : element.title.slice(0, 98)}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
