import playIcon from "../assets/play-button.svg";
import video from '../assets/large-video.mp4'

export default function VideoSection() {
  return (
    <>
      <div className=" lg:min-h-dvh pb-20 lg:pb-44 bg-blueDark p-6 lg:py-[84px] lg:px-[156px] grid grid-rows-[auto,1fr] gap-[64px]">
        <div className=" flex flex-col gap-[32px]">
          <div className="flex gap-4 lg:gap-10 items-center">
            <img src={playIcon} alt="video play icon" className="lg:size-[72px] size-12" />
            <p className=" text-2xl lg:text-[64px] text-white">Watch Aerobite in Action</p>
          </div>
          <p className=" text-white text-xl lg:text-[36px] leading-[145%] tracking-tight max-w-[80rem]">
            Get a glimpse of the future of food delivery! Watch our video to see
            how Aerobite uses cutting-edge drone technology to deliver your
            favorite meals in minutes. Experience the speed, efficiency, and
            innovation that <br /> set us apart.
          </p>
        </div>
        <div className=" bg-white w-full h-min rounded-xl lg:rounded-3xl">
            <video src={video} autoPlay muted loop className=" aspect-video w-full object-contain rounded-xl lg:rounded-3xl"></video>
        </div>
      </div>
    </>
  );
}
