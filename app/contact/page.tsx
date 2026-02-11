import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <section className="bg-brand-primary py-20 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl opacity-90">We&apos;re here to help you plan your next adventure.</p>
                    </div>
                </section>

                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl font-bold text-brand-primary mb-8">Get In Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-50 p-4 rounded-xl text-brand-accent">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Call Us</p>
                                            <p className="font-semibold text-brand-primary">+1 (202) 991-2999</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-50 p-4 rounded-xl text-brand-accent">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email Us</p>
                                            <p className="font-semibold text-brand-primary">info@tretrip.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-50 p-4 rounded-xl text-brand-accent">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Our Office</p>
                                            <p className="font-semibold text-brand-primary">Washington D.C., USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all h-32" placeholder="Tell us about your trip..."></textarea>
                                    </div>
                                    <button className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition-all shadow-lg active:scale-95">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
