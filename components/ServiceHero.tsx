"use client";

import React from "react";

interface ServiceHeroProps {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
  backgroundPosition?: string;
}

export default function ServiceHero({
  image,
  title,
  description,
  backgroundPosition = "center",
}: ServiceHeroProps) {
  return (
    <section
      className="relative w-full h-full flex items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition,
        height: "70vh",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl opacity-90">
          {description}
        </p>
      </div>
    </section>
  );
}
