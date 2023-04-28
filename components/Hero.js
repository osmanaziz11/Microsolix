import { Manrope } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Rating from '../public/rating.png';

const manrope = Manrope({
  subsets: ['latin'],
  weights: [600],
});
const taglines = [
  'Extensive work experience',
  'Flexible working conditions',
  'Large and friendly team',
];
const Hero = () => {
  return (
    <>
      <section class="bg-transparent pt-16" id="hero">
        <div class="py-8  mx-auto max-w-screen-xl text-center lg:py-16 lg:px-16">
          <h1
            class={`mb-4 text-[80px] font-extrabold tracking-tight leading-[104px] text-white ${manrope.className} line-height-104`}
          >
            Software Development Experts
          </h1>
          <p
            class={` ${manrope.className} mb-8 text-lg font-normal  lg:text-xl  xl:px-[250px] my-10 text-[#ababae] flex`}
          >
            We are experts with providing the widest range of IT services and
            solutions for growing your business.
          </p>

          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 my-16">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-md  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-[#4044EE]"
            >
              Start your project
            </a>
          </div>
          <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-14">
            <div
              class={`${manrope.className} text-[#ababae] font-bold flex flex-wrap justify-center items-center mt-8  text-[16px] `}
            >
              {taglines.map((line, index) => {
                return (
                  <div key={index}>
                    <p class={`mb-5 lg:mb-0  flex ${index == 1 && 'mx-3'}`}>
                      <span className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#4e4fbb"
                            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"
                          />
                        </svg>
                      </span>
                      {line}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
