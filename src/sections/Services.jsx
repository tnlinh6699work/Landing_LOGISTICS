import React from "react";
import { Ship, Truck, TrainFront, Plane, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  { id: "01", title: "Maritime Freight", image: "https://i.pinimg.com/736x/ae/3c/0d/ae3c0d61c360ed92800599f31cb004eb.jpg", icon: <Ship size={20} /> },
  { id: "02", title: "Land Freight", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800", icon: <Truck size={20} /> },
  { id: "03", title: "Rail Freight", image: "https://i.pinimg.com/1200x/50/a5/8f/50a58fefa7492ffe4709ab7c5f1dc7f6.jpg", icon: <TrainFront size={20} /> },
  { id: "04", title: "Air Freight", image: "https://i.pinimg.com/1200x/07/80/73/078073cc089d42357c8577c785a1ec9b.jpg", icon: <Plane size={20} /> },
  { id: "05", title: "Warehouse", image: "https://i.pinimg.com/736x/73/95/38/739538b9aa2b867b31f97e9341658df9.jpg", icon: <Truck size={20} /> },
  { id: "06", title: "Express Delivery", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800", icon: <Truck size={20} /> },
];

export default function Services() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20">

      {/* BACKGROUND TEXT */}
      <div className="absolute top-0 right-[-5%] z-0 opacity-[0.03] pointer-events-none hidden xl:block">
        <h2 className="text-[18rem] xl:text-[22rem] font-black text-[#001a38] select-none">
          SEVICES
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">

        {/* HEADER */}
        <div className="mb-16 max-w-[900px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#ff5e14]"></div>
            <span className="text-[#ff5e14] text-xs uppercase tracking-[0.4em]">
              Our Services
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-[#001a38] leading-[0.95]">
            SMART LOGISTICS <br />
            <span className="text-[#ff5e14]">SOLUTIONS</span>
          </h2>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="services-swiper"
        >
          {services.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="group relative h-[480px] rounded-[2rem] overflow-hidden shadow-lg border-8 border-gray-50">

                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#001a38] via-[#001a38]/40 to-transparent"></div>

                <div className="absolute bottom-0 p-6 text-white w-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-[#ff5e14] p-3 rounded-xl">
                      {s.icon}
                    </div>
                    <span className="text-3xl font-black opacity-10">
                      {s.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-black mb-3">
                    {s.title}
                  </h3>

                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore
                    <ArrowRight size={14} className="text-[#ff5e14]" />
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .services-swiper {
          padding-bottom: 80px;
        }
        .services-swiper :global(.swiper-pagination) {
          bottom: 10px !important;
        }
        .services-swiper :global(.swiper-pagination-bullet) {
          background: #001a38;
          opacity: 0.2;
        }
        .services-swiper :global(.swiper-pagination-bullet-active) {
          background: #ff5e14;
          opacity: 1;
          width: 28px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}