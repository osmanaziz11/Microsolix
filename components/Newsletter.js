import React from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weights: [600],
});

const Newsletter = () => {
  return (
    <section class="">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6 newsletter rounded my-20">
        <div class="mx-auto max-w-screen-md sm:text-center">
          <h2
            class={`mb-4 text-[40px] tracking-tight font-extrabold text-gray-900  dark:text-white ${manrope.className}`}
          >
            Ready to Get Started?
          </h2>
          <p class="mx-auto mb-8 max-w-2xl   md:mb-12   font-bold text-gray-500">
            Write your email address so we can contact you
          </p>
          <form action="#">
            <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div class="relative w-full">
                <label
                  for="email"
                  class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  class="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg  sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 bg-[#29213A]"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required=""
                />
              </div>
              <div className="h-full">
                <button
                  type="submit"
                  class="h-full py-4 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700  sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#6366f1]"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div class="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-300 mt-5">
              No subscriptions. No annual fees. No lock-ins.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
