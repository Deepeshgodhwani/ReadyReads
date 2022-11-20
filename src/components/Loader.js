import React from "react";

const Loader = () => {
  return (
    <div
      className={`flex
       bg-[rgb(234,234,234)]
        flex-col  items-center pt-28 w-full h-[100vh] `}
    >
      <div className="flex  space-y-4 flex-col items-center">
        <img
          alt=""
          className="w-20"
          src="https://media.tenor.com/RfZi5L0BUt8AAAAi/cute-dog.gif"
        ></img>
        <p className="text-3xl font-semibold font-calibri sm:w-[26rem] text-center">
          Oh no,you've exceeded your daily limit{" "}
        </p>
      </div>
      <div className="flex mt-4 space-x-3">
        <a
          target="__blank"
          href="https://www.linkedin.com/in/deepesh-godwani-4269531b0/"
        >
          <i class="fa-brands fa-linkedin-in"></i>&nbsp;LinkedIn
        </a>
        <a target="__blank" href="https://github.com/Deepeshgodwani">
          <i class="fa-brands fa-github"></i>&nbsp;Github
        </a>
      </div>
    </div>
  );
};

export default Loader;
