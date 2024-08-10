import { motion } from "framer-motion";
import telephone from "../assets/telephone.svg";

function Contact() {
  return (
    <motion.div className=" px-32 pb-20   h-max bg-white">
      <h1 className="text-8xl font-medium leading-[104.5%] tracking-tight">
        Get In Touch <br /> With Us.
      </h1>
      <p className=" text-3xl mt-8">
        We’d love to hear from you! Whether you have questions, feedback, or
        need support, our team at Aerobite is here to assist you. Reach out to
        us for any inquiries about our drone delivery service, partnership
        opportunities, or anything else on your mind. We’re committed to
        providing you with the best possible experience.
        <br /> much more.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.2,
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
        className=" w-fit"
      >
        <button className=" mt-12 py-4 px-8 font-regular self-start text-white  bg-blueLight text-2xl rounded-full flex items-center gap-4 hover:bg-sky-400 transition-all duration-300">
          <img src={telephone} alt="telephone icon" className=" size-6" />
          Call Us Now
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
