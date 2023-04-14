import React from 'react'

const DesignBanner = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full text-center bg-white pt-[130px] pb-36 md:pt-[190px]">
      <div className="lg:w-[50vw] w-[92vw]">
        <h3 className="md:text-[58px] text-[48px] bg-clip-text bg-gradient-to-r from-[#C41740] to-[#EA9C28] text-transparent  font-bold text-[rgba(196, 23, 64, 1)]">
          Daily Tools
        </h3>
        <p className="md:text-[28px] text-[30px] mt-2 text-[#475467]">
          A description of the respective category goes right here. Be as
          expressive as possible, but in brief.
        </p>
      </div>
    </div>
  );
}

export default DesignBanner