/** @format */

import React from 'react';

const Banner = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full text-center bg-white pt-[130px] pb-32 md:pt-[190px]">
      <button className="bg-[#F2f4f7] rounded-xl w-fit px-3 py-1 font-semibold mb-10">
        👋 Meet Personally
      </button>
      <div className="lg:w-[54vw] w-[92vw]">
        <h3 className="md:text-[58px] text-[48px] md:leading-[65px] bg-clip-text bg-gradient-to-r from-[#C41740] to-[#EA9C28] text-transparent  font-bold text-[rgba(196, 23, 64, 1)]">
          Minimal blog template for creative expressions
        </h3>
        <p className="md:text-[31px] text-[30px] mt-2 text-[#475467]">
          100% customisable and SEO-friendly blog template for personal and
          commercial purposes.
        </p>
      </div>
    </div>
  );
};

export default Banner;
