import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <section className="h-[599px] w-screen  flex items-center bg-silver-1 px-[144px] pt-[96px]">
      <div className="flex flex-col items-start">
        <h1 className="text-[64px] font-semibold text-textColor-D_gray pb-[16px]">
          Lessons and insights{" "}
          <span className="text-primary">from 8 years</span>
        </h1>
        <p className="text-textColor-1 pb-[32px]">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-primary text-white text-[16px] py-[14px] px-[32px] rounded-[4px]">
            Register
        </button>
      </div>
      <Image
        src="/icons/Illustration.svg"
        alt="illustration"
        width={391}
        height={407}
      />
    </section>
  );
};

export default HeroPage;
