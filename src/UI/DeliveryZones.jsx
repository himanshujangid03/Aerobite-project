import mapZonesImage from "../assets/map.png";
import { motion } from "framer-motion";
import DeliveryStats from "./DeliveryStats";

function DeliveryZones() {
  return (
    <div className="px-32 mt-32 h-max font-medium">
      <div className="">
        <p className=" text-[128px] leading-[104.5%] tracking-tight">
          Aerobite
        </p>
        <p className="  text-[128px] leading-[104.5%] pl-32 tracking-tight">
          <span className=" italic mr-12 text-blueLight">Delivery</span>
          Zones
        </p>
      </div>
      <p className=" mt-10 text-[36px] leading-[100%]">
        Our drone delivery service is rapidly expanding. Explore our
        continuously growing list of delivery zones to see if we&apos;re in your
        area.Is your neighborhood not listed? We&apos;re tirelessly working to
        broaden our reach while complying with the latest regulations. Stay
        tuned—we&apos;re eager to deliver to you soon!
      </p>
      <DeliveryStats />
      <motion.img src={mapZonesImage} alt="maps" />
    </div>
  );
}

export default DeliveryZones;
