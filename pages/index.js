import Hero from '@/components/Hero';
import Service from '@/components/Service';
import Design from '@/components/Service.design';
import Development from '@/components/Service.development';
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
    </>
  );
};

export default Home;
