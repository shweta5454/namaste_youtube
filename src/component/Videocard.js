import React from "react";

const Videocard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" h-full   lg:p-2 lg:m-2 lg:w-72   ">
      <img
        className="rounded-3xl lg:rounded-2xl hover:scale-105 w-screen p-2"
        src={thumbnails.medium.url}
        alt="thubnail"
      />
      <ul className="">
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        {/* <li>{statistics.likeCount}</li> */}
        <li className="text-gray-500">
          {Math.floor(statistics.viewCount / 100000)}M Views
        </li>
      </ul>
    </div>
  );
};

export const Advideocard = ({ info }) => {
  return (
    <div className="border  ">
      <h1 className="absolute z-10 ml-4 mt-2 bg-black text-white rounded px-10 py-1 bg-opacity-70">
        Advertiesment
      </h1>
      <Videocard info={info} />
    </div>
  );
};
export default Videocard;
