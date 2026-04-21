import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full">
      {/* 1. TOP BAR - Cập nhật thêm Location */}
      <div className="bg-[#002147] text-white text-[11px] py-2 px-10 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          {/* Email */}
          <span className="flex items-center gap-2 opacity-80">
            <Mail size={12} className="text-[#ff5e14]"/> 
            contact@logisco.com
          </span>

          {/* Location */}
          <span className="hidden sm:flex items-center gap-2 opacity-80">
            <MapPin size={12} className="text-[#ff5e14]"/> 
            123 Logistics St, New York, USA
          </span>

          {/* Giờ làm việc */}
          <span className="hidden lg:flex items-center gap-2 opacity-80 uppercase font-bold">
            <Clock size={12} className="text-[#ff5e14]"/> 
            Mon - Fri: 8:00 - 19:00
          </span>
        </div>
        
        <div className="hidden md:block opacity-50 italic font-medium">
          Professional Logistics Solution
        </div>
      </div>

      {/* 2. MAIN NAV */}
      <nav className="bg-white py-5 px-10 flex justify-between items-center shadow-md sticky top-0 z-[100]">
        {/* Logo */}
        <div className="text-2xl font-black text-[#002147] uppercase tracking-tighter">
          Log<span className="text-[#ff5e14]">i</span>sco
        </div>
        
        {/* Menu */}
        <ul className="hidden lg:flex gap-10 font-bold text-[13px] uppercase text-slate-700">
          <li className="text-[#ff5e14] cursor-pointer border-b-2 border-[#ff5e14]">Home</li>
          <li className="hover:text-[#ff5e14] cursor-pointer transition">Services</li>
          <li className="hover:text-[#ff5e14] cursor-pointer transition">Project</li>
          <li className="hover:text-[#ff5e14] cursor-pointer transition">Contact</li>
        </ul>

        {/* Hotline */}
        <div className="flex items-center gap-6">
           <div className="hidden xl:flex items-center gap-3 border-r pr-6 border-slate-200">
              <div className="bg-[#ff5e14]/10 p-2 rounded-full">
                <Phone size={20} className="text-[#ff5e14]" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Call us Anytime</p>
                <p className="text-sm font-black text-[#002147]">+011 775 643 21</p>
              </div>
           </div>
           
           <button className="bg-[#ff5e14] text-white px-7 py-4 text-[12px] font-bold uppercase 
                hover:bg-[#002147] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Request a Quote
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;