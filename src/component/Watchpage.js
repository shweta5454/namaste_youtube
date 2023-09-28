import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
const Watchpage = () => {
  const [params] = useSearchParams();
  const v = params.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="mx-auto lg:px-5 w-screen ">
      <iframe
        className="hidden lg:block lg:rounded-2xl"
        width="880"
        height="440"
        src={"https://www.youtube.com/embed/" + v}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className="lg:hidden rounded-2xl"
        width="370"
        height="240"
        src={"https://www.youtube.com/embed/" + v}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watchpage;
