"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCard {
  text: string;
  name: string;
  role: string;
  image: string;
}

interface WhatOurClientsSayProps {
  heading?: string;
  description: string;
  testimonials: TestimonialCard[];
  backgroundImage?: string;
}

export default function WhatOurClientsSay({
  heading = "What Our Clients Say",
  description,
  testimonials,
  backgroundImage,
}: WhatOurClientsSayProps) {
  return (
    <section
      className="py-16 md:py-24 relative"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White Overlay with Gradient Opacity */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark" style={{ fontWeight: 600, fontSize: "28px" }}>
            {heading}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontWeight: 400, fontSize: "21px" }}>
            {description}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-[12px] p-5 md:p-6"
              style={{
                boxShadow: "0px 4px 12px 0px #0000000A",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill="#FCC800" stroke="#FCC800" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-poppins italic text-[18px] md:text-[22px] leading-[1.4] text-black mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] relative rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-poppins text-[24px] font-bold text-brand-teal">
                    {testimonial.name}
                  </h4>
                  <span className="text-[13px] text-gray-500">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
