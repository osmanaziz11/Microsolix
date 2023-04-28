import { Manrope } from 'next/font/google';
import Link from 'next/link';

const manrope = Manrope({
  subsets: ['latin'],
  weights: [600],
});

const Navbar = () => {
  return (
    <nav class="bg-transparent  w-full z-20 top-0 left-0 absolute">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Microsolix
          </span>
        </a>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class={`flex flex-col p-4 md:p-0  md:flex-row ${manrope.className} text-[16px]`}
          >
            <Link
              href="#"
              class="block py-2 pl-3 pr-4  font-semibold "
              aria-current="page"
            >
              <li className="text-[#AAABAF] hover:text-white transition">
                Hire a talent
              </li>
            </Link>
            <Link
              href="#"
              class="block py-2 pl-3 pr-4  font-semibold "
              aria-current="page"
            >
              <li className="text-[#AAABAF] hover:text-white transition">
                Company
              </li>
            </Link>

            <li className="ml-3">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Hire a pro
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
