import playIcon from "../assets/play-button.svg";
import video from '../assets/large-video.mp4'

export default function VideoSection() {
  return (
    <>
      <div className=" min-h-dvh bg-blueDark py-[84px] px-[64px] grid grid-rows-[auto,1fr] gap-[64px]">
        <div className=" flex flex-col gap-[32px]">
          <div className="flex gap-10 items-start lg:items-center">
            <img src={playIcon} alt="video play icon" className="size-[72px]" />
            <p className=" text-[64px] text-white">Watch Aerobite in Action</p>
          </div>
          <p className=" text-white text-[36px] leading-[145%] tracking-tight max-w-[80rem]">
            Get a glimpse of the future of food delivery! Watch our video to see
            how Aerobite uses cutting-edge drone technology to deliver your
            favorite meals in minutes. Experience the speed, efficiency, and
            innovation that <br /> set us apart.
          </p>
        </div>
        <div className=" bg-white w-full h-full rounded-3xl">
            <video src={video} autoPlay muted loop className=" aspect-video w-full object-contain rounded-3xl"></video>
        </div>
      </div>
    </>
  );
}
