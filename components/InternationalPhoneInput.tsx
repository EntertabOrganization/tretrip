"use client";

import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface InternationalPhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  defaultCountry?: string;
  compact?: boolean;
}

export default function InternationalPhoneInput({
  value = "",
  onChange,
  placeholder = "Enter your phone number",
  defaultCountry = "us",
  compact = true,
}: InternationalPhoneInputProps) {
  return (
    <div className={`international-phone-input-wrapper ${compact ? "is-compact" : "is-regular"}`}>
      <PhoneInput
        defaultCountry={defaultCountry}
        value={value}
        onChange={(phone) => {
          if (onChange) {
            onChange(phone);
          }
        }}
        inputProps={{
          placeholder,
          className:
            compact
              ? "font-poppins h-9 flex-1 rounded-sm border border-gray-200 bg-white px-3 text-[11px] text-gray-800 transition placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
              : "font-poppins flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm",
        }}
      />
    </div>
  );
}
