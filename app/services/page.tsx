"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function ServicesPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>
                <section className="relative h-screen sm:h-[70vh] md:h-[75vh] w-full overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="/LandingVideo.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                        <Image
                            src="/HeroPic.png"
                            alt="Hero background texture"
                            fill
                            className="object-cover opacity-100 animate-zoom-out md:translate-y-45 md:translate-x-[-30px] translate-y-20 translate-x-[-15px]"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white md:translate-y-[-10px] translate-y-[-40px] px-4">
                        <h2
                            className="mb-4 md:mb-5 max-w-5xl text-[32px] sm:text-[44px] md:text-[60px] font-bold capitalize leading-[1.2em] sm:leading-[1.3em] animate-zoom-in [font-family:'Poppins',Sans-serif] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)] [color:var(--e-global-color-blocksy_palette_8,#ffffff)]"
                            style={{ animationDelay: '400ms' }}
                        >
                            Our Services <br />
                            Check them out!
                        </h2>
                    </div>
                </section>
                <Services />
            </main>
            <Footer />
        </div>
    );
}
