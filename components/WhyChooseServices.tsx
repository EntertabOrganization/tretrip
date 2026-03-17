"use client";

import React from "react";

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
}

interface WhyChooseServicesProps {
  heading: string;
  items: WhyChooseItem[];
}

export default function WhyChooseServices({
  heading,
  items,
}: WhyChooseServicesProps) {
  return (
    <section className="mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center mb-12" style={{ color: "#101828", fontWeight: 600, fontSize: "28px", textAlign: "center", verticalAlign: "middle" }}>
          {heading}
        </h2>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="mb-6 flex items-center justify-center h-16 w-16">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-center" style={{ fontWeight: 400, fontStyle: "italic", fontSize: "20px", textAlign: "center", verticalAlign: "middle" }}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
