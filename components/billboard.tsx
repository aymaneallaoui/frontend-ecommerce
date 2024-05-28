import { Billboard } from "@/types";
import React from "react";
import { H2 } from "./typography";

interface BillboardProps {
  data: Billboard;
}
const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className=" p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className=" relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover
         rounded-xl shadow-xl "
      >
        <div className=" h-full w-full flex flex-col justify-center items-center  text-center gap-y-8">
          <div className=" text-3xl lg:text-6xl sm:text-5xl sm:max-w-xl max-w-xs  font-extrabold text-[max(48px,min(2vw,76px))] leading-none -tracking-wider  inline-block  text-gray-900  ">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
