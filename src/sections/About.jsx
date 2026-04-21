import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import {
  ArrowRight,
  Award,
  Ship,
  Truck,
  ShieldCheck,
  Globe,
  MapPin,
  Zap,
  BarChart3,
  Cpu,
  Clock,
  Navigation
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import TruckAbout from '../assets/BG.jpeg';

export default function AboutSelection() {

  const aboutData = [
    {
      subtitle: "Since 1998 Global Leader",
      title: "We simplify the Supply Chain experience.",
      desc: "Our strategic logistics network operates across 2.4 hectares of premium industrial land. We continuously optimize operations and reduce costs.",
      features: [
        { title: "Warehouse", desc: "2.4ha Scale", icon: <MapPin size={18} /> },
        { title: "Optimization", desc: "Cost Saving", icon: <Zap size={18} /> },
        { title: "Standardized", desc: "Process Control", icon: <ShieldCheck size={18} /> },
        { title: "Reliability", desc: "Stable Service", icon: <Award size={18} /> },
      ],
      missionTitle: "Core Value",
      missionDesc: "Seamless, technology-driven logistics.",
      clientTitle: "Client Focus",
      clientDesc: "Your growth is our priority."
    },
    {
      subtitle: "Innovative Solutions",
      title: "Smart Technology for Logistics.",
      desc: "Managing 700+ containers monthly with real-time tracking, handling complex operations with precision through automation.",
      features: [
        { label: "Real-time Tracking", icon: <Navigation size={18} /> },
        { label: "Automation Systems", icon: <Cpu size={18} /> },
        { label: "Fast Delivery", icon: <Clock size={18} /> },
        { label: "Data Analytics", icon: <BarChart3 size={18} /> },
      ],
      missionTitle: "Technology",
      missionDesc: "Real-time shipment visibility.",
      clientTitle: "Client Experience",
      clientDesc: "Expert logistics team."
    }
  ];

  const statsList = [
    { icon: <Truck size={20} />, value: "150+", label: "Vehicles" },
    { icon: <Globe size={20} />, value: "2K+", label: "Clients" },
    { icon: <Ship size={20} />, value: "700+", label: "Containers" },
    { icon: <MapPin size={20} />, value: "2.4 ha", label: "Warehouse" },
    { icon: <Zap size={20} />, value: "96.5%", label: "On-time" },
    { icon: <ShieldCheck size={20} />, value: "Secure", label: "Safety" },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-20">

      {/* BACKGROUND TEXT */}
      <div className="absolute top-0 right-[-5%] z-0 opacity-[0.03] pointer-events-none hidden xl:block">
        <h2 className="text-[18rem] xl:text-[22rem] font-black text-[#001a38] select-none">
          ABOUT
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT SIDE: IMAGE & STATS */}
          <div className="lg:col-span-5 space-y-12">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] md:h-[550px] border-[12px] border-gray-50">
                <img src={TruckAbout} className="w-full h-full object-cover transform hover:scale-105 transition duration-700" alt="Logistics" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#ff5e14] p-8 rounded-[2rem] shadow-2xl text-center min-w-[160px]">
                <Award className="text-white mx-auto mb-2" size={32} />
                <p className="text-white text-4xl font-black">25+</p>
                <p className="text-[10px] text-white/90 uppercase tracking-widest font-bold">
                  Years of Excellence
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4">
              {statsList.map((stat, i) => (
                <div key={i} className="space-y-1 group">
                  <div className="text-[#ff5e14] group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <p className="text-2xl font-black text-[#001a38] leading-none">{stat.value}</p>
                  <p className="text-[10px] uppercase text-gray-400 font-bold tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT SWIPER */}
          <div className="lg:col-span-7">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              autoplay={{ delay: 6000 }}
              speed={1000}
            >
              {aboutData.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="space-y-8 py-4">

                    {/* Subtitle */}
                    <div className="flex items-center gap-4">
                      <span className="h-[2px] w-12 bg-[#ff5e14]"></span>
                      <span className="text-[#ff5e14] text-xs font-bold uppercase tracking-[0.3em]">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-7xl font-black leading-[0.9] text-[#001a38]">
                      {slide.title.split(' ').slice(0, 3).join(' ')} <br />
                      <span className="text-[#ff5e14]">
                        {slide.title.split(' ').slice(3).join(' ')}
                      </span>
                    </h2>

                    {/* Short Desc */}
                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl border-l-4 border-gray-100 pl-6">
                      {slide.desc}
                    </p>

                    {/* NEW DYNAMIC FEATURES LAYOUT */}
                    <div className="min-h-[180px]">
                      {i === 0 ? (
                        /* Layout Slide 1: Grid Icon Boxes */
                        <div className="grid grid-cols-2 gap-4">
                          {slide.features.map((f, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition duration-300 border border-transparent hover:border-gray-100">
                              <div className="bg-[#001a38] text-white p-2 rounded-lg">
                                {f.icon}
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-[#001a38]">{f.title}</h4>
                                <p className="text-xs text-gray-500">{f.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Layout Slide 2: Modern Tag Cloud / Interactive Pills */
                        <div className="flex flex-wrap gap-3">
                          {slide.features.map((f, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 bg-white border-2 border-gray-100 px-6 py-4 rounded-2xl hover:border-[#ff5e14] hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                              style={{ animationDelay: `${idx * 150}ms` }}
                            >
                              <span className="text-[#ff5e14]">{f.icon}</span>
                              <span className="text-sm font-bold text-[#001a38]">{f.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* BOTTOM INFO CARDS */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      {[
                        { t: slide.missionTitle, d: slide.missionDesc },
                        { t: slide.clientTitle, d: slide.clientDesc }
                      ].map((box, idx) => (
                        <div key={idx} className="flex-1 bg-[#001a38]/5 p-6 rounded-2xl border-b-4 border-[#ff5e14]">
                          <p className="text-[10px] uppercase font-black text-[#ff5e14] mb-2 tracking-widest">{box.t}</p>
                          <p className="text-base font-bold text-[#001a38] leading-tight">{box.d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* CTA */}
          <div className="pt-4">
            <button className="group relative flex items-center gap-3 bg-[#001a38] text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-14">
              <span className="relative z-10">Download Profile</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={18} />
              <div className="absolute inset-0 bg-[#ff5e14] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}