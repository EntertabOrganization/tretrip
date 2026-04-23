"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import { useLanguage } from "@/context/LanguageContext";

function CounterNumber({ value, label }: { value: string; label: string }) {
    return (
        <div className="text-center">
            <span className="font-poppins text-[36px] md:text-[55px] font-semibold text-brand-teal leading-[1.4em] block">
                {value}
            </span>
            <span className="font-poppins text-[16px] md:text-[22px] font-medium text-brand-teal leading-[1.6em]">
                {label}
            </span>
        </div>
    );
}

export default function AboutPage() {
    const { t } = useLanguage();
    const clientReasons = [
        {
            name: "David Chen",
            role: "Business Tourism Client",
            text: "TreTrip handled every part of our corporate travel with precision and care. The experience felt organized, calm, and completely reliable.",
            image: "/Avatar-1.png",
        },
        {
            name: "Sarah Johnson",
            role: "Travel Tourism Client",
            text: "From planning to execution, the service was thoughtful and responsive. Our family trip felt easy from the very first conversation.",
            image: "/Avatar-2.png",
        },
        {
            name: "Ahmed Ali",
            role: "Medical Tourism Client",
            text: "TreTrip gave us confidence throughout a sensitive journey. Their coordination and attention to detail made a difficult process much easier.",
            image: "/Avatar-3.png",
        },
    ];

    const stats = [
        { value: "18+", label: t("about.stats.citiesLocal") },
        { value: "36+", label: t("about.stats.citiesGlobal") },
        { value: "100+", label: t("about.stats.satisfaction") },
        { value: "500+", label: t("about.stats.trips") },
    ];


    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="relative pt-20 overflow-hidden">
                <section
                    className="relative overflow-hidden min-h-[80vh] flex items-center text-white"
                    style={{
                        backgroundImage: "url(/AboutUsPage.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.4),rgba(0,0,0,0.15))]" />
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
                                About <span className="relative inline-block z-10">TreTrip
                                    <img
                                        src="https://tretrip.com/wp-content/uploads/2025/08/GOLD.svg"
                                        alt=""
                                        className="absolute bottom-2 left-0 w-full z-[-1] animate-pulse"
                                        aria-hidden="true"
                                    /></span>
                            </h1>
                            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                                Discover destinations with ease through curated trips designed for comfort, culture, and memorable experiences.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="about-story" className="relative py-16 md:py-24 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="w-full text-left">
                            <h2 className="font-space text-[28px] sm:text-[36px] md:text-[44px] font-bold text-brand-dark leading-[1.2] mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-5 text-[20px] leading-[25.59px] tracking-[0em] text-brand-secondary font-poppins font-normal">
                                <p>
                                    TreTrip was founded in the Washington D.C. metropolitan area with a clear vision: to simplify travel and logistics for people navigating complex journeys — whether personal, medical, professional, or spiritual. What began as a local effort to support underserved communities has grown into a comprehensive, global platform trusted by individuals, families, corporations, and institutions.
                                </p>
                                <p>
                                    Our mission is to provide seamless, reliable, and culturally aware services that go far beyond booking tickets or moving cargo. We specialize in travel tourism, medical travel coordination, business tourism, VIP transportation, shipping, logistics, event management, and exclusive programs.
                                </p>
                            </div>
                            <Image
                                src="/flightImage.png"
                                alt=""
                                width={920}
                                height={600}
                                className="absolute top-[-200px] right-[-320px] bottom-0 opacity-40 -scale-x-100 pointer-events-none select-none"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section
                    className="relative min-h-[80vh] py-16 flex flex-col items-center justify-center text-white overflow-hidden"
                    style={{
                        backgroundColor: "#00808C",
                        backgroundImage: "url(/coreValuesBg.png)",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="font-space text-[32px] sm:text-[40px] md:text-[50px] font-bold leading-tight">
                                Our Core Values
                            </h2>
                        </div>

                        {/* First Row: 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-16">
                            {[
                                { title: "Personalized Service", text: "We listen first, then design", image: "/values/1.png" },
                                { title: "Trusted & Rated Nationwide", text: "Our clients' voices guide us", image: "/values/2.png" },
                                { title: "Consistent Follow-Up", text: "We stay connected from start to finish", image: "/values/3.png" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center">
                                    <div className="w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center mb-5 shadow-sm relative">
                                        <div className="w-[80px] h-[80px] relative">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h4 className="font-space text-[20px] font-bold mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-[15px] sm:text-[16px] text-white/90 font-poppins max-w-[260px]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Second Row: 2 Cards */}
                        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24">
                            {[
                                { title: "Empathetic Approach", text: "Every plan reflects your needs, not just our systems", image: "/values/4.png" },
                                { title: "Always Ready", text: "We're equipped and committed, every time", image: "/values/5.png" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center">
                                    <div className="w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center mb-5 shadow-sm relative">
                                        <div className="w-[80px] h-[80px] relative">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h4 className="font-space text-[20px] font-bold mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-[15px] sm:text-[16px] text-white/90 font-poppins max-w-[260px]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                <section className="py-16 md:py-24 bg-[#F7F8F8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
                            <h3 className="font-space text-[24px] sm:text-[32px] md:text-[40px] font-bold text-brand-dark leading-[1.3] mb-4">
                                Why Clients Choose Us
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {clientReasons.map((client) => (
                                <div
                                    key={client.name}
                                    className="bg-white border border-gray-200 rounded-[12px] p-5 md:p-6"
                                    style={{ boxShadow: "0px 4px 12px 0px #0000000A" }}
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} size={22} fill="#FCC800" stroke="#FCC800" />
                                        ))}
                                    </div>
                                    <p className="font-poppins italic text-[18px] md:text-[22px] leading-[1.4] text-black mb-6">
                                        &ldquo;{client.text}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-[60px] h-[60px] relative rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                                            <Image
                                                src={client.image}
                                                alt={client.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-poppins text-[24px] font-bold text-brand-teal">
                                                {client.name}
                                            </h4>
                                            <span className="text-[13px] text-gray-500">
                                                {client.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Partners />
                {/* Stats Counter Box */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-light rounded-[20px] p-6 sm:p-8 md:p-[50px] mb-20 md:mb-[100px] animate-zoom-in relative overflow-hidden" style={{ animationDelay: "200ms" }}>
                        {/* Background decorative logo */}
                        <div className="absolute -bottom-12 -right-12 opacity-30 pointer-events-none">
                            <img
                                src="/AboutUsLogo.png"
                                alt=""
                                className="w-[80px] sm:w-[100px] md:w-[135px] h-auto"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
                            {stats.map((stat, idx) => (
                                <CounterNumber key={idx} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
