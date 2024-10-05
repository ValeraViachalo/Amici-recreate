import s from "./PageTransition.module.scss";
import Image from "next/image";
import { anim, TransitionPage } from "@/helpers/anim";
import { motion } from "framer-motion";

const images = [
  "/images/transition/1.webp",
  "/images/transition/2.webp",
  "/images/transition/3.webp",
  "/images/transition/4.webp",
  "/images/transition/5.webp",
  "/images/transition/6.webp",
];

export const PageTransition = ({...rest}) => {
  return (
    <motion.div className={s.slide_wrapper} {...anim(TransitionPage.wrapper)} {...rest}>
      {images.map((currI, i) => (
        <motion.div className={s.slide_image} key={i} {...anim(TransitionPage.images[0])}>
          <Image src={currI} fill alt="" />
        </motion.div>
      ))}
    </motion.div>
  );
};
