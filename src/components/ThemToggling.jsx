import { useGlobalContext } from "./Context";
import React from "react";

const ThemToggling = () => {
  const { themeTogg, theme } = useGlobalContext();

  const handelToggle = (e) => {
    const newTheme = e.target.checked ? "myDark" : "myLight";
    themeTogg(newTheme);
  };
  return (
    <div>
      <div className="inline-flex items-center">
        <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
          <input
            id="switch-component"
            type="checkbox"
            className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-300 checked:bg-orange-500 peer-checked:border-gray-900 peer-checked:before:bg-orange-500"
            onChange={handelToggle}
            checked={theme === "myLight" ? false : true}
          />
          <label
            htmlFor="switch-component"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-orange-500 peer-checked:before:bg-orange-500"
          >
            <div
              className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
              data-ripple-dark="false"
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemToggling;
