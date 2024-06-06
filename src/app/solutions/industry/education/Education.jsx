import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import Educationcard from "./Educationcard"
const Education = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-8 sm:p-16 2xl:p-10">
          <div className="flex items-center">
            <h1 className="pt-16 font-20 black font-normal font-inter">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50">
                &gt; Solutions &gt; Industries &gt; Education
              </span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 items-center mt-10">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
              Education
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              AI revolutionizes teaching and learning experiences, providing personalized education and adaptive learning tools. However, to ensure equity and quality education for all, diligent oversight is essential to address concerns such as data privacy and algorithmic biases.
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
              <img src="/education.png" alt="moni" />
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
            Empower Your Education Efforts <br /> with AI Model Monitoring
            </h1>
            <p className="font-24 font-inter font-normal leading-8 mt-5 opacity-60">
            In today's educational landscape, building trust and transparency in <br /> AI-powered systems is vital.

            </p>
          </div>
        </div>
      </div>


      <div className="mb-36">
        <div>
          <Educationcard/>
        </div>
      </div>
    </div>
  );
};

export default Education;
