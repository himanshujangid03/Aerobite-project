import droneImage from "../assets/drone food image.png";
import { motion as m } from "framer-motion";

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
      <div className=" text-2xl md:text-6xl lg:text-[126px] font-bold leading-normal gap-6 flex flex-col">
        <div className=" flex gap-6 lg:gap-10 justify-center items-center">
          <div className=" overflow-hidden">
            <m.p
              className=" italic text-center"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
            >
              Sky High Dining
            </m.p>
          </div>
          <div className=" w-[250px] h-[120px] flex justify-center items-center">
            <m.img
              initial={{ height: 0, width: 0 }}
              animate={{ width: 250, height: 120 }}
              transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.4 }}
              src={droneImage}
              className=" "
              alt="drone image"
            />
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
            className="text-center"
          >
            Delivered to Your Doorstep
          </m.p>
        </div>
      </div>
    </>
  );
}
