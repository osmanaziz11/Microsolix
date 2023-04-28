/* eslint-disable @next/next/no-img-element */
import Vue from '../public/vue.png';
import Node from '../public/node.png';
import React from '../public/react.png';
import Java from '../public/java.png';
import Image from 'next/image';
import { Manrope } from 'next/font/google';
const manrope = Manrope({
  subsets: ['latin'],
  weights: [600],
});
const Development = () => {
  return (
    <ul
      class={`flex flex-row ${manrope.className}  font-bold w-[90%] mt-3 justify-between h-[89px]`}
    >
      <li className="text-[#AAABAF] hover:text-white transition   flex flex-col justify-center relative">
        <Image src={Vue} alt="" width={80} className="" />
      </li>
      <li className="text-[#AAABAF] hover:text-white transition mx  flex flex-col justify-center">
        <Image src={Node} alt="" width={80} className="" />
      </li>
      <li className="text-[#AAABAF] hover:text-white transition mx flex flex-col justify-center">
        <Image src={Java} alt="" width={80} className="" />
      </li>
      <li className="text-[#AAABAF] hover:text-white transition mx flex flex-col justify-center">
        <Image src={React} alt="" width={80} className="" />
      </li>
    </ul>
  );
};

export default Development;
