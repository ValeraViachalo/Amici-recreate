import React from "react";
import Header from "../Header/Header";

import { motion } from "framer-motion";

export const PageLayout = ({ children, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      {children}
    </motion.div>
  );
};
