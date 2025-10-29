import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">About us</h2>
            <ul className="text-sm space-y-2">
              <p>
                Strong. Reliable. Resilient A celebration of resilience Our
                latest collection is more than just apparel—it's a tribute to
                the strength, courage, and stories of journalists and
                marginalized communities around the world.
              </p>
              <p>
                These designs are inspired by their unwavering determination,
                their ability to endure, and their spirit to rise unbroken
                despite the challenges they face.
              </p>
              <p>
                Every piece in this collection reflects our commitment to
                amplifying voices that matter and celebrating the resilience of
                those who inspire change.
              </p>
              <p>
                Explore the line, wear your support, and join us in honoring the
                unyielding spirit of humanity.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="max-w-[500px] w-full flex flex-col items-start justify-start md:justify-center">
          <Image className="w-20 md:w-9 mb-4" src={assets.logoo} alt="logoo" />
          <ul className="text-base/6 space-y-2 mt-2">
            <p>
              <p>HumAngle</p>
              Step into the world of fearless journalism with every item you
              wear or carry.
            </p>
            <p>
              From bold tees to thoughtful notebooks, every piece supports the
              pursuit of truth, justice, and impactful storytelling across
              Africa and beyond.
            </p>
          </ul>
        </div>

        <div className="flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p> 0905 484 4444</p>
              <p>contact @humanglemerch</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.tiktok.com/@humanglemerch?_t=ZM-8yGOWWizA9A&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com/share/16MiqJAzNX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/humanglemerch?igsh=aXU4bHluaWx5bTFu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-pink-500 transition-colors transform hover:scale-110 duration-200"
              >
                <FaInstagram />
              </a>
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
