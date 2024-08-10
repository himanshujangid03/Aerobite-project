import { Button } from "@/components/ui/button";
import largeLogoDark from "../assets/large-logo-dark.png";
import { motion as m } from "framer-motion";

//width={642} height={642}

function About() {
  return (
    <div className=" px-12 lg:px-32 py-32 flex flex-col lg:flex-row gap-16 lg:gap-[146px] bg-sky-50">
      <img src={largeLogoDark}  className="w-[642px] h-auto" alt="about aerobite" />
      <div className="flex flex-col gap-16">
        <p className=" text-[54px] font-medium">About Aerobite</p>
        <p className=" text-[44px] leading-[121%] font-light">
          At Aerobite, we are redefining the food delivery landscape through the
          power of cutting-edge drone technology. Our mission is to provide
          fast, reliable, and eco-friendly food delivery services, ensuring that
          your favorite meals arrive hot and fresh, straight from the kitchen to
          your doorstep.
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
          <Button className="bg-blueLight hover:bg-sky-400 self-start text-[36px] py-[56px] px-[56px] font-light rounded-full">
            Get the App
          </Button>
        </m.div>
      </div>
    </div>
  );
}

export default About;
