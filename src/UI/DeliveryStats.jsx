import location from "../assets/location.svg";
import checklist from "../assets/checklist.svg";
import packageIcon from "../assets/package.svg";

export default function DeliveryStats() {
  return (
    <>
      <div className=" lg:w-4/5 m-auto bg-blueDark flex flex-col gap-12 lg:flex-row items-start lg:items-center justify-between px-10 place-items-center py-16 rounded-[2rem] mt-16 text-white">
        <div className=" flex flex-col items-start gap-3">
          <img src={location} className=" size-10" alt="location" />
          <p className=" text-lg lg:text-2xl">Miles Flown</p>
          <span className="text-5xl lg:text-7xl font-bold">250,000</span>
        </div>
        <div className=" flex flex-col items-start gap-3">
          <img src={checklist} className=" size-10" alt="location" />
          <p className=" text-lg lg:text-2xl">Deliveries Made</p>
          <span className="text-5xl lg:text-7xl font-bold">12,500</span>
        </div>
        <div className=" flex flex-col items-start gap-3">
          <img src={packageIcon} className=" size-10" alt="location" />
          <p className=" text-lg lg:text-2xl">Items Delivered</p>
          <span className="text-5xl lg:text-7xl font-bold">37,800</span>
        </div>
      </div>
    </>
  );
}
