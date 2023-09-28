import React from "react";
import Buttonlist from "./Buttonlist";
import Videocontainer from "./Videocontainer";
const Maincontainer = () => {
  return (
    <div className=" lg:bg-white lg:col-span-11 border border-black">
      <Buttonlist />
      <Videocontainer />
    </div>
  );
};

export default Maincontainer;
