
import { useRef } from "react";
//import droneVideo from "../assets/drone-video.mp4";
import droneImage from '../assets/drone-image-hero.png'

function ServiceHeading() {
  const scrollRef = useRef(null);
  return (
    <>
      <div className="">
        <div ref={scrollRef} className=" overflow-hidden">
          <p className="m-0 text-[184px] text-white leading-none">Featured</p>
        </div>
        <div className="m-0 grid grid-cols-[auto,1fr] gap-16 leading-none items-end">
          {/* <video
            src={droneVideo}
            width={278}
            height={139}
            autoPlay
            muted
            loop
            className=" rounded-full"
          ></video> */}
          <img src={droneImage} className=" w-64 h-auto mb-4" alt="drone image" />
          <div className=" overflow-hidden">
            <p className=" m-0 text-[184px] text-white font-light italic">
              Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceHeading;
