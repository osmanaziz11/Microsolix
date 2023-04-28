import { Manrope } from 'next/font/google';
import React from 'react';

const Awards = () => {
  return (
    <>
      <div className="relative w-full h-[180px] ">
        <img
          src="https://res.cloudinary.com/ozecloud/image/upload/v1681259637/devosman.com/Rectangle_3_edxppy.png"
          alt="project_image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="mt-2">
        <h3 className={`text-white font-semibold sm:text-[24px] text-[20px]  `}>
          Top Losers
        </h3>
        <p className={`mt-1 text-secondary sm:text-[12px] text-[10px] `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          voluptatum placeat, cupiditate, fugit assumenda, delectus nulla natus
          quasi velit soluta ipsa officiis deleniti. Quisquam quod totam
          doloremque ipsam blanditiis itaque.
        </p>
      </div>

      <div className="mt-2 flex flex-wrap gap-2"></div>
    </>
  );
};

export default Awards;
