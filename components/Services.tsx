import Link from "next/link";
import { MoveRight, HeartPulse, Briefcase, Truck, Ship, CalendarDays, Globe2 } from "lucide-react";

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

export default function Services() {
    return (
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
    );
}
