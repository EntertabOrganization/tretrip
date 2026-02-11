import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CTA from "@/components/CTA";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <section className="bg-brand-primary py-20 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">About TreTrip</h1>
                        <p className="text-xl opacity-90">Crafting unforgettable experiences with excellence and care.</p>
                    </div>
                </section>
                <About />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
