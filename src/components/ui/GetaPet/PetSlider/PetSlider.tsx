"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./PetSlider.css";
import Image from "next/image";
import { Container, Typography } from "@mui/material";

export default function PetSlider({ imageUrl }: any) {
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
      {imageUrl.map((url: any, index: any) => (
        <Image
          src={url}
          alt="image1"
          key={index}
          className="keen-slider__slide base_slide number-slide"
          width={400}
          height={100}
          objectFit="cover"
        />
      ))}
    </div>
    // </Container>
  );
}
