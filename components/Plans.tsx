"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Plans() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
                    Our Plans
                </h2>
                <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
            </div>

            <div className="flex justify-center items-center w-full px-4 overflow-x-auto">
                <div className="min-w-[1000px] lg:min-w-full flex justify-center">
                    {/* The SVG provided by the user is very large (10MB+). 
                        For optimal performance, it should be saved as a file in /public/plans.svg 
                        and loaded as an Image or <iframe>. 
                        
                        I will use a placeholder/wrapper here to show its position.
                    */}
                    <div className="relative w-full max-w-[1440px] aspect-[1440/732]">
                        <img
                            src="/plans.svg"
                            alt="Plans explanation"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
