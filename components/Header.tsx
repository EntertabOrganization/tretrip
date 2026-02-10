import React from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-brand-primary tracking-tight">
                            TRE<span className="text-brand-accent">TRIP</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">Home</Link>
                        <Link href="/about" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">About</Link>
                        <div className="group relative">
                            <button className="text-gray-700 hover:text-brand-accent font-medium transition-colors outline-none">Services</button>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-1">
                                    <Link href="/services/travel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Travel Tourism</Link>
                                    <Link href="/services/medical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Medical Tourism</Link>
                                    <Link href="/services/business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Business Tourism</Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/programs" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">Programs</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">Contact</Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="tel:+12029912999" className="p-2 text-brand-primary hover:text-brand-accent transition-colors">
                            <Phone size={20} />
                        </Link>
                        <Link href="/contact" className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg active:scale-95">
                            Start Journey
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 absolute top-20 left-0 w-full animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <Link href="/" className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
                        <Link href="/about" className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50">About</Link>
                        <Link href="/services" className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50">Services</Link>
                        <Link href="/programs" className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50">Programs</Link>
                        <Link href="/contact" className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50">Contact</Link>
                        <div className="pt-4 px-3">
                            <Link href="/contact" className="block w-full text-center bg-brand-primary text-white px-6 py-3 rounded-full font-medium">
                                Start Journey
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
