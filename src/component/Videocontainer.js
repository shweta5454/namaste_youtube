import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Videocard, { Advideocard } from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  // if (videos.length == 0) return;
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const datajson = await data.json();
    setVideos(datajson?.items);
  };
  return (
    <div className="bg-white bg-opacity-90  flex flex-wrap justify-center">
      {videos[0] && <Advideocard info={videos[0]} />}
      {videos &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <Videocard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default Videocontainer;
