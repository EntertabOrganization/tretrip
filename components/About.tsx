import Link from "next/link";
import Image from "next/image";
import { Sparkles, Users, Globe2 } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 overflow-hidden">
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
    );
}
