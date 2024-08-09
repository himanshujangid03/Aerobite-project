import playIcon from '../assets/play-icon-white.svg'
import { Button } from "@/components/ui/button";
import ytVideo from "../assets/ytvideo.png";

function YoutubeSection() {
  return (
    <div className=" h-[580px] bg-gray-50 px-32 flex py-20">
      <img src={ytVideo} alt="yputube video" />
      <div className="px-32 flex flex-col justify-between">
        <span className=" text-[28px]">VIDEO</span>
        <p className=" text-[36px] leading-[104.5%]">
          Discover the future of food delivery with our exciting Aerobite
          YouTube video! Dive into the world of drone technology and see
          firsthand how Aerobite is transforming the way you receive your
          favorite meals.
        </p>
        <Button className="bg-blueLight hover:bg-sky-400 self-start text-[36px] py-[56px] px-[56px] font-light rounded-full">
        <img src={playIcon} alt="play video icon" className=' size-10 mr-4' />
          Watch On Youtube
        </Button>
      </div>
    </div>
  );
}

export default YoutubeSection;
