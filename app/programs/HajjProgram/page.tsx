"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HajjProgram() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20 flex-1">
                <section className="bg-brand-primary py-24 text-white text-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hajj Program</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">Coming soon.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
