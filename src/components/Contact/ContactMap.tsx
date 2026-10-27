"use client";

import React from "react";
import { MotionDiv } from "@/components/framer-motion";
import { CONTACT_DETAILS } from "@/constants/contact";
import { MapPinIcon, GlobeAltIcon, ArrowRightIcon } from "@/components/ui/icons";

export default function ContactMap() {
  const regionalHubs = [
    { city: "New York, USA", role: "Global HQ & Sales", address: "750 Lexington Ave, 14th Fl" },
    { city: "London, UK", role: "EMEA Operations", address: "1 Canada Square, Canary Wharf" },
    { city: "Singapore", role: "APAC Regional Hub", address: "Marina Bay Financial Centre" },
    { city: "Colombo, LK", role: "Engineering & R&D", address: "World Trade Center, West Tower" },
  ];

  return (
    <section className="relative w-full bg-[#f8fbff] pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Global Presence
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Visit Our Executive Briefing Center
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Located in Midtown Manhattan with easy access via Lexington Ave / 59th St transit hubs.
            </p>
          </div>

          <a
            href={CONTACT_DETAILS.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
          >
            <span>Get Directions on Google Maps</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Map Container */}
        <MotionDiv delay={0.1} yOffset={25}>
          <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 group bg-slate-100">
            {/* Google Maps Embed iframe */}
            <iframe
              src="https://maps.google.com/maps?q=750+Lexington+Avenue+New+York+NY&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PeoplesHR Headquarters Location - 750 Lexington Ave, New York"
              className="grayscale contrast-105 opacity-90 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />

            {/* Floating Top Right Button */}
            <div className="absolute top-4 right-4 z-10">
              <a
                href={CONTACT_DETAILS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-800 shadow-md hover:bg-primary hover:text-white transition-all duration-200 border border-slate-200"
              >
                <MapPinIcon className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Bottom Floating Card for Transit Info */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-200/90">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-primary shrink-0">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    PeoplesHR Headquarters
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {CONTACT_DETAILS.fullAddress}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Subway: 59th St – Lexington Ave (N, R, W, 4, 5, 6)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Global Regional Hubs Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regionalHubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <GlobeAltIcon className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-bold text-slate-900">{hub.city}</h4>
              </div>
              <p className="text-xs font-semibold text-primary">{hub.role}</p>
              <p className="text-[11.5px] text-slate-500 mt-1">{hub.address}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
