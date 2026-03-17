"use client";

import Image from "next/image";
import React from "react";

interface ServiceContentProps {
  heading: React.ReactNode;
  description: React.ReactNode;
  images: string[]; // Array of 4 image URLs for 2x2 grid
  layout?: "image-left" | "image-right"; // Position of images
}

export default function ServiceContent({
  heading,
  description,
  images,
  layout = "image-left",
}: ServiceContentProps) {
  const imageGrid = (
    <div className="flex gap-3 sm:gap-4">
      {/* Large horizontal image on the left */}
      <div className="relative rounded-lg overflow-hidden flex-1" style={{ height: "442px", borderRadius: "8px" }}>
        <Image
          src={images[0]}
          alt="Service image 1"
          fill
          className="object-cover"
        />
      </div>
      {/* Two images stacked on the right */}
      <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "269.34375px", height: "442px" }}>
        <div className="relative rounded-lg overflow-hidden" style={{ width: "290.0625px", height: "214.09375px", borderRadius: "8px" }}>
          <Image
            src={images[1]}
            alt="Service image 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-lg overflow-hidden" style={{ width: "290.0625px", height: "214.09375px", borderRadius: "8px" }}>
          <Image
            src={images[2]}
            alt="Service image 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );

  const textContent = (
    <div>
      <h2 className="mb-6 text-brand-dark" style={{ fontWeight: 600, fontSize: "28px", verticalAlign: "middle" }}>
        {heading}
      </h2>
      <div className="space-y-4 text-gray-600">
        {typeof description === "string" ? (
          <p style={{ fontWeight: 400, fontSize: "19.59px", lineHeight: "1.5", marginBottom: "20px" }}>{description}</p>
        ) : (
          <div style={{ fontWeight: 400, fontSize: "19.59px", lineHeight: "1.5" }}>
            <style>{`
              div[data-service-description] > p:first-child {
                margin-bottom: 20px;
              }
            `}</style>
            <div data-service-description>{description}</div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${layout === "image-right" ? "md:grid-flow-dense" : ""}`}>
          {layout === "image-left" ? (
            <>
              {imageGrid}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageGrid}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
