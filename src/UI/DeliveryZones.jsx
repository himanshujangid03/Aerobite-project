import mapZonesImage from "../assets/map.png";
import { motion } from "framer-motion";
import DeliveryStats from "./DeliveryStats";

function DeliveryZones() {
  return (
    <div className="px-8 lg:px-16 mt-16 lg:mt-32 h-max font-medium">
      <div className="">
        <p className=" text-5xl lg:text-[128px] leading-[104.5%] tracking-tight">
          Aerobite
        </p>
        <p className="  text-5xl lg:text-[128px] leading-[104.5%] text-wrap lg:pl-32 tracking-tight">
          <span className=" italic mr-4 lg:mr-12 text-blueLight">Delivery</span>
          Zones
        </p>
      </div>
      <p className=" mt-10 text-2xl font-regular leading-[100%]">
        Our drone delivery service is rapidly expanding. Explore our
        continuously growing list of delivery zones to see if we&apos;re in your
        area.Is your neighborhood not listed? We&apos;re tirelessly working to
        broaden our reach while complying with the latest regulations. Stay
        tuned—we&apos;re eager to deliver to you soon!
      </p>

      <DeliveryStats />
      <motion.img src={mapZonesImage} alt="maps" className=" m-auto" />
    </div>
  );
}

export default DeliveryZones;
