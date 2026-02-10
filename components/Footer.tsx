import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tight">
                            TRE<span className="text-brand-accent">TRIP</span>
                        </Link>
                        <p className="text-gray-300 leading-relaxed font-light">
                            Your trusted travel partner, delivering personalized, seamless journeys across the globe. Whether you’re planning a vacation, a medical trip, or a corporate retreat.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-accent transition-colors"><Facebook size={18} /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-accent transition-colors"><Instagram size={18} /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-accent transition-colors"><Twitter size={18} /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-accent transition-colors"><Linkedin size={18} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-300 font-light">
                            <li><Link href="/services/travel" className="hover:text-brand-accent transition-colors">Travel Tourism</Link></li>
                            <li><Link href="/services/medical" className="hover:text-brand-accent transition-colors">Medical Tourism</Link></li>
                            <li><Link href="/services/business" className="hover:text-brand-accent transition-colors">Business Tourism</Link></li>
                            <li><Link href="/services/shipping" className="hover:text-brand-accent transition-colors">Shipping Services</Link></li>
                            <li><Link href="/services/transport" className="hover:text-brand-accent transition-colors">Transportation</Link></li>
                            <li><Link href="/services/events" className="hover:text-brand-accent transition-colors">Event Management</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-300 font-light">
                            <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
                            <li><Link href="/#programs" className="hover:text-brand-accent transition-colors">Programs</Link></li>
                            <li><Link href="/#testimonials" className="hover:text-brand-accent transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
                            <li><Link href="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
                            <li><Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            <a href="tel:+12029912999" className="flex items-center space-x-3 text-gray-300 hover:text-brand-accent transition-colors">
                                <Phone size={18} className="text-brand-accent" />
                                <span>+1 202 991-2999</span>
                            </a>
                            <a href="https://wa.me/12029046675" className="flex items-center space-x-3 text-gray-300 hover:text-brand-accent transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-brand-accent">
                                    <path d="M12.031 6.172c-2.31 0-4.188 1.878-4.188 4.188 0 .1.006.199.018.297l-1.874 1.875c-.19.19-.19.497 0 .687.19.19.497.19.687 0l1.83-1.83c.484.58 1.144.975 1.9.11l.006.006c.098.012.197.018.297.018 2.31 0 4.188-1.878 4.188-4.188s-1.878-4.188-4.188-4.188zm0 1.25c1.623 0 2.938 1.315 2.938 2.938s-1.315 2.938-2.938 2.938c-.12 0-.237-.01-.353-.027l-2.072 2.072c-.19.19-.19.497 0 .687a.487.487 0 0 0 .344.143c.124 0 .248-.047.344-.143l1.868-1.868c.084.02.17.031.257.031 2.31 0 4.188-1.878 4.188-4.188s-1.878-4.188-4.188-4.188zm-2.95 9.043c-3-3-4.125-7.188-3.375-10.875.11-.53.484-.968.984-1.157 1.047-.39 2.125.265 2.5 1.156.313.734.125 1.578-.453 2.125-.11.094-.219.203-.313.313l.001.001-.219.219-.001-.001c-.19.19-.19.497 0 .687.19.19.497.19.687 0l.219-.219-.001-.001.313-.313c.547-.578 1.391-.766 2.125-.453.89.375 1.547 1.453 1.156 2.5-.188.5-.625.875-1.156.984-3.687.75-7.875-.375-10.875-3.375l-.219-.219.001.001c-.19-.19-.19-.497 0-.687s.497-.19.687 0l-.001-.001.219.219z" />
                                </svg>
                                <span>+1 (202) 904-6675</span>
                            </a>
                            <a href="mailto:info@tretrip.com" className="flex items-center space-x-3 text-gray-300 hover:text-brand-accent transition-colors">
                                <Mail size={18} className="text-brand-accent" />
                                <span>info@tretrip.com</span>
                            </a>
                            <div className="flex items-start space-x-3 text-gray-300">
                                <MapPin size={18} className="mt-1 text-brand-accent flex-shrink-0" />
                                <span className="font-light">Washington DC, USA & Riyadh, KSA</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-sm font-light text-gray-400">
                    <p>© {new Date().getFullYear()} TreTrip. All rights reserved. Designed by <Link href="https://entertab.net/" className="text-white hover:text-brand-accent">Entertab</Link></p>
                </div>
            </div>
        </footer>
    );
}
