import githubIcon from "../assets/github-icon.svg";
import instaIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import { motion as m } from "framer-motion";

function Footer() {
  return (
    <>
      <div className=" bg-black h-max pt-24">
        <m.p
        initial={{opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-white text-9xl font-bold leading-none w-min m-auto text-center"
        >
          AEROBITE
        </m.p>
        <div className=" px-12 flex flex-col gap-24">
          <div className=" flex justify-between mt-[96px]">
            <div className=" font-medium text-2xl text-white flex flex-col gap-6 ">
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
              <p className="font-medium text-3xl text-white underline">
                himanshujangid516@gmail.com
              </p>
              <div className=" flex justify-end gap-6">
                <a href="https://github.com/himanshujangid03" target="_blank">
                  <m.img
                    whileHover={{ y: -3 }}
                    src={githubIcon}
                    alt="github"
                    width={45}
                    height={45}
                    className=" cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/himanshu.jangid03/?next=%2F"
                  target="_blank"
                >
                  <m.img
                    whileHover={{ y: -3 }}
                    src={instaIcon}
                    alt="instagram"
                    width={45}
                    height={45}
                    className=" cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshujangid03/"
                  target="_blank"
                >
                  <m.img
                    whileHover={{ y: -3 }}
                    src={linkedinIcon}
                    alt="linkedin"
                    width={45}
                    height={45}
                    className=" cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" text-[#A3A3A3] text-[24px] text-center w-full py-8">
            Disclaimer: This website is a conceptual project and is not a real
            business. All content and services described are for demonstration
            purposes only.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
