import { motion } from "framer-motion";

export default function Star({ size, className, duration }) {
  return (
    <>
      <motion.div
        whileHover={{ opacity: 1 }}
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: duration,
          repeat: Infinity  ,
          repeatType: "reverse",
        }}
        className={`${className} cursor-pointer`}
      >
        <svg
          id="Layer_1"
          height={size}
          viewBox="0 0 64 64"
          fill="#F6E96B"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z" />
        </svg>
      </motion.div>
    </>
  );
}
