"use client";

import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface InternationalPhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  defaultCountry?: string;
}

export default function InternationalPhoneInput({
  value = "",
  onChange,
  placeholder = "Enter your phone number",
  defaultCountry = "eg",
}: InternationalPhoneInputProps) {
  return (
    <div className="international-phone-input-wrapper">
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
            "font-poppins flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm",
        }}
      />
    </div>
  );
}
