"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Heroslider.css";
import Image from "next/image";
import image1 from "../../../../assets/banner/1.jpg";
import image2 from "../../../../assets/banner/2.jpg";
import image3 from "../../../../assets/banner/3.jpg";
import image4 from "../../../../assets/banner/4.jpg";
import { Container, Typography } from "@mui/material";

export default function Heroslider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });
  return (
    // <Container>
    <div
      ref={ref}
      className="keen-slider"
      style={{
        position: "relative",
      }}
    >
      <Image
        src={image1}
        alt="image1"
        className="keen-slider__slide base_slide number-slide"
      />
      <Image
        src={image2}
        alt="image2"
        className="keen-slider__slide base_slide number-slide"
      />
      <Image
        src={image3}
        alt="image3"
        className="keen-slider__slide base_slide number-slide"
      />
      <Image
        src={image4}
        alt="image4"
        className="keen-slider__slide base_slide number-slide"
      />
    </div>
    // </Container>
  );
}
