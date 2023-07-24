import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
import banner4 from '../../../assets/banner/banner4.jpg'
import banner5 from '../../../assets/banner/banner5.jpg'


const Banner = () => {

    return (
        <>
            <Swiper
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
                <SwiperSlide>
                    <div className="card lg:card-side bg-orange-200 shadow-xl mx-14 my-14 ">
                        <figure className='w-1/2 sm:w-full sm:w-full'><img src={banner1} alt="Album" /></figure>
                        <div className="card-body w-1/2 sm:w-full justify-center text-orange-950 sm:w-full">
                            <div className='align-middle '>
                                <h2 className="font-bold text-2xl">Unlocking the Secrets: Exploring New Frontiers in Science</h2>
                                <p className='font-semibold text-justify mt-4'>Science has always been a relentless pursuit of understanding the world around us. It is a journey of discovery that knows no bounds and continually pushes the limits of human knowledge. Exploring New Frontiers in Science encapsulates the essence of this captivating endeavor.</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className="card lg:card-side bg-orange-200 shadow-xl mx-14 my-14">
                        <figure className='w-1/2 sm:w-full sm:w-full'><img src={banner2} alt="Album" /></figure>
                        <div className="card-body w-1/2 sm:w-full justify-center text-orange-950 sm:w-full">
                            <div className='align-middle '>
                                <h2 className="font-bold text-2xl">Knowledge is Key: Empower Yourself through Education.</h2>
                                <p className='font-semibold text-justify mt-4'>Empower Yourself through Education is a motivating call to action, emphasizing the fundamental role of knowledge in personal growth and empowerment. This short but impactful description highlights the transformative power of education, encouraging individuals to embrace the pursuit of learning as a means to unlock their full potential and achieve success. By recognizing education as the gateway to self-improvement and advancement, this tagline inspires individuals to take charge of their learning journey and embrace the lifelong pursuit of knowledge.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card lg:card-side bg-orange-200 shadow-xl mx-14 my-14">
                        <figure className='w-1/2 sm:w-full'><img src={banner3} alt="Album" /></figure>
                        <div className="card-body w-1/2 sm:w-full justify-center text-orange-950">
                            <div className='align-middle '>
                                <h2 className="font-bold text-2xl">Study Smart, Succeed Bright: Your Path to Academic Excellence.</h2>
                                <p className='font-semibold text-justify mt-4'>The tagline reinforces the idea that success is not merely about working harder, but about adopting a thoughtful and well-planned study routine. It motivates students to explore innovative learning strategies, time management, and personalized study approaches, enabling them to reach their full potential and shine brightly in their educational journey. With this guiding principle, individuals are inspired to take charge of their learning, maximize their capabilities, and pave the way for a future of academic excellence.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card lg:card-side bg-orange-200 shadow-xl mx-14 my-14">
                        <figure className='w-1/2 sm:w-full'><img src={banner4} alt="Album" /></figure>
                        <div className="card-body w-1/2 sm:w-full justify-center text-orange-950">
                            <div className='align-middle '>
                                <h2 className="font-bold text-2xl">Ignite Your Curiosity: Fuel Your Mind with Study.</h2>
                                <p className='font-semibold text-justify mt-4'>By igniting curiosity, learners are motivated to seek knowledge actively, ask questions, and delve deeper into subjects of interest. The tagline reminds individuals that studying is not merely a passive activity but a dynamic process that nourishes the mind. Through continuous learning and a thirst for understanding, one can fuel their intellectual growth and expand their horizons.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card lg:card-side bg-orange-200 shadow-xl mx-14 my-14">
                        <figure className='w-1/2 sm:w-full'><img src={banner5} alt="Album" /></figure>
                        <div className="card-body w-1/2 sm:w-full justify-center text-orange-950">
                            <div className='align-middle '>
                                <h2 className="font-bold text-2xl">Discover, Learn, Grow: Your Journey to Intellectual Enrichment.</h2>
                                <p className='font-semibold text-justify mt-4'>Discover, Learn, Grow: Your Journey to Intellectual Enrichment encapsulates the transformative nature of the learning process and the profound impact it can have on personal development. This short description serves as an inspiring reminder that education is a dynamic journey, consisting of three interconnected stages.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;