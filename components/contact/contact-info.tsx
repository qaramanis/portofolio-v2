"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

interface ContactInfoProps {
  address?: {
    line1: string;
    line2: string;
    line3: string;
  };
  phone?: string;
  email?: string;
  backgroundImage?: string;
}

export default function ContactInfoPanel({
  address = {
    line1: "University of Macedonia",
    line2: "156 Egnatia St,",
    line3: "Thessaloniki, 54636 GR",
  },
  phone = "+30 693 426 5802",
  email = "apostkaram@gmail.com",
  backgroundImage = "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop",
}: ContactInfoProps) {
  return (
    <div className="w-full h-full relative bg-primary text-white">
      <div
        className="absolute inset-0 bg-black/50 z-10"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-20 p-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6">Address</h2>
            <div className="flex items-start space-x-3">
              <MapPin
                className="mt-1 flex-shrink-0 text-primary-foreground/70"
                size={20}
              />
              <p className="text-primary-foreground/90">
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.line3}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Lets Talk</h2>
            <div className="flex items-center space-x-3">
              <Phone
                className="flex-shrink-0 text-primary-foreground/70"
                size={20}
              />
              <a
                href={`tel:${phone}`}
                className="text-primary-foreground/90 hover:text-white transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">General</h2>
            <div className="flex items-center space-x-3">
              <Mail
                className="flex-shrink-0 text-primary-foreground/70"
                size={20}
              />
              <a
                href={`mailto:${email}`}
                className="text-primary-foreground/90 hover:text-white transition-colors"
              >
                {email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
