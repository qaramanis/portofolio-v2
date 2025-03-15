"use client";

import React from "react";
import ContactForm, {
  ContactFormValues,
} from "@/components/contact/contact-form";
import ContactInfoPanel from "./contact-info";

export default function Contact() {
  const handleFormSubmit = async (values: ContactFormValues) => {
    // Here you can implement your form submission logic
    console.log("Form submitted:", values);

    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Get in touch</h1>
        <h2 className="text-muted-foreground text-lg">
          Let&apos;s collaborate to create the perfect online presence{" "}
          <span className="bg-gradient-to-r from-red-600 via-blue-500 to-red-600 text-transparent bg-clip-text whitespace-nowrap gradient-text-animated">
            tailored to your needs
          </span>{" "}
        </h2>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5">
            <ContactInfoPanel />
          </div>

          <div className="w-full md:w-3/5 bg-card p-8 md:p-12">
            <ContactForm onSubmit={handleFormSubmit} title="" />
          </div>
        </div>
      </div>
    </div>
  );
}
