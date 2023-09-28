import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 m-2  lg:px-5 lg:py-2 lg:m-5 bg-gray-300 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
