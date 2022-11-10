import React from "react";

import loading from "../images/loading.gif";

export default function Spinner() {
  return (
    <div className="flex justify-center my-10">
      <img alt="" src={loading}></img>
    </div>
  );
}
