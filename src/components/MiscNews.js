import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default function MiscNews(props) {
  const { apiKey, category, darkmode, setcloseApp } = props;
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);

  const [totalResults, settotalResults] = useState(1);

  const UpdateNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&pagesize=6&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(20);
  };

  useEffect(() => {
    UpdateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setpage(page + 1);
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&pagesize=6  &page=${
      page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (!parsedData.articles) {
      setcloseApp(true);
    }
    let updatedArticles = articles.concat(parsedData.articles);
    setarticles(updatedArticles);
  };

  return (
    <>
      {articles && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults}
          loader={<Spinner />}
        >
          {articles && (
            <div
              className={`flex py-10 flex-wrap  gap-y-14 px-4 gap-x-4  xl:gap-x-6 ${
                darkmode ? "bg-[rgb(51,51,51)]" : "bg-white"
              } xl:py-14 sm:py-10`}
            >
              {articles.map((element) => {
                return (
                  <div
                    key={element.url}
                    className="w-[100%]  sm:w-[48.4%] lg:w-[32%] xl:w-[23.5%]  relative "
                  >
                    <img
                      alt=""
                      className="w-[100%] sm:w-[100%] xl:w-[20rem] h-52 xl:h-52   md:h-60 rounded-lg"
                      src={element.urlToImage}
                    ></img>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={element.url}
                    >
                      <div
                        className={`pt-3 ${
                          darkmode
                            ? "text-[rgb(212,212,212)]"
                            : "text-[rgb(51,51,51)]"
                        } hover:underline cursor-pointer font-semibold `}
                      >
                        <p>{element.title}</p>
                      </div>
                    </a>
                    <p
                      className={`${
                        darkmode
                          ? "text-[rgb(133,137,137)]"
                          : "text-[rgb(156,166,178)]"
                      } py-1 font-semibold text-sm`}
                    >
                      {element.author}
                    </p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={element.url}
                    >
                      <div
                        className={`-bottom-5 absolute right-0  pb-1 border-1 ${
                          darkmode
                            ? "border-[rgb(213,213,213)]"
                            : "border-[rgb(156,166,178)]"
                        } font-semibold ${
                          darkmode
                            ? "text-[rgb(213,213,213)]"
                            : "text-[rgb(156,166,178)]"
                        } w-20 pl-3 cursor-pointer rounded-md  text-xs`}
                      >
                        See more
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </InfiniteScroll>
      )}
    </>
  );
}
