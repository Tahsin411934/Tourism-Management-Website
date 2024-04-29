
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../Styles/MostPopularDestinations.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const MostPopularDestinations = () => {
  return (
    <div className='container mx-auto w-[90%]'>
      <div className=" mt-20 text-center p-1 rounded-xl" >
                <h1 className=' text-2xl lg:text-2xl pb-3 font-bold text-[#1A2B3D]'>Most Popular Destinations</h1>
                <p className='text-slate-600 pb-20'>
                &quot; Prepare to experience  rich culture and explore the majestic beauties of Cox’s Bazar, Sylhet,  Bandarban, <br></br> Sajek Valley,   Rangamati etc. Plan your trip now!  &quot;</p>
            </div>
       <Swiper
       slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
       
       
   
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/gW7QZNz/pexels-pierre-blache-651604-3073666.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/jkqmdQZ/pexels-maoriginalphotography-1467622.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/rQqp2tM/pexels-yifan-lai-1434608-19764184.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/VMCR2Dp/pexels-ashleyelena-705782.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/CV3pz56/pexels-quang-nguyen-vinh-222549-2132126.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/0ZSXrVV/pexels-roman-kirienko-67502392-8775531.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/mBzk1f9/pexels-daniel-lienert-399431-1089302.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/4fW34rr/pexels-preciousvietnam-2847871.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] w-[230px] rounded-xl' src="https://i.ibb.co/gW7QZNz/pexels-pierre-blache-651604-3073666.jpg" alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default MostPopularDestinations;
