import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

import slide1 from '../../assets/slide 1.jpg';
import slide2 from '../../assets/slide2.jpg';

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide0" className="relative">
          <div className="relative h-full w-full">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/h1s7yW1H/15.jpg"
              alt="Slide content"
            />
            <div className="absolute inset-0 bg-black/40"></div>{' '}
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-8">
            <h1 className="text-2xl md:text-5xl font-bold ">
              Find Your Perfect Roommate{' '}
              <span className="font-bold text-blue-400">
                <Typewriter
                  words={['in Minutes!', 'Without the Hassle!', 'In No Time!']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <p className="text-sm md:text-2xl md:mt-10">
                Whether you're moving in or renting out, we make matching easy
                and stress-free.
              </p>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1" className="relative">
          <div className="relative w-full h-full">
            <img src={slide2} alt="" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-8">
              <h1 className="text-2xl md:text-5xl font-bold ">
                Verified Profiles. Real People.{' '}
                <span className="font-bold text-blue-400">
                  <Typewriter
                    words={[
                      'With Zero Effort!"',
                      'At Lightning Speed!',
                      'Super Fast!',
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                <p className="text-sm md:text-2xl md:mt-10">
                  Browse trusted roommate listings with detailed profiles and
                  secure chat.
                </p>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1" className="relative">
          <div className="relative w-full h-full">
            <img src={slide1} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-8">
              <h1 className="text-2xl md:text-5xl font-bold ">
                Live Better, Together.{' '}
                <span className="font-bold text-blue-400">
                  <Typewriter
                    words={['Hassle-Free!', 'Right Away!', 'No Waiting!']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                <p className="text-sm md:text-2xl md:mt-10">
                  Share costs, experiences, and make new friends along the way.
                </p>
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide data-hash="slide2" className="relative">
          <div className="relative w-full h-full">
            <img src={slide2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-8">
              <h1 className="text-2xl md:text-5xl font-bold ">
                Your Next Roommate is Just a Click Away!{' '}
                <span className="font-bold text-blue-400">
                  <Typewriter
                    words={[
                      'Super Fast!',
                      'As Easy As It Gets!',
                      'Start Instantly!',
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                <p className="text-sm md:text-2xl md:mt-10">
                  Join thousands already finding great places to live—together.
                </p>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
