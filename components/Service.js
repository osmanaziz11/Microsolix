/* eslint-disable @next/next/no-img-element */
import { Manrope } from 'next/font/google';
import Image from 'next/image';
import Button from './Button';

const manrope = Manrope({
  subsets: ['latin'],
  weights: [600],
});
const Service = ({ details }) => {
  const { title, desc, image, id } = details;
  return (
    <>
      <div className='className="w-full  h-full flex flex-col md:flex-row mt-10 mb-32'>
        <div className="w-full md:w-1/2 h-full flex justify-center items-start flex-col sm:p-10 xsm:p-6 p-3 pt-0 sm:mt-1 mt-1 ">
          <div className="">
            <h4
              className={`${manrope.className}text-white lg:text-[28px]  sm:text-6xl xsm:text-6xl text-5xl  font-bold `}
            >
              {title}
            </h4>

            <p
              className={` text-[18px] xsm:pl-2 my-8 ${manrope.className} text-[#ababae] font-bold`}
            >
              {desc}
            </p>
          </div>
          <div
            className="w-[90%]"
            style={{
              borderBottom: '1px solid rgb(70 70 70)',
              height: '1px',
            }}
          ></div>
          {id}
          <Button />
        </div>
        <div className="w-full md:w-1/2  flex justify-center items-center flex-col  bg-[#1F1C2D] relative rounded-lg">
          <Image src={image} fill alt="service thumbnail" />
        </div>
      </div>
    </>
  );
};

export default Service;
