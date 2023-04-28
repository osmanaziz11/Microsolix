import React from 'react';

const Button = () => {
  return (
    <div class="flex flex-col  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 my-10">
      <a
        href="#"
        class="inline-flex justify-center border items-center py-3 px-10 text-base font-normal text-center text-gray-900 rounded-md  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-transparent"
      >
        Learn More
      </a>
    </div>
  );
};

export default Button;
