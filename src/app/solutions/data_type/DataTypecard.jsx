"use client";

import React from "react";
import { dataType } from "../../data/trust"; // Ensure this path is correct
import Image from "next/image";

const DataTypecard = () => {
  return (
    <div className="widthclass">
      {dataType.map((item, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 items-center p-8 sm:p-16 2xl:p-16 ${
            index % 2 === 0 ? "bg-[#F4F4F4]" : ""
          }`}
        >
          <div className={`${index % 2 === 1 ? "md:order-last" : ""}`}>
            <h1 className="font-36 fontbold font-inter leading-10">
              {item.main}
            </h1>
            {item.Paragraph.map((para, paraIndex) => (
              <p
                key={paraIndex}
                className="font-16 font-inter font-normal leading-[20px] mt-10"
              >
                {para}
              </p>
            ))}
          </div>
          <div
            className={` flex justify-center mt-10 md:mt-0 ${
              index % 2 === 0 ? "md:justify-end" : ""
            }`}
          >
            <Image src={item.pic} alt="Card image" width={400} height={200} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataTypecard;
