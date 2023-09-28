import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  const List = [
    "All",
    "live",
    "mixes",
    "Music",

    "Phonics",
    "Animated film",
    "Mantras",
    // "Thoughts",
    // "Civil Services",
    // "Choclate cakes",
    // "News",
    // "movie",
  ];
  return (
    <div className="bg-white bg-opacity-90 flex overflow-x-scroll h-12 lg:h-fit lg:justify-center w-screen lg:w-11/12 lg:mx-auto border border-black">
      {List.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default Buttonlist;
