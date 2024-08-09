import { motion } from "framer-motion";
import emailIcon from "../assets/email icon.svg";

function EmailSubscription() {
  return (
    <motion.div r className=" p-32  bg-sky-100 flex flex-col items-start ">
      <div>
        <h1 className="text-[64px] leading-[104.5%] font-medium tracking-tight">
          Subscribe for Newsletter.
        </h1>
        <p className=" text-[44px] mt-8">
          Recieve daily updates and
          <br /> much more.
        </p>
      </div>

      <div className=" p-4 w-fit rounded-full bg-blueDark flex items-center gap-4 mt-12">
        <input
          type="text"
          className=" flex-1 outline-none h-full text-white bg-transparent w-max text-4xl py-4 px-10"
          placeholder="Please enter your email address"
        />
        <button className=" py-8 px-14 font-medium self-start text-white  bg-blueLight text-[36px] rounded-full flex items-center gap-4 hover:bg-sky-400 transition-all duration-300">
          SUBSCRIBE
          <img
            src={emailIcon}
            width={43}
            height={43}
            alt="mail subscription icon"
          />
        </button>
      </div>
    </motion.div>
  );
}

export default EmailSubscription;
