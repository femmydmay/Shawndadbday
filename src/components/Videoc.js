import React from 'react'
import Hbds from "../assets/hbdspec.mp4";

const Videoc = () => {
  return (
    <div className="vidc">
      <video className="  w-full h-full object-cover" width="400" controls>
        <source src={Hbds} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videoc