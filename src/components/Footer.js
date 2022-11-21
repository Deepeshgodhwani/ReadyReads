import React from "react";

export default function Footer() {
  return (
    <div
      className={`bg-[rgb(31,47,95)] flex flex-col items-center gap-y-6 px-10 text-white py-10`}
    >
      <p className="font-semibold">
        Made with &nbsp;
        <i className=" text-[rgb(248,49,47)] fa-solid fa-heart"></i> &nbsp;by
        Deepesh Godwani
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/deepesh-godwani-4269531b0/"
          target="__blank"
        >
          <p className="bg-[rgb(8,99,190)] cursor-pointer font-bold px-2 py-1">
            {" "}
            <i className="fa-brands fa-linkedin"></i>&nbsp;linkedIn
          </p>
        </a>
        <a target="__blank" href="https://github.com/Deepeshgodwani">
          <p className="font-bold pt-1 bg-[rgb(255,0,0)] cursor-pointer pb-1 px-3">
            {" "}
            <i className="fa-brands fa-square-github"></i>&nbsp;Github
          </p>
        </a>
      </div>
    </div>
  );
}
