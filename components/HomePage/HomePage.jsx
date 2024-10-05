import React, { useEffect, useContext } from "react";
import { PageLayout } from "@/utils/PageLayout/PageLayout";
import { Content } from "@/utils/Content/Content";
import { AnchorLink } from "@/utils/AnchorLink/AnchorLink";
import { ScrollProvider } from "@/providers/ScrollProvider/ScrollProvider";

import s from "./HomePage.module.scss";
import { motion } from "framer-motion";
import { anim, TitlePresence } from "@/helpers/anim";
import { Logo } from "@/utils/Logo/Logo";

const titleText = [
  "At Amici's, life",
  "is a celebration",
  "and the table",
  "a feast.",
];

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout className={s.home}>
      <div className={s.hero}>
        <Decor className={`${s.hero_decor} ${s.hero_decor_top}`}/>
        <h1 className={s.title_wrapper}>
          {titleText.map((currT, i) => (
            <div className={s.title_line} key={i}>
              {currT.split(" ").map((currWord, j) => (
                <p className={s.title_word} key={j}>
                  {currWord.split("").map((char, c) => (
                    <motion.span
                      key={c}
                      className={s.title_char}
                      {...anim(TitlePresence)}
                      custom={i * 5 + j * 2 + c}
                    >
                      {char}
                    </motion.span>
                  ))}
                </p>
              ))}
            </div>
          ))}
        </h1>
        <Decor className={`${s.hero_decor} ${s.hero_decor_bottom}`} />
      </div>
    </PageLayout>
  );
}

const Decor = ({...rest}) => (
  <svg
    viewBox="0 0 1440 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="374.025"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 374.025 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 748.053 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 785.455 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 822.857 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 860.26 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 897.662 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="37.4023"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="411.43"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 336.623 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 710.648 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="74.8066"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="448.832"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 299.221 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 673.246 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="112.207"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="486.232"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 261.818 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 635.846 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="149.609"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="523.637"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 224.416 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 598.441 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="187.014"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="561.039"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 187.014 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 561.039 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="224.416"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="598.441"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 149.609 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 523.637 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="261.818"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="635.846"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 112.207 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 486.232 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="299.221"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="673.246"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 74.8066 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 448.832 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="336.623"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="710.648"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="748.053"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="785.455"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="822.857"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="860.26"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 37.4023 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 411.43 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="18.7012"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="392.727"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 355.326 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 729.352 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 766.752 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 804.156 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 841.559 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 878.961 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="56.1035"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="430.129"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 317.922 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 691.949 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="93.5059"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="467.533"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 280.52 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 654.545 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="130.91"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="504.936"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 243.117 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 617.143 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="168.312"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="542.338"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 205.713 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 579.74 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="205.713"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="579.74"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 168.312 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 542.338 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="243.117"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="617.143"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 130.91 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 504.936 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="280.52"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="654.545"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 93.5059 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 467.533 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="317.922"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="691.949"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 56.1035 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 430.129 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="355.326"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="729.352"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="766.752"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="804.156"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="841.559"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="878.961"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 18.7012 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 392.727 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="897.662"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="1271.69"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1271.69 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="935.064"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="1309.09"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1234.29 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="972.469"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="1346.49"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1196.88 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="1009.87"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="1383.89"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1159.48 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="1047.27"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      x="1421.3"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1122.08 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="1084.68"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1084.68 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="1122.08"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1047.27 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1421.3 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="1159.48"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1009.87 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1383.89 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="1196.88"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 972.469 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1346.49 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="1234.29"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 935.064 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1309.09 9.625)"
      fill="currentColor"
    ></rect>
    <rect
      x="916.363"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="1290.39"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1252.99 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="953.766"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="1327.79"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1215.58 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="991.168"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="1365.2"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1178.18 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="1028.57"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      x="1402.6"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1140.78 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="1065.97"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1103.38 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="1103.38"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1065.97 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1440 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="1140.78"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1028.57 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1402.6 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="1178.18"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 991.168 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1365.2 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="1215.58"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 953.766 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1327.79 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      x="1252.99"
      y="0.273438"
      width="18.7013"
      height="9.35065"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 916.363 9.625)"
      fill="#606D01"
    ></rect>
    <rect
      width="18.7013"
      height="9.35065"
      transform="matrix(-1 0 0 1 1290.39 9.625)"
      fill="#606D01"
    ></rect>
  </svg>
);
