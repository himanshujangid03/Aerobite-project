import playIcon from "../assets/play-icon-white.svg";
import { Button } from "@/components/ui/button";
import ytVideo from "../assets/ytvideo.png";
import { motion as m } from "framer-motion";

function YoutubeSection() {
  return (
    <div className=" h-min bg-gray-50 px-16 flex py-20">
      <img src={ytVideo} alt="yputube video" />
      <div className="px-10 flex flex-col justify-between">
        <span className=" text-xl">VIDEO</span>
        <p className=" text-3xl leading-[104.5%]">
          Discover the future of food delivery with our exciting Aerobite
          YouTube video! Dive into the world of drone technology and see
          firsthand how Aerobite is transforming the way you receive your
          favorite meals.
        </p>
        <m.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.2,
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
          className=" w-min"
        >
          <Button className="bg-blueLight hover:bg-sky-400 self-start text-2xl py-[44px] px-[44px] font-light rounded-full">
            <img
              src={playIcon}
              alt="play video icon"
              className=" size-6 mr-4"
            />
            Watch On Youtube
          </Button>
        </m.div>
      </div>
    </div>
  );
}

export default YoutubeSection;
