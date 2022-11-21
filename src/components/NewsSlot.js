import React, { useEffect, useState } from "react";
import img from "../images/news-default-img.jpg";

export default function NewsSlot(props) {
  const { apiKey, category, darkmode, theme } = props;
  const [article1, setarticle1] = useState([]);
  const [article2, setarticle2] = useState([]);
  const [article3, setarticle3] = useState([]);
  const [article4, setarticle4] = useState([]);
  const [article5, setarticle5] = useState([]);

  const fetchNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&pagesize=6&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData.articles) {
      setarticle1(parsedData.articles.shift());
      setarticle2(parsedData.articles.shift());
      setarticle3(parsedData.articles.shift());
      setarticle4(parsedData.articles.shift());
      setarticle5(parsedData.articles.shift());
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, []);

  let chooseBg = (darkmode) => {
    if (darkmode) {
      return "rgb(39,39,39)";
    } else {
      return "rgb(234,234,234)";
    }
  };

  const capitalize = (string) => {
    return string.charAt().toUpperCase() + string.slice(1);
  };

  // to formate into hours //

  const formatDate = (date) => {
    if (date) {
      let day = date.slice(8, 10);
      let year = date.slice(0, 4);
      let month = date.slice(5, 7);
      month = parseInt(month);
      day = parseInt(day);
      let hour = date.slice(11, 13);
      hour = parseInt(hour);
      let currDate = new Date();
      let currDay = currDate.getDate();
      let currhour = currDate.getHours();
      if (day === currDay) {
        return currhour - hour + " hours ago";
      } else {
        let monthMap = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
        return monthMap[month - 1] + " " + day + ", " + year;
      }
    }
  };

  return (
    <>
      {article1 && (
        <div
          style={{
            backgroundColor:
              theme === "dark" ? chooseBg(darkmode) : "rgb(31,41,78)",
          }}
          className={`lg:px-6 w-[100%]  xl:w-auto py-6`}
        >
          <div className="w-24 text-base mx-4  lg:mx-0 xl:mx-0   mt-4    font-bold  ">
            <p
              className={`bg-gradient-to-r text-white  rounded-sm ${
                theme === "dark"
                  ? "from-[rgb(26,16,49)]"
                  : "from-[rgb(200,113,200)]"
              } ${
                theme === "dark" ? "to-[rgb(84,7,36)]" : "to-[rgb(221,149,221)]"
              }  ${theme === "dark" ? "pl-4" : "pl-4"} py-1 `}
            >
              {capitalize(category)}
              <i className="pl-1  text-xs fa-solid fa-chevron-right"></i>{" "}
            </p>
          </div>
          <div className="flex overflow-scroll lg:overflow-auto ml-4 lg:ml-0  flex-row">
            <div
              className={`flex xl:flex-col   xl:space-x-0 py-6 space-x-6 xl:space-y-6 xl:h-[30rem] mr-8 order-${
                theme === "dark" ? "2" : "1"
              }`}
            >
              <div className="relative group delay-1000  w-80 xl:h-48 h-56 lg:w-80">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article1.url}
                >
                  <img
                    alt=""
                    className={`lg:w-80 w-80 ${
                      darkmode ? "opacity-70" : "opacity-90"
                    } h-56 xl:h-48 rounded-lg opacity-70`}
                    src={
                      article1.urlToImage == null ? img : article1.urlToImage
                    }
                  ></img>
                  <p className="absolute bottom-0 duration-300 group-hover:pb-6 px-4 text-white pb-4 font-semibold bg-gradient-to-t from-black to-transparent rounded-lg ">
                    <p className="text-xs pb-1 hidden  group-hover:flex  font-semibold">
                      {article1.author == null ? "NewsCast" : article1.author}
                      <p className="text-xs mx-2 text-[rgb(81,81,81)]">|</p>
                      {formatDate(article1.publishedAt)}
                    </p>
                    {article1.title == null
                      ? article1.title
                      : article1.title.slice(0, 98)}
                  </p>
                </a>
              </div>
              <div className="relative w-80 group xl:h-48 h-56 lg:w-80 ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article2.url}
                >
                  <img
                    alt=""
                    className={`lg:w-80 w-80  h-56 xl:h-48  rounded-lg ${
                      darkmode ? "opacity-70" : "opacity-90"
                    }`}
                    src={
                      article2.urlToImage == null ? img : article2.urlToImage
                    }
                  ></img>

                  <p className="absolute bottom-0 px-4 duration-300 group-hover:pb-6 text-white pb-4 font-semibold bg-gradient-to-t from-black to-transparent rounded-lg">
                    <p className="text-xs pb-1 hidden  group-hover:flex  font-semibold">
                      {article2.author == null ? "NewsCast" : article2.author}
                      <p className="text-xs mx-2 text-[rgb(81,81,81)]">|</p>
                      {formatDate(article2.publishedAt)}
                    </p>
                    {article2.title}
                  </p>
                </a>
              </div>
            </div>
            <div
              className={`relative hidden group  xl:flex h-[28.3rem]  mr-8 order-${
                theme === "dark" ? "1" : "2"
              }`}
            >
              <a target="_blank" rel="noopener noreferrer" href={article3.url}>
                <img
                  alt=""
                  className={`w-[37rem] lg py-6 rounded-lg  h-[28.5rem] ${
                    darkmode ? "opacity-70" : "opacity-90"
                  } opacity-70`}
                  src={article3.urlToImage == null ? img : article3.urlToImage}
                ></img>
                <p className="absolute bottom-5 w-full duration-300 group-hover:pb-6  px-4  text-white pb-4 text-2xl font-bold bg-gradient-to-t from-black to-transparent ">
                  <p className="text-xs pb-1 hidden  group-hover:flex  font-semibold">
                    {article3.author == null ? "NewsCast" : article3.author}
                    <p className="text-xs mx-2 text-[rgb(81,81,81)]">|</p>
                    {formatDate(article3.publishedAt)}
                  </p>

                  {article3.title}
                </p>
              </a>
            </div>
            <div
              alt=""
              className="flex py-6 xl:space-y-6 xl:space-x-0  space-x-6 xl:flex-col order-3 "
            >
              <div className="relative w-80 group xl:h-48 h-56 lg:w-80">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article4.url}
                >
                  <img
                    alt=""
                    className={`lg:w-80 w-80 h-56 xl:h-48 ${
                      darkmode ? "opacity-70" : "opacity-90"
                    } rounded-lg opacity-70`}
                    src={
                      article4.urlToImage == null ? img : article4.urlToImage
                    }
                  ></img>
                  <p className="absolute bottom-0 duration-300 group-hover:pb-6 px-4 text-white  pb-4 font-semibold bg-gradient-to-t from-black to-transparent rounded-lg">
                    <p className="text-xs pb-1 hidden  group-hover:flex  font-semibold">
                      {article4.author == null ? "NewsCast" : article4.author}
                      <p className="text-xs mx-2 text-[rgb(81,81,81)]">|</p>
                      {formatDate(article4.publishedAt)}
                    </p>
                    {article4.title}
                  </p>
                </a>
              </div>
              <div className="relative group xl:h-48 h-56 lg:w-80 w-80">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article5.url}
                >
                  <img
                    alt=""
                    className={`lg:w-80 xl:h-48 w-80  h-56 ${
                      darkmode ? "opacity-70" : "opacity-90"
                    } rounded-lg opacity-70`}
                    src={
                      article5.urlToImage == null ? img : article5.urlToImage
                    }
                  ></img>
                  <p className="absolute bottom-0 duration-300 group-hover:pb-6 px-4 text-white  pb-4 font-semibold bg-gradient-to-t from-black   to-transparent rounded-lg">
                    <p className="text-xs pb-1 hidden  group-hover:flex  font-semibold">
                      {article5.author == null ? "NewsCast" : article5.author}
                      <p className="text-xs mx-2 text-[rgb(81,81,81)]">|</p>
                      {formatDate(article5.publishedAt)}
                    </p>
                    {article5.title}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
