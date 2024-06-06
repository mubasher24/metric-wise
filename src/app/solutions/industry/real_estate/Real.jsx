import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import Realcard from "./Realcard"
const Finance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-8 sm:p-16 2xl:p-10">
          <div className="flex items-center">
            <h1 className="pt-16 font-20 black font-normal font-inter">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50">
                &gt; Solutions &gt; Industries &gt; Real Estate
              </span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
                Real Estate
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              AI transforms property management and investment decisions, optimizing processes and maximizing returns. However, effective oversight is crucial to mitigate risks such as data privacy breaches and algorithmic biases.
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
              <img src="/estate.png" alt="moni" />
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
            Transform Your Real Estate <br /> Strategy with AI Model Monitoring
            </h1>
            <p className="font-24 font-inter font-normal leading-8 mt-5 opacity-60">
            In the ever-evolving realm of healthcare, ensuring the reliability and <br /> transparency of AI-powered systems is paramount to delivering <br /> exceptional patient care and maintaining trust within the industry.
            </p>
          </div>
        </div>
      </div>


      <div className="mb-36">
        <div>
          <Realcard/>
        </div>
      </div>
    </div>
  );
};

export default Finance;