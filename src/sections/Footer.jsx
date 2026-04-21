import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white pt-20 pb-10 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Cột 1: Giới thiệu */}
          <div className="space-y-6">
            <div className="text-2xl font-black uppercase tracking-tighter">
              Log<span className="text-[#ff5e14]">i</span>sco
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              We provide full range of logistics and transportation services. We can handle any cargo, to any destination.
            </p>
            {/* Thay icon Facebook/Twitter bằng chữ cái để tránh lỗi thư viện */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff5e14] transition cursor-pointer font-bold text-sm">F</div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff5e14] transition cursor-pointer font-bold text-sm">X</div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff5e14] transition cursor-pointer font-bold text-sm">In</div>
            </div>
          </div>

          {/* Cột 2: Dịch vụ nhanh */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase border-b-2 border-[#ff5e14] inline-block pb-2">Our Services</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-2 hover:text-[#ff5e14] cursor-pointer transition">
                <ArrowRight size={14} /> Sea Freight
              </li>
              <li className="flex items-center gap-2 hover:text-[#ff5e14] cursor-pointer transition">
                <ArrowRight size={14} /> Land Transport
              </li>
              <li className="flex items-center gap-2 hover:text-[#ff5e14] cursor-pointer transition">
                <ArrowRight size={14} /> Air Freight
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên kết nhanh */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase border-b-2 border-[#ff5e14] inline-block pb-2">Quick Links</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="hover:text-[#ff5e14] cursor-pointer transition">About Us</li>
              <li className="hover:text-[#ff5e14] cursor-pointer transition">Contact Us</li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ trực tiếp */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase border-b-2 border-[#ff5e14] inline-block pb-2">Newsletter</h3>
            <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={16} className="text-[#ff5e14]" /> contact@logisco.com
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={16} className="text-[#ff5e14]" /> +011 775 643 21
            </div>
          </div>

        </div>

        {/* Thanh bản quyền */}
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex justify-between items-center">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
            © 2026 Logisco Team - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;