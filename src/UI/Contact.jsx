import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div className=" px-32  h-dvh bg-white">
      <h1 className="text-[184px] leading-[104.5%] tracking-tight">
        Get In Touch <br /> With Us.
      </h1>
      <p className=" text-[44px] mt-8">
        We’d love to hear from you! Whether you have questions, feedback, or
        need support, our team at Aerobite is here to assist you. Reach out to
        us for any inquiries about our drone delivery service, partnership
        opportunities, or anything else on your mind. We’re committed to
        providing you with the best possible experience.
        <br /> much more.
      </p>

      <button className=" mt-12 py-8 px-14 font-medium self-start text-white  bg-blueLight text-[36px] rounded-full flex items-center gap-4 hover:bg-sky-400 transition-all duration-300">
        Contact Us
      </button>
    </motion.div>
  );
}

export default Contact;
