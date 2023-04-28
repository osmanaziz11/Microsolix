import { Manrope } from 'next/font/google';
const manrope = Manrope({
  subsets: ['latin'],
  weights: [600],
});

const Design = () => {
  return (
    <ul
      class={`flex flex-row ${manrope.className} text-[18px] font-bold w-[90%] mt-5 justify-between`}
    >
      <li className="text-[#AAABAF] hover:text-white transition mx">UX/UI</li>
      <li className="text-[#AAABAF] hover:text-white transition mx">
        Web design
      </li>
      <li className="text-[#AAABAF] hover:text-white transition mx">
        Interactive design
      </li>
      <li className="text-[#AAABAF] hover:text-white transition mx">
        Motion design
      </li>
    </ul>
  );
};

export default Design;
