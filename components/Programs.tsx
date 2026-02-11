import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const programsData = [
    {
        title: "Hajj and Umrah",
        description: "Spiritually enriching journeys with comprehensive support and premium amenities.",
        image: "/api/placeholder/600/400",
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

export default function Programs() {
    return (
        <section id="programs" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore Our Programs</h2>
                <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programsData.map((program, idx) => (
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
    );
}
