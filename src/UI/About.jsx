import { Button } from "@/components/ui/button";
import largeLogoDark from "../assets/large-logo-dark.png";

function About() {
  return (
    <div className=" px-32 flex gap-[146px] my-[175px]">
      <img src={largeLogoDark} width={642} height={642} alt="about aerobite" />
      <div className="flex flex-col gap-16">
        <p className=" text-[44px] leading-[121%] font-light">
          At Aerobite, we are redefining the food delivery landscape through the
          power of cutting-edge drone technology. Our mission is to provide
          fast, reliable, and eco-friendly food delivery services, ensuring that
          your favorite meals arrive hot and fresh, straight from the kitchen to
          your doorstep.
        </p>

        <Button className="bg-blueLight hover:bg-sky-400 self-start text-[36px] py-[56px] px-[56px] font-light rounded-full">Get the App</Button>
      </div>
    </div>
  );
}

export default About;
