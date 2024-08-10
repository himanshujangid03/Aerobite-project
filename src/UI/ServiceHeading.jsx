
import { useRef } from "react";
//import droneVideo from "../assets/drone-video.mp4";
import droneImage from '../assets/drone-image-hero.png'

function ServiceHeading() {
  const scrollRef = useRef(null);
  return (
    <>
      <div className=" flex flex-col gap-4 lg:gap-0 font-medium">
        <div ref={scrollRef} className=" overflow-hidden">
          <p className="m-0 text-5xl lg:text-[184px] text-white leading-none">Featured</p>
        </div>
        <div className="m-0 grid grid-cols-[auto,1fr] gap-4 lg:gap-16 leading-none items-end">
          {/* <video
            src={droneVideo}
            width={278}
            height={139}
            autoPlay
            muted
            loop
            className=" rounded-full"
          ></video> */}
          <img src={droneImage} className=" w-20 lg:w-64 h-auto lg:mb-4" alt="drone image" />
          <div className=" overflow-hidden">
            <p className=" m-0 text-5xl lg:text-[184px] text-white font-regular italic">
              Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceHeading;
