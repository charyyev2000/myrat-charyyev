import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/styles";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main");

    const locaScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal"
    });
  }, [start]);
}
