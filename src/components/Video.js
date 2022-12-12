import React from "react";
import Hbdmur from "../assets/Hbdmur.mp4";

const Video = () => {
  return (
    <div className="vid">
      <video className="w-full h-full object-cover" width="400" controls poster="../assets/docbday.jpg">
        <source src={Hbdmur} type="video/mp4" />
        
      </video>
      </div>
      
  );
};

export default Video;
