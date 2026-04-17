"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* LOGO ANIMATION */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/Logo3.png"
          alt="Loading"
          width={120}
          height={120}
        />
      </motion.div>

      {/* TEXT */}
      <motion.p
        className="mt-4 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Preparing your experience...
      </motion.p>

      {/* PROGRESS BAR */}
      <div className="mt-6 w-40 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-red-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </div>

    </motion.div>
  );
}