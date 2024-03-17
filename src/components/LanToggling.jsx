import React from "react";
import { arabic } from "../assets";

const LanToggling = () => {
  return (
    <div>
      <button>
        <img src={arabic} alt="arabic icon" className="w-[50px]" />
      </button>
    </div>
  );
};

export default LanToggling;
