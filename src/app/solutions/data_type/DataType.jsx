import Link from "next/link";
import React from "react";
import DataTypecard from "./DataTypecard"
const DataType = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-8 sm:p-16 2xl:p-10">
          <div className="flex items-center">
            <h1 className="pt-16 font-20 black font-normal font-inter">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50">
                &gt; Solutions &gt; Industries &gt; Data Type
              </span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
              Data Type
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              A data type is an attribute associated with a piece of data that tells a computer system how to interpret its value. Understanding data types ensures that data is collected in the preferred format and the value of each property is as expected.
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
              <img src="/finance.png" alt="moni" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-36">
        <div>
          <DataTypecard/>
        </div>
      </div>
    </div>
  );
};

export default DataType;
