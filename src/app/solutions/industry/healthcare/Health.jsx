import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import Healthcard from "./Healthcard"
const Finance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-8 sm:p-16 2xl:p-10">
          <div className="flex items-center">
            <h1 className="pt-16 font-20 black font-normal font-inter">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50">
                &gt; Solutions &gt; Industries &gt; Healthcare
              </span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
                Healthcare
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              AI fuels innovation in healthcare, refining diagnostics, treatments, and patient outcomes. To uphold patient safety and confidence, thorough monitoring is paramount, ensuring that AI algorithms are ethically developed, transparent, and accountable.
              </p>
              <Link
                href="/Demo"
                className="font-20 font-normal font-inter leading-6 bg-[#042440] white rounded-[8px] w-[214px] h-[52px] flex gap-3 justify-center   items-center"
              >
                Book a Demo
                <img src="/free.png" className="w-[26px]" alt="" />
              </Link>
            </div>
            <div className="flex justify-end items-end">
              <img src="/insurance.png" alt="moni" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0424400A]">
        <Feature />
      </div>

      <div className="bg-[#042440]">
        <div className="widthclass">  
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16 white">
            <h1 className="font-36 font-inter font-bold leading-10">
            Revolutionize Your Healthcare <br /> Operations with AI <br /> Model Monitoring
            </h1>
            <p className="font-24 font-inter font-normal leading-8 mt-5 opacity-60">
            In the ever-evolving realm of healthcare, ensuring the reliability and <br /> transparency of AI-powered systems is paramount to delivering <br /> exceptional patient care and maintaining trust within the industry.
            </p>
          </div>
        </div>
      </div>


      <div className="mb-36">
        <div>
          <Healthcard/>
        </div>
      </div>
    </div>
  );
};

export default Finance;
