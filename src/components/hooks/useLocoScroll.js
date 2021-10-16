import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/styles";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(".home-header");

    const locaScroll = new locomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1
    });
  }, [start]);
}
