import React from "react";
import Image from "next/image";

import Style from "@styles/components/scroll.module.scss";

const IMAGES = [
  "sample1.webp",
  "sample2.webp",
  "sample3.webp",
  "sample4.webp",
  "sample5.webp",
];

export const VerticalScroll: React.FC = () => {
  return (
    <ul className={Style["vertical"]}>
      {IMAGES.map((item, i) => {
        return (
          <Image
            src={`/images/${item}`}
            alt="サンプル画像"
            className={Style["image"]}
            width={1440}
            height={960}
            priority
            key={i}
          />
        );
      })}
    </ul>
  );
};

export const HorizontalScroll: React.FC = () => {
  return (
    <ul className={Style["horizontal"]}>
      {IMAGES.map((item, i) => {
        return (
          <Image
            src={`/images/${item}`}
            alt="サンプル画像"
            className={Style["image"]}
            width={1440}
            height={960}
            priority
            key={i}
          />
        );
      })}
    </ul>
  );
};
