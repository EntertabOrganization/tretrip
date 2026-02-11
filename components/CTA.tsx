import Link from "next/link";

export default function CTA() {
    return (
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
                        className="bg-white text-brand-accent px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-gray-50 flex items-center justify-center"
                    >
                        <span>Chat on WhatsApp</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
