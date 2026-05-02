"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Home, Zap, Car } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const properties = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
        price: 1800,
        location: "Capitol Hill, Seattle, WA",
        beds: "Studio",
        amenities: ["Furnished", "Utilities Included", "Parking Available"]
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1502672260266-1c1de2d96674?auto=format&fit=crop&w=600&q=80",
        price: 2800,
        location: "Financial District, San Francisco, CA",
        beds: "1 Bedroom",
        amenities: ["Furnished", "Parking Available"]
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",
        price: 4500,
        location: "Lincoln Park, Chicago, IL",
        beds: "3 Bedrooms",
        amenities: ["Furnished", "Utilities Included", "Parking Available"]
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
        price: 2200,
        location: "Back Bay, Boston, MA",
        beds: "1 Bedroom",
        amenities: ["Furnished", "Utilities Included"]
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
        price: 3200,
        location: "Downtown, New York, NY",
        beds: "2 Bedrooms",
        amenities: ["Furnished", "Utilities Included"]
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
        price: 2600,
        location: "Downtown, Austin, TX",
        beds: "2 Bedrooms",
        amenities: ["Furnished", "Utilities Included", "Parking Available"]
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
        price: 3800,
        location: "Midtown, New York, NY",
        beds: "2 Bedrooms",
        amenities: ["Furnished"]
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        price: 3500,
        location: "Marina District, San Francisco, CA",
        beds: "2 Bedrooms",
        amenities: ["Furnished", "Utilities Included", "Parking Available"]
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=600&q=80",
        price: 1600,
        location: "River North, Chicago, IL",
        beds: "Studio",
        amenities: ["Furnished", "Utilities Included"]
    }
];

const getAmenityIcon = (name: string) => {
    if (name === "Furnished") return <Home className="w-[14px] h-[14px] text-gray-500" />;
    if (name === "Utilities Included") return <Zap className="w-[14px] h-[14px] text-gray-500" />;
    if (name === "Parking Available") return <Car className="w-[14px] h-[14px] text-gray-500" />;
    return null;
};

export default function SearchPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-1 w-full pt-28 pb-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10">

                    {/* Sidebar / Filters */}
                    <aside className="w-full md:w-[260px] flex-shrink-0">
                        <h2 className="font-poppins font-bold text-[18px] text-black mb-6">{t("housing.search.filters.title")}</h2>

                        {/* City / Area */}
                        <div className="mb-6">
                            <label className="block font-poppins text-[13px] font-medium text-gray-700 mb-2">{t("housing.search.filters.cityArea")}</label>
                            <div className="relative">
                                <select className="w-full font-poppins bg-[#F9FAFB] border border-[#E5E7EB] text-[#374151] text-[13px] rounded-lg px-4 py-2.5 appearance-none focus:outline-none focus:ring-1 focus:ring-[#00808C]">
                                    <option>{t("housing.search.filters.allCities")}</option>
                                    <option>Seattle, WA</option>
                                    <option>San Francisco, CA</option>
                                    <option>Chicago, IL</option>
                                    <option>Boston, MA</option>
                                    <option>New York, NY</option>
                                    <option>Austin, TX</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* Number of Bedrooms */}
                        <div className="mb-8">
                            <label className="block font-poppins text-[13px] font-medium text-gray-700 mb-2">{t("housing.search.filters.bedrooms")}</label>
                            <div className="relative">
                                <select className="w-full font-poppins bg-[#F9FAFB] border border-[#E5E7EB] text-[#374151] text-[13px] rounded-lg px-4 py-2.5 appearance-none focus:outline-none focus:ring-1 focus:ring-[#00808C]">
                                    <option>{t("housing.search.filters.any")}</option>
                                    <option>{t("housing.search.filters.studio")}</option>
                                    <option>{t("housing.search.filters.oneBed")}</option>
                                    <option>{t("housing.search.filters.twoBeds")}</option>
                                    <option>{t("housing.search.filters.threePlusBeds")}</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Budget */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <label className="font-poppins text-[13px] font-medium text-gray-700">{t("housing.search.filters.monthlyBudget")}</label>
                                <span className="font-poppins text-[12px] text-gray-500">$500 - $10,000</span>
                            </div>
                            <div className="relative h-[6px] bg-gray-200 rounded-full mt-2">
                                <div className="absolute left-0 right-0 h-full bg-[#00808C] rounded-full"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-[#00808C] rounded-full shadow-sm cursor-pointer"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-[#00808C] rounded-full shadow-sm cursor-pointer"></div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="mb-8">
                            <label className="block font-poppins text-[13px] font-medium text-gray-700 mb-3">{t("housing.search.filters.amenities")}</label>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="w-[18px] h-[18px] text-[#00808C] border-gray-300 rounded focus:ring-[#00808C]" />
                                    <span className="font-poppins text-[13px] text-gray-600">{t("housing.search.filters.parking")}</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="w-[18px] h-[18px] text-[#00808C] border-gray-300 rounded focus:ring-[#00808C]" />
                                    <span className="font-poppins text-[13px] text-gray-600">{t("housing.search.filters.petFriendly")}</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="w-[18px] h-[18px] text-[#00808C] border-gray-300 rounded focus:ring-[#00808C]" />
                                    <span className="font-poppins text-[13px] text-gray-600">{t("housing.search.filters.utilities")}</span>
                                </label>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <button className="w-full bg-[#00808C] text-white font-poppins font-semibold text-[13px] py-3 rounded-lg mb-3 hover:bg-[#006f7a] transition-colors shadow-sm uppercase">
                            {t("housing.search.filters.searchBtn")}
                        </button>
                        <button className="w-full bg-white border border-[#E5E7EB] text-[#374151] font-poppins font-medium text-[13px] py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                            {t("housing.search.filters.resetBtn")}
                        </button>
                    </aside>

                    {/* Main Content (Properties) */}
                    <div className="flex-1 w-full">

                        <div className="mb-6 border-b border-gray-100 pb-5">
                            <h1 className="font-space font-bold text-[32px] text-black mb-1">{t("housing.search.results.title")}</h1>
                            <p className="font-poppins text-[14px] text-gray-500">{t("housing.search.results.subtitle")}</p>
                        </div>

                        <div className="flex items-center gap-2 mb-6 text-gray-500 text-[13px] font-poppins">
                            <Search className="w-3.5 h-3.5" />
                            <span>9 {t("housing.search.results.propertiesAvailable")}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties.map((prop) => (
                                <div key={prop.id} className="border border-[#E5E7EB] rounded-[16px] bg-white overflow-hidden flex flex-col transition-all hover:shadow-md">
                                    <div className="relative aspect-[4/3] w-full bg-gray-100">
                                        <Image
                                            src={prop.image}
                                            alt={prop.location}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            priority={prop.id <= 6}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="mb-2">
                                            <span className="text-[#00808C] font-bold text-[22px] font-poppins">${prop.price.toLocaleString()}</span>
                                            <span className="text-gray-400 text-[13px] font-medium font-poppins"> {t("housing.search.results.perMonth")}</span>
                                        </div>
                                        <h3 className="font-poppins font-medium text-[15px] text-gray-800 leading-tight mb-1">
                                            {prop.location}
                                        </h3>
                                        <p className="text-[13px] text-gray-500 font-poppins mb-4">
                                            {prop.beds === "Studio" ? t("housing.search.filters.studio") : 
                                             prop.beds === "1 Bedroom" ? t("housing.search.filters.oneBed") :
                                             prop.beds === "2 Bedrooms" ? t("housing.search.filters.twoBeds") :
                                             prop.beds === "3 Bedrooms" ? t("housing.search.filters.threePlusBeds") : prop.beds}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {prop.amenities.map(amenity => {
                                                let amenityText = amenity;
                                                if (amenity === "Furnished") amenityText = t("housing.search.results.furnished");
                                                if (amenity === "Utilities Included") amenityText = t("housing.search.filters.utilities");
                                                if (amenity === "Parking Available") amenityText = t("housing.search.filters.parking");
                                                
                                                return (
                                                <span key={amenity} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F3F4F6] text-[11px] font-medium text-[#4A5565] font-poppins">
                                                    {getAmenityIcon(amenity)}
                                                    {amenityText}
                                                </span>
                                            )})}
                                        </div>

                                        <div className="mt-auto">
                                            <button className="w-full py-2.5 border border-[#E5E7EB] rounded-lg text-center text-[#374151] text-[13.5px] font-medium font-poppins transition-colors hover:bg-gray-50">
                                                {t("housing.search.results.viewDetails")}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
