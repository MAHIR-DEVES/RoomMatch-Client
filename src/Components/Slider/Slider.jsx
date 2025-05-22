// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

import slide1 from '../../assets/slide 1.jpg';
import slide2 from '../../assets/slide2.jpg';
import TextAnimation from './TextAnimation';

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
            <h2 style={{ fontFamily: 'cursive' }}>
              <TextAnimation></TextAnimation>

              <p className="text-sm md:text-2xl md:mt-10">
                Whether you're moving in or renting out, we make matching easy
                and stress-free.
              </p>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1" className="relative">
          <div className="relative w-full h-full">
            <img src={slide2} alt="" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-8">
              <h2
                style={{ fontFamily: 'cursive' }}
                className="text-2xl md:text-5xl font-bold "
              >
                Verified Profiles. Real People.{' '}
                <p className="text-sm md:text-2xl md:mt-10">
                  : Browse trusted roommate listings with detailed profiles and
                  secure chat.
                </p>
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1" className="relative">
          <div className="relative w-full h-full">
            <img src={slide1} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-8">
              <h2
                style={{ fontFamily: 'cursive' }}
                className="text-2xl md:text-5xl font-bold "
              >
                Live Better, Together.{' '}
                <p className="text-sm md:text-2xl md:mt-10">
                  Share costs, experiences, and make new friends along the way.
                </p>
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide data-hash="slide2" className="relative">
          <div className="relative w-full h-full">
            <img src={slide2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-8">
              <h2
                style={{ fontFamily: 'cursive' }}
                className="text-2xl md:text-5xl font-bold "
              >
                Your Next Roommate is Just a Click Away!{' '}
                <p className="text-sm md:text-2xl md:mt-10">
                  Join thousands already finding great places to live—together.
                </p>
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
