import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import Vehiclecard from "./Vehiclecard"
const Vehicle = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-8 sm:p-16 2xl:p-10">
          <div className="flex items-center">
            <h1 className="pt-16 font-20 black font-normal font-inter">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50">
                &gt; Solutions &gt; Industries &gt; Autonomous Vehicles
              </span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
              Autonomous Vehicles
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              AI revolutionizes transportation with autonomous vehicles, enhancing safety and efficiency on the roads. However, effective oversight is critical to mitigate risks such as system malfunctions and ethical dilemmas.
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
              <img src="/vehicle.png" alt="moni" />
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
            Accelerate Your Autonomous Vehicle <br /> Innovation with AI Model Monitoring
            </h1>
            <p className="font-24 font-inter font-normal leading-8 mt-5 opacity-60">
            In the rapidly evolving realm of autonomous vehicles, trust and safety <br /> are paramount. Our platform is designed to empower autonomous <br /> vehicle companies by providing real-time observability and monitoring <br /> of AI models and data, ensuring the reliability and ethical integrity of <br /> every decision made by autonomous systems.
            </p>
          </div>
        </div>
      </div>


      <div className="mb-36">
        <div>
          <Vehiclecard/>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
