import Awards from '@/components/Awards';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import Product from '@/components/Products';
import Service from '@/components/Service';
import Design from '@/components/Service.design';
import Development from '@/components/Service.development';
import Testominals from '@/components/Testominals';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weights: [600],
});

const Home = () => {
  const serviceArr = [
    {
      title: 'Product Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu ligula. Vestibulum euismod interdum risus eu interdum. Vivamus suscipit mauris at erat ultricies, vitae placerat nulla feugiat. Integer venenatis blandit efficitur.',
      image: '/service1.png',
      id: <Design />,
    },
    {
      title: 'Web development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu ligula. Vestibulum euismod interdum risus eu interdum. Vivamus suscipit mauris at erat ultricies, vitae placerat nulla feugiat. Integer venenatis blandit efficitur.',
      image: '/service2.png',
      id: <Development />,
    },
    {
      title: 'Software Testing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu ligula. Vestibulum euismod interdum risus eu interdum. Vivamus suscipit mauris at erat ultricies, vitae placerat nulla feugiat. Integer venenatis blandit efficitur.',
      image: '/service3.png',
      id: <Design />,
    },
  ];
  return (
    <>
      {/* Header + Hero  */}
      <Hero />
      {/* Header + Hero  */}

      {/* Services  */}
      <div className="w-full h-full flex flex-col justify-start items-center md:flex-col  max-w-screen-2xl container z-20 my-32">
        <div className="sm:w-9/12  h-full flex sm:justify-center items-center flex-col sm:p-10 xsm:p-6 p-3 sm:pt-0 sm:mt-1 mt-1 pt-10 ">
          <h1
            className={`text-white lg:text-[40px] sm:text-6xl xsm:text-6xl pb-2 text-5xl font-extrabold text-center ${manrope.className}`}
          >
            Our Services
          </h1>
        </div>
        <div class="lg:w-full md:w-10/12 w-11/12 xsm:px-10 px-6 text-white">
          {serviceArr.map((service, index) => {
            return <Service key={index} details={service} />;
          })}
        </div>
      </div>
      {/* Services  */}

      {/* Awards */}
      <div className="w-full h-full flex flex-col justify-start items-center md:flex-col  max-w-screen-2xl container z-20 mt-32 mb-16 bg-[#1F1C2D] pt-10">
        <div className="sm:w-9/12  h-full flex sm:justify-center items-center flex-col sm:p-10 xsm:p-6 p-3 sm:pt-0 sm:mt-1 mt-1 pt-10 ">
          <h1
            className={`text-white lg:text-[40px] sm:text-6xl xsm:text-6xl pb-2 text-5xl font-extrabold text-center ${manrope.className}`}
          >
            Our Awards
          </h1>
          <p
            className={`px-36 my-5 text-[#B7B4B7] ${manrope.className} text-center`}
          >
            In blandit luctus proin mauris a commodo, dolor diam tempus, aenean
            magna fusce eu. Id porttitor aliquam eget aliquet sagittis
          </p>
        </div>
        <div class="lg:w-full md:w-10/12 w-11/12 xsm:px-10 px-6 text-white pb-10">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/4 md:w-1/2 px-2 mb-5 lg:inherit flex  justify-center ">
              <div className="w-[280px]  h-5/6">
                <Awards />
              </div>
            </div>
            <div class="w-full lg:w-1/4 md:w-1/2 px-2 mb-5 lg:inherit flex  justify-center ">
              <div className="w-[280px]  h-5/6">
                <Awards />
              </div>
            </div>
            <div class="w-full lg:w-1/4 md:w-1/2 px-2 mb-5 lg:inherit flex  justify-center ">
              <div className="w-[280px]  h-5/6">
                <Awards />
              </div>
            </div>
            <div class="w-full lg:w-1/4 md:w-1/2 px-2 mb-5 lg:inherit flex  justify-center ">
              <div className="w-[280px]  h-5/6">
                <Awards />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Awards */}

      {/* Feature Products  */}
      <div className="w-full  h-full flex  flex-col sm:p-10 xsm:p-6 p-3 ">
        <h1
          className={`text-white lg:text-[40px] sm:text-6xl xsm:text-6xl  text-5xl font-extrabold text-start ${manrope.className}`}
        >
          Our Services
        </h1>
        <div className="flex flex-row justify-between items-center">
          <p
            className={` w-[500px] text-[#B7B4B7] ${manrope.className} text-start font-bold`}
          >
            We bring real solutions to each clients problems through a deep
            understanding of their market, solution, and vision.
          </p>
          <Button />
        </div>
      </div>
      <div class="lg:w-full md:w-10/12 w-11/12 xsm:px-10 px-6 text-white pb-10">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="md:w-1/2 w-full px-3">
              <Product />
            </div>
            <div class="md:w-1/2 w-full px-3">
              <Product />
            </div>
          </div>
        </div>
      </div>
      {/* Feature Products  */}

      {/* Testominals  */}

      {/* Testominals  */}

      {/* Newsletter  */}
      <Newsletter />
      {/* Newsletter  */}
    </>
  );
};

export default Home;
