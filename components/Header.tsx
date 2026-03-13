"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { language, setLanguage, t, dir } = useLanguage();
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: t("nav.home") },
        { href: "/about", label: t("nav.about") },
        {
            href: "/services",
            label: t("nav.services"),
            hasChildren: true,
            items: [
                { href: "/services/travel", label: t("services.items.travel.title") },
                { href: "/services/business", label: t("services.items.business.title") },
                { href: "/services/events", label: t("services.items.events.title") },
                { href: "/services/medical", label: t("services.items.medical.title") },
                { href: "/services/shipping", label: t("services.items.shipping.title") },
                { href: "/services/transport", label: t("services.items.transport.title") },
            ]
        },
        {
            href: "/programs",
            label: t("nav.programs"),
            hasChildren: true,
            items: [
                { href: "/programs/hajj", label: t("programs.hajj.title") },
                { href: "/programs/kingdom", label: t("programs.kingdom.title") },
                { href: "/programs/usa", label: t("programs.usa.title") },
            ]
        },
        { href: "/contact", label: t("nav.contact") },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-7">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/Logo.png"
                                alt="TreTrip Logo"
                                width={200}
                                height={95}
                                className="h-[90px] w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-12">
                        {/* Navigation Links */}
                        <nav className="flex items-center font-medium">
                            <ul className="flex space-x-6 lg:space-x-8 items-center">
                                {navLinks.map((link) => (
                                    <li key={link.label} className="relative group/main py-10">
                                        <Link
                                            href={link.href}
                                            className={`${pathname === link.href ? 'text-brand-primary' : 'text-brand-secondary'} hover:text-brand-primary transition-colors text-[18px] font-medium leading-none flex items-center gap-1 group`}
                                        >
                                            {link.label}
                                            {link.hasChildren && <ChevronDown size={18} className="text-brand-primary/60 group-hover:text-brand-primary transition-transform group-hover:rotate-180" />}
                                            <span className={`absolute bottom-6 left-0 h-0.5 bg-brand-primary transition-all duration-500 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                        </Link>

                                        {link.items && (
                                            <ul className={`absolute ${dir === 'rtl' ? 'right-0' : 'left-0'} top-full bg-white border border-gray-100 shadow-xl rounded-xl py-2 min-w-[280px] opacity-0 invisible translate-y-2 group-hover/main:opacity-100 group-hover/main:visible group-hover/main:translate-y-0 transition-all duration-300 z-50`}>
                                                {link.items.map((subItem) => (
                                                    <li key={subItem.label}>
                                                        <Link
                                                            href={subItem.href}
                                                            className="block px-6 py-3 text-[16px] text-brand-secondary hover:text-brand-primary hover:bg-brand-primary/5 transition-all"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Language Switcher */}
                        <div className="relative group">
                            <button className="flex items-center text-brand-primary transition-colors py-2 outline-none">
                                <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-12">
                                    <path d="M1.62078 32V18H10.6208V20.4H4.26078V23.74H10.0608V26.14H4.26078V29.6H10.7408V32H1.62078ZM12.775 32V22.08H15.255V23.38H15.615C15.775 23.0333 16.075 22.7067 16.515 22.4C16.955 22.08 17.6217 21.92 18.515 21.92C19.2883 21.92 19.9617 22.1 20.535 22.46C21.1217 22.8067 21.575 23.2933 21.895 23.92C22.215 24.5333 22.375 25.2533 22.375 26.08V32H19.855V26.28C19.855 25.5333 19.6683 24.9733 19.295 24.6C18.935 24.2267 18.415 24.04 17.735 24.04C16.9617 24.04 16.3617 24.3 15.935 24.82C15.5083 25.3267 15.295 26.04 15.295 26.96V32H12.775Z" fill="currentColor" />
                                    <path d="M39.4997 22.5L30.4994 22.5C30.4083 22.5002 30.319 22.517 30.2411 22.5485C30.1632 22.5801 30.0997 22.6253 30.0573 22.6792C30.015 22.7331 29.9955 22.7936 30.0009 22.8544C30.0063 22.9151 30.0364 22.9738 30.0879 23.0239L34.5881 27.365C34.7746 27.545 35.2236 27.545 35.4106 27.365L39.9107 23.0239C39.9628 22.9739 39.9933 22.9152 39.999 22.8544C40.0047 22.7935 39.9853 22.7328 39.943 22.6788C39.9006 22.6248 39.8369 22.5796 39.7587 22.548C39.6806 22.5165 39.591 22.4999 39.4997 22.5Z" fill="currentColor" />
                                </svg>
                            </button>
                            <div className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} mt-0 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
                                <div className="py-1">
                                    <button
                                        onClick={() => setLanguage("en")}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'en' ? 'text-brand-primary font-bold' : 'text-brand-secondary'}`}
                                    >
                                        English (EN)
                                    </button>
                                    <button
                                        onClick={() => setLanguage("ar")}
                                        className={`block w-full px-4 py-2 text-sm hover:bg-gray-100 font-arabic ${language === 'ar' ? 'text-brand-primary font-bold' : 'text-brand-secondary'} ${dir === 'rtl' ? 'text-left' : 'text-right'}`}
                                        dir="rtl"
                                    >
                                        العربية (AR)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center ml-2">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-secondary">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 absolute top-20 left-0 w-full animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <React.Fragment key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => !link.hasChildren && setIsMenuOpen(false)}
                                    className={`block px-3 py-4 text-[18px] font-medium leading-none ${pathname === link.href ? 'text-brand-primary bg-brand-primary/5 border-l-4 rtl:border-r-4 rtl:border-l-0 border-brand-primary' : 'text-brand-secondary border-l-4 rtl:border-r-4 rtl:border-l-0 border-transparent'} hover:bg-gray-50 hover:text-brand-primary flex items-center justify-between`}
                                >
                                    {link.label}
                                    {link.hasChildren && <ChevronDown size={20} />}
                                </Link>
                                {link.items && (
                                    <div className="pl-6 rtl:pr-6 rtl:pl-0 space-y-1 bg-gray-50 py-2">
                                        {link.items.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block px-3 py-3 text-[16px] text-brand-secondary hover:text-brand-primary"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                        <div className="flex items-center justify-between px-3 py-4 border-t border-gray-100 mt-4">
                            <span className="text-base font-medium text-brand-primary">Language</span>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => { setLanguage("en"); setIsMenuOpen(false); }}
                                    className={`${language === 'en' ? 'text-brand-primary font-bold' : 'text-brand-primary/60'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => { setLanguage("ar"); setIsMenuOpen(false); }}
                                    className={`font-arabic ${language === 'ar' ? 'text-brand-primary font-bold' : 'text-brand-primary/60'}`}
                                >
                                    AR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
