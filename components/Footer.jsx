import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-20 md:w-15" src={assets.logoo} alt="logoo" />
          <p className="mt-6 text-sm">
            "HumAngle" Step into the world of fearless journalism with every
            item you wear or carry. From bold tees to thoughtful notebooks,
            every piece supports the pursuit of truth, justice, and impactful
            storytelling across Africa and beyond.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">About us</h2>
            <ul className="text-sm space-y-2">
              <p>
                Strong, Reliable and Resilient A celebration of resilience Our
                latest collection is more than just apparel—it's a tribute to
                the strength, courage, and stories of journalists and
                marginalized communities around the world. These designs are
                inspired by their unwavering determination, their ability to
                endure, and their spirit to rise unbroken despite the challenges
                they face. Every piece in this collection reflects our
                commitment to amplifying voices that matter and celebrating the
                resilience of those who inspire change. Explore the line, wear
                your support, and join us in honoring the unyielding spirit of
                humanity
              </p>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@greatstack.dev</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © HumAngle All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
