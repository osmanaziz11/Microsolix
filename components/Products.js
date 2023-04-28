/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from './Button';

const Product = () => {
  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://silicon.madrasthemes.com/wp-content/uploads/2023/03/case-studies01.jpeg"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Product;
