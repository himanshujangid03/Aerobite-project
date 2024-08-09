import { useRef } from "react";
import githubIcon from "../assets/github-icon.svg";
import instaIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import { motion as m, useScroll, useTransform } from "framer-motion";

function Footer() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });

  const color = useTransform(scrollYProgress, [0, "#000"], [0, "#fff"]);

  return (
    <>
      <m.div
        ref={targetRef}
        style={{ color }}
        transition={{ delay: 0 }}
        className=" bg-black h-dvh"
      >
        <h1 className=" text-white text-[350px] font-bold leading-none w-min m-auto text-center">
          AEROBITE
        </h1>
        <div className=" px-24 flex flex-col gap-24">
          <div className=" flex justify-between mt-[96px]">
            <div className=" font-medium text-3xl text-white flex flex-col gap-6 ">
              <p className=" link-item relative w-fit cursor-pointer">HOME</p>
              <p className=" link-item relative w-fit cursor-pointer">ABOUT</p>
              <p className=" link-item relative w-fit cursor-pointer">
                CONTACT
              </p>
              <p className=" link-item relative w-fit cursor-pointer">
                TERMS & CONDITIONS
              </p>
            </div>
            <div className=" flex flex-col gap-6">
              <p className="font-medium text-[44px] text-white underline">
                himanshujangid516@gmail.com
              </p>
              <div className=" flex justify-end gap-6">
                <m.img
                  whileHover={{ y: -3 }}
                  src={githubIcon}
                  alt="github"
                  width={70}
                  height={70}
                  className=" cursor-pointer"
                />
                <m.img
                  whileHover={{ y: -3 }}
                  src={instaIcon}
                  alt="instagram"
                  width={70}
                  height={70}
                  className=" cursor-pointer"
                />
                <m.img
                  whileHover={{ y: -3 }}
                  src={linkedinIcon}
                  alt="linkedin"
                  width={70}
                  height={70}
                  className=" cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className=" text-[#A3A3A3] text-[36px] text-center w-full py-8">
            Disclaimer: This website is a conceptual project and is not a real
            business. All content and services described are for demonstration
            purposes only.
          </div>
        </div>
      </m.div>
    </>
  );
}

export default Footer;
