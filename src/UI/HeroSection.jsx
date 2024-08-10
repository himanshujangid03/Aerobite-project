//import droneImage from "../assets/drone-image-hero.png";
import { motion as m } from "framer-motion";
import droneVideo from "../assets/drone-video.mp4";

const variants = {
  hidden: {
    y: 300,
  },
  visible: {
    y: 0,
  },
};

export default function HeroSection() {
  return (
    <>
      <div className=" text-4xl px-8 md:text-6xl mb-16 mt-6 lg:text-[84px] font-regular font-semibold gap-6 flex flex-col">
        <div className=" flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-start lg:items-center">
          <div className=" overflow-hidden">
            <m.p
              className=" text-center font-regular italic lg:p-2"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
            >
              Sky High{" "}
              <span className=" text-transparent bg-clip-text pr-2 bg-gradient-to-r from-blueLight to-blueDark">
                Dining
              </span>
            </m.p>
          </div>
          <div className="hidden w-[200px] h-[100px] lg:flex justify-center items-start lg:items-center">
            <video
              src={droneVideo}
              autoPlay
              muted
              loop
              className=" rounded-full"
            ></video>
          </div>
        </div>
        <div className=" overflow-hidden">
          <m.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.5,
              ease: [0.6, 0.01, -0.05, 0.95],
              delay: 0.2,
            }}
            className="text-start lg:text-center"
          >
            Delivered to Your Doorstep
          </m.p>
        </div>
      </div>
    </>
  );
}
