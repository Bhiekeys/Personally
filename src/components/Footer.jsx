/** @format */

import React from 'react';

const Footer = () => {
  return (
    <div className="grid justify-center items-center text-center py-10">
      <div className="md:w-[50vw] w-[90vw]">
        <h2 className="bg-clip-text bg-gradient-to-r from-[#C41740] to-[#EA9C28] text-transparent font-semibold text-[25px] md:text-[35px]">
          Personally Newsletter
        </h2>
        <p className="text-[#475467] text-lg mt-2 md:text-[26px]">
          A bi-weekly newsletter of design inspiration, resources and anything
          related to career development.
        </p>
      </div>
      <div className="flex justify-center mt-8 items-center">
        <input
          className="outline-none border rounded-l-lg md:pr-20 pl-4 py-2 md:py-4"
          type="email"
          placeholder="Email address"
        />
        <button className="bg-[#1D2939] rounded-r-lg text-white py-2 md:py-4 px-4 md:px-8 font-semibold md:text-xl">
          Subscribe
        </button>
      </div>
      <p className="text-[#1D2939] font-medium mt-20">
        Copyright 2021 - Elikem Daniels
      </p>
    </div>
  );
};

export default Footer;
