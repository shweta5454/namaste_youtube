import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    //API CALL
    //make an api call afterevery key press
    //but if the difference between the 2 API call is <200ms ,decline API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key -i
   *  -render the component
   *  -useeffect called
   *  -start timer =>make api call after 200 ms
   *
   * key -ip
   *  -destroy the component (useeffect return method)
   *  -re-render the component
   *  -useeffect()
   *  -start timer=>make api call  after 200ms
   *
   * if no key press after 200ms than api call is made
   */

  //Api call for search suggestions
  const getSuggestions = async () => {
    console.log("API CALL", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  //hamburger toggle function
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 lg:py-2  lg:p-5  lg:m-2 shadow-lg  ">
      {/* youtube and hamburger logo */}
      <div className="flex   col-span-4 lg:col-span-1 ">
        <img
          className=" w-5 my-auto  lg:h-8 lg:w-8 "
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="logo_img"
          onClick={() => handleToggle()}
        />

        <img
          className="w-16 h-4 my-auto lg:w-20 lg:h-6  ml-3 lg:ml-4 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20220605194644"
          alt="youtube-logo"
        />
      </div>
      {/* search input box */}
      <div className="col-span-6 lg:col-span-10 align-middle  shadow-lg ">
        <div className="flex justify-center">
          <input
            type=" text"
            placeholder="  Search your text here"
            className="text-sm focus:outline-none focus:ring-0 focus:border-blue-600   pl-3 w-2/3  lg:w-1/2  border border-gray-400 lg:px-8 rounded-l-full "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 w-8 lg:w-16 lg:py-2  rounded-r-full">
            <svg
              className="w-3 h-3 lg:w-6 lg:h-6"
              enableBackground="new 0 0 24 24"
              // height="24"
              viewBox="-4 0 24 24"
              // width="24"
              focusable="false"
            >
              <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
            </svg>
          </button>
        </div>{" "}
        {/* suggestions div */}
        {suggestions && (
          <div className="absolute lg:ml-60 z-20 bg-white py-2 px-2 lg:w-[37rem] shadow-lg rounded-lg">
            <ul>
              {suggestions &&
                suggestions.map((item) => (
                  <li
                    key={item}
                    className="flex text-sm content-center cur  py-2 hover:bg-gray-200"
                  >
                    {" "}
                    <svg
                      className="mr-2"
                      enableBackground="new 0 0 24 24"
                      height="18"
                      viewBox="-4 0 24 24"
                      width="18"
                      focusable="false"
                    >
                      <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                    </svg>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      {/* user logo */}
      <div className="col-span-1 lg:col-span-2  ">
        <img
          className="h-5 lg:h-8"
          src="data:image/png;base64,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"
          alt="user_img"
        />
      </div>
    </div>
  );
};

export default Head;
