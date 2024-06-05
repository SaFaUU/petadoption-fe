"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Heroslider.css";

export default function Heroslider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide base_slide number-slide1">1</div>
      <div className="keen-slider__slide base_slide number-slide2">2</div>
      <div className="keen-slider__slide base_slide number-slide3">3</div>
      <div className="keen-slider__slide base_slide number-slide4">4</div>
      <div className="keen-slider__slide base_slide number-slide5">5</div>
      <div className="keen-slider__slide base_slide number-slide6">6</div>
    </div>
  );
}
