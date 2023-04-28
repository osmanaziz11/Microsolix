import React from 'react';

const Testominals = () => {
  return (
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row md:space-x-4">
        <div class="flex flex-col md:flex-row md:space-x-4">
          <button class="w-full md:w-auto mb-4 md:mb-0 py-2 px-4 bg-gray-200 text-gray-800 font-bold rounded-l-md hover:bg-gray-300 focus:outline-none focus:shadow-outline">
            User 1
          </button>
          <button class="w-full md:w-auto mb-4 md:mb-0 py-2 px-4 bg-gray-200 text-gray-800 font-bold hover:bg-gray-300 focus:outline-none focus:shadow-outline">
            User 2
          </button>
          <button class="w-full md:w-auto mb-4 md:mb-0 py-2 px-4 bg-gray-200 text-gray-800 font-bold rounded-r-md hover:bg-gray-300 focus:outline-none focus:shadow-outline">
            User 3
          </button>
        </div>
        <div class="flex-1 md:flex-none">
          <div class="bg-gray-100 p-6 rounded-b-lg">
            <div class="text-gray-800 font-medium mb-4">Testimonial 1</div>
            <p class="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              elit a elit vulputate laoreet at vitae nisi. Nullam sit amet mi
              euismod, bibendum nibh ac, fringilla sapien.
            </p>
            <div class="text-gray-800 font-medium mb-4">
              Author Name, Company
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:space-x-4">
        <div class="hidden md:block w-48">
          <img
            src="user1.png"
            alt="User 1"
            class="w-full h-auto rounded-lg mb-4"
          />
          <img
            src="user2.png"
            alt="User 2"
            class="w-full h-auto rounded-lg mb-4"
          />
          <img
            src="user3.png"
            alt="User 3"
            class="w-full h-auto rounded-lg mb-4"
          />
        </div>
        <div class="flex-1 md:flex-none">
          <div class="bg-gray-100 p-6 rounded-b-lg">
            <div class="text-gray-800 font-medium mb-4">Testimonial 2</div>
            <p class="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              elit a elit vulputate laoreet at vitae nisi. Nullam sit amet mi
              euismod, bibendum nibh ac, fringilla sapien.
            </p>
            <div class="text-gray-800 font-medium mb-4">
              Author Name, Company
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testominals;
