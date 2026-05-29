"use client";

import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

export default function PaymentRequestUI() {
  const [name, setName] = useState("Chetan Sharma");
  const [upiId, setUpiId] = useState("8529112775@ikwik");

  // initials generate
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="min-h-screen w-full bg-[#efefef] overflow-y-auto"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* Back Arrow */}
      <div className="pt-11 px-3 ">
        <button>
          <GoArrowLeft className="text-[#3d3d3d] text-[27px]" />
        </button>
      </div>

      {/* Card Wrapper */}
      <div className="flex justify-center mt-[270px] px-3">
        
        <div className="relative w-full max-w-[760px] bg-[#f8f8f8] rounded-[28px] px-5 pt-[62px] pb-5">
          
          {/* Top Circle */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-[40px]">
            <div className="w-[82px] h-[82px] rounded-full bg-[#eedcf2] border-[4px] border-[#ececec] flex items-center justify-center">
              
              <span
                className="text-[#91449d] text-[20px] font-[700] tracking-[0.5px]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {initials}
              </span>
            </div>
          </div>

          {/* UPI ID */}
          <h1
            className="text-center text-[18px] leading-none tracking-wide font-[700] text-[#171717] break-all"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {upiId}
          </h1>

          {/* Business Box */}
          <div className="mt-3 bg-[#eef2f6] rounded-[22px] py-3 px-4">
            
            <p
              className="text-center text-[16px] tracking-wide text-[#787878] font-[400] leading-none"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Business Name
            </p>

            <h2
              className="text-center tracking-wide text-[17px] font-[700] text-[#1d1d1d] mt-1 leading-none break-words"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {name}
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="px-8 mt-3 flex justify-center">
        <p
          className="max-w-[760px] text-center text-[#3f3f3f] text-[12px] leading-[17px] font-[500]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          This merchant receives money through payment requests. To pay again,
          please visit their app/website.
        </p>
      </div>

      {/* Bottom Inputs */}
      <div className="mt-[500px] px-5 pb-10">
        
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="w-full h-[56px] rounded-[18px] px-5 text-[16px] font-[500] bg-white outline-none border border-[#dcdcdc]"
          />

          {/* UPI Input */}
          <input
            type="text"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="w-full h-[56px] rounded-[18px] px-5 text-[16px] font-[500] bg-white outline-none border border-[#dcdcdc]"
          />
        </div>
      </div>
    </div>
  );
}