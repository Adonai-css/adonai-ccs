import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/banner1.jpg",
      title: "Bem-vindo à Igreja Adonai Cenáculo da salvação",
      subtitle: "A olaria de Deus",
      buttonText: "Nossos Cultos"
    },
    {
      id: 2,
      image: "/assets/banner2.jpg", 
      title: "Comunidade de Fé e Amor",
      subtitle: "Crescendo juntos em Cristo",
      buttonText: "Participe Conosco"
    },
    {
      id: 3, // Corrigi o ID para ser único
      image: "/assets/banner3.jpg",
      title: "Bem-vindo à Igreja Adonai Cenáculo da salvação",
      subtitle: "A olaria de Deus",
      buttonText: "Nossos Cultos"
    },
  ];

  return (
    <div className="relative"> {/* Container relativo para posicionar os botões */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        effect="fade"
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-screen w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full relative">
              <div 
                className="absolute inset-0 bg-cover bg-top"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              
              <div className="relative h-full flex items-center justify-center text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeIn">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 animate-fadeIn animate-delay-100">
                    {slide.subtitle}
                  </p>
                  <a
                    href="#services"
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300 animate-fadeIn animate-delay-200"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação personalizados */}
      <div className="swiper-button-prev !w-8 !h-8 !left-4">
      </div>
      <div className="swiper-button-next !w-8 !h-8 !right-4">
      </div>
    </div>
  );
};

export default Hero;