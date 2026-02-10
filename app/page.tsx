"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, HeartPulse, Briefcase, Truck, Ship, CalendarDays, Users, Globe2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Travel Tourism",
    description: "Explore breathtaking destinations with tailored itineraries designed for your comfort and joy.",
    icon: <Globe2 className="w-8 h-8 text-brand-accent" />,
    link: "/services/travel",
  },
  {
    title: "Medical Tourism",
    description: "Access world-class healthcare combined with premium travel arrangements for your peace of mind.",
    icon: <HeartPulse className="w-8 h-8 text-brand-accent" />,
    link: "/services/medical",
  },
  {
    title: "Business Tourism",
    description: "Seamless corporate travel, from meetings to retreats, ensuring productivity and luxury.",
    icon: <Briefcase className="w-8 h-8 text-brand-accent" />,
    link: "/services/business",
  },
  {
    title: "Transportation Service",
    description: "Reliable and high-end transport solutions for individuals and groups, whenever you need them.",
    icon: <Truck className="w-8 h-8 text-brand-accent" />,
    link: "/services/transportation",
  },
  {
    title: "Shipping Service",
    description: "Efficient global shipping logistics managed with precision and care for your cargo.",
    icon: <Ship className="w-8 h-8 text-brand-accent" />,
    link: "/services/shipping",
  },
  {
    title: "Event Management",
    description: "From concept to execution, we create unforgettable events that leave a lasting impression.",
    icon: <CalendarDays className="w-8 h-8 text-brand-accent" />,
    link: "/services/events",
  },
];

const programs = [
  {
    title: "Hajj and Umrah",
    description: "Spiritually enriching journeys with comprehensive support and premium amenities.",
    image: "/api/placeholder/600/400", // Fallback for now
  },
  {
    title: "Explore The Kingdom",
    description: "Discover Saudi Arabia’s heritage, landscapes, and new wonders with expert guides.",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Explore The USA",
    description: "Iconic cities, national parks, and tailored US adventures for every traveler.",
    image: "/api/placeholder/600/400",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/landing-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl tracking-tight">
              Unforgettable trips, <span className="text-brand-accent">expertly planned</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light opacity-90">
              We tailor trips to your mood, relaxing, thrilling, or cultural. All logistics managed with care.
            </p>
            <Link
              href="/contact"
              className="bg-brand-accent hover:bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Start Your Journey
            </Link>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4 italic">
              Professional Travel Services For You
            </h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="mb-6 bg-orange-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.link}
                    className="flex items-center text-brand-secondary font-medium hover:text-brand-accent group"
                  >
                    <span>Explore</span>
                    <MoveRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/api/placeholder/800/600"
                    alt="TreTrip Experience"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-0"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0"></div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
                  Learn About TreTrip
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  TreTrip is your trusted travel partner, delivering personalized, seamless journeys across the globe. Whether you’re planning a vacation, a medical trip, or a corporate retreat — we ensure every detail is taken care of.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-accent p-1.5 rounded-full text-white"><Sparkles size={16} /></div>
                    <span className="font-medium">Tailored itineraries for every mood</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-accent p-1.5 rounded-full text-white"><Users size={16} /></div>
                    <span className="font-medium">Professional and reliable service</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-accent p-1.5 rounded-full text-white"><Globe2 size={16} /></div>
                    <span className="font-medium">Global reach with local expertise</span>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-secondary transition-colors"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore Our Programs</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, idx) => (
                <div
                  key={idx}
                  className="group relative h-[450px] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-gray-300 mb-6 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      {program.description}
                    </p>
                    <Link
                      href="#"
                      className="text-brand-accent font-semibold flex items-center group-hover:underline"
                    >
                      <span>Explore</span>
                      <MoveRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4 italic">
              What Clients say about TreTrip
            </h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "David Chen", role: "Business Tourism Client", text: "Professional, reliable, and exceptional service. TreTrip handled our corporate trip flawlessly." },
                { name: "Sarah Johnson", role: "Travel Tourism Client", text: "Thanks to TreTrip, our family vacation was stress-free and unforgettable. Highly recommend!" },
                { name: "Ahmed Ali", role: "Medical Tourism Client", text: "Their medical tourism package was affordable and organized. We felt safe and well taken care of." }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                  <p className="text-gray-600 mb-8 italic leading-relaxed">&quot;{t.text}&quot;</p>
                  <div>
                    <h4 className="text-lg font-bold text-brand-primary">{t.name}</h4>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-brand-accent text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Plan Your Next Trip</h2>
            <p className="text-xl mb-10 font-light opacity-90">
              Whether you&apos;re traveling for health, work, or exploration — we&apos;re here to make it effortless
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-primary text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-brand-secondary inline-block"
              >
                Contact Us
              </Link>
              <Link
                href="https://wa.me/12029046675"
                className="bg-white text-brand-accent px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-gray-50 flex items-center"
              >
                <span>Chat on WhatsApp</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
