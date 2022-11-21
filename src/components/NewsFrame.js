import React, { useState, useEffect } from "react";
import img from "../images/news-default-img.jpg";
export default function NewsFrame(props) {
  const { apiKey, category, darkmode } = props;
  const [articles, setarticles] = useState([]);

  const UpdateNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&pagesize=4&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
  };

  useEffect(() => {
    UpdateNews();
    // eslint-disable-next-line
  }, []);

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
      {articles && (
        <div
          className={`${
            darkmode ? "bg-[rgb(31,50,78)]" : "bg-[rgb(96,152,247)]"
          } py-10 pb-16 px-5`}
        >
          <div className="w-24  py-0.5 pl-5 font-bold text-white rounded-sm text-lg bg-gradient-to-r from-[rgb(18,37,70)] to-[rgb(62,21,115)]">
            <p>
              {capitalize(category)}{" "}
              <i className="pl-1  text-xs fa-solid fa-chevron-right"></i>{" "}
            </p>
          </div>

          <div
            className={`flex flex-col md:flex-row flex-wrap xl:flex-nowrap  gap-y-10 md:space-y-0 space-y-10 gap-x-6 ${
              darkmode ? "bg-[rgb(31,50,78)]" : "bg-[rgb(96,152,247)]"
            }   py-4 `}
          >
            {articles.map((element) => {
              return (
                <div
                  key={element.url}
                  className={`flex hover:shadow-none group relative duration-300 flex-col md:w-[48%] w-[100%] shadow-xl shadow-border  shadow-black rounded-lg xl:w-[20rem] 
                   ${
                     darkmode ? "bg-[rgb(31,33,41)]" : "bg-[rgb(255,255,255)]"
                   }  border-b-1  border-[rgb(53,57,57)]`}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={element.url}
                    className="px-1 py-1"
                  >
                    <img
                      alt=""
                      className="xl:w-[20rem] sm:h-80 lg:h-80 w-[100%] md:h-60 h-60  xl:h-[12rem] rounded-t-lg"
                      src={
                        element.urlToImage == null ? img : element.urlToImage
                      }
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  pt-2 pb-6  px-4"
                    href={element.url}
                  >
                    <p
                      className={` ${
                        darkmode
                          ? "text-[rgb(212,212,212)]"
                          : "text-[rgb(51,51,51)]"
                      } font-semibold text-base`}
                    >
                      {element.title}
                    </p>
                    <p className="py-2 text-sm md:hidden">
                      {element.description}
                    </p>
                    <p
                      className={`text-xs px-1 font-bold  ${
                        darkmode
                          ? "text-[rgb(146,145,146)]"
                          : "text-[rgb(162,164,162)]"
                      }  hidden group-hover:flex absolute py-2  bottom-0 pt-2`}
                    >
                      {element.author == null ? "NewsCast" : element.author}
                      <p className="text-xs mx-2  text-[rgb(81,81,81)]">|</p>
                      {formatDate(element.publishedAt)}
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
