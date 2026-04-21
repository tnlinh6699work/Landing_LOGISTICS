import React from 'react';
import { ArrowRight, Play, MousePointer2 } from 'lucide-react';
import StarTruck from '../assets/star-truck.png';
import BG from '../assets/BG.jpeg';  

export default function HeroSelection() {
  return (
    <section className="relative w-full h-[90vh] lg:h-[100vh] flex items-center overflow-hidden bg-[#001a38]">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src={BG} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a38] via-[#001a38]/90 to-transparent"></div>
      </div>

      {/* 2. TRANG TRÍ PHẦN TRÊN (Lấp khoảng trống) */}
      <div className="absolute top-20 left-12 z-10 opacity-10 hidden xl:block">
        <h2 className="text-[12rem] font-black text-white leading-none select-none">
          LOGISTICS
        </h2>
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className="container mx-auto px-12 relative z-20 grid lg:grid-cols-12 items-center">
        
        {/* CỘT CHỮ (Chiếm 7 phần) */}
        <div className="lg:col-span-7 space-y-8 pt-20"> {/* Thêm pt-20 để cân bằng */}
          <div className="flex items-center gap-4 animate-fade-in">
            <div className="w-16 h-[2px] bg-[#ff5e14]"></div>
            <span className="text-[#ff5e14] text-xs font-black uppercase tracking-[0.5em]">
              Smart Transportation System
            </span>
          </div>

          <h1 className="text-white text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
            Efficient <br />
            <span className="text-[#ff5e14]">Logistics</span> <br />
            Solutions
          </h1>

          <div className="flex gap-10 items-start border-l border-white/10 pl-8 ml-1">
             <p className="text-white/50 text-lg leading-relaxed max-w-sm font-light">
              We provide global logistics solutions with a focus on speed, safety, and 24/7 reliability.
            </p>
            {/* Thêm một khối thông tin nhỏ để bớt trống */}
            <div className="hidden md:block">
              <p className="text-[#ff5e14] font-black text-2xl">99%</p>
              <p className="text-white/30 text-[10px] uppercase font-bold">On Time Delivery</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            <button className="bg-[#ff5e14] text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-[#001a38] transition-all duration-500 shadow-2xl shadow-[#ff5e14]/20">
              Get a Quote <ArrowRight className="inline ml-2" size={16} />
            </button>
            <button className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#ff5e14] transition-all">
                <Play size={20} className="text-white fill-white" />
              </div>
              <span className="text-white text-[11px] font-black uppercase tracking-widest">Our Story</span>
            </button>
          </div>
        </div>

        {/* CỘT XE TẢI (Chiếm 5 phần) */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative z-10 transform scale-125 translate-x-10">
             <img 
              src={StarTruck} 
              alt="Truck" 
              className="w-full h-auto object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)] animate-truck-slide"
            />
          </div>
          {/* Vòng tròn trang trí phía sau xe để lấp khoảng trống cột phải */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5e14]/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      {/* 4. BOTTOM ELEMENTS (Lấp khoảng trống chân trang) */}
      <div className="absolute bottom-12 left-12 z-20 hidden lg:flex items-center gap-6">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-[#ff5e14] rounded-full"></div>
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
        </div>
        <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Scroll to explore</span>
        <MousePointer2 size={14} className="text-[#ff5e14] animate-bounce" />
      </div>

    </section>
  );
}