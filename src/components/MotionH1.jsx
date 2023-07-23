import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const MotionH1 = ({ children, delayAmount }) => {
  return (
    <h1 className="menu__link">
      <div className="line-wrap">
        <motion.div
          initial={{ y: 150 }}
          animate={{
            y: 0,
            transition: {
              delay: 0.65 + delayAmount,
              ease: [0.55, 0.06, 0.68, 0.19],
              type: "spring",
              duration: 0.55,
            },
          }}
          exit={{ y: 150 }}
          transition={{
            // type: "spring",
            ease: [0.87, 0.05, 0.47, 0.98],
            duration: 0.4,
          }}
          whileHover={{
            cursor: "pointer",
          }}
          className="line-wrap-wrap"
        >
          {children}
        </motion.div>
      </div>
    </h1>
  );
};

export default MotionH1;
