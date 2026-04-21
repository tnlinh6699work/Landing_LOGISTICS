import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-10 bg-[#002147] text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Cột 1: Thông tin liên hệ */}
        <div className="space-y-8">
          <div>
            <span className="bg-[#ff5e14] text-white px-4 py-1 text-[11px] font-black uppercase tracking-widest">
              Contact Us
            </span>
            <h2 className="text-4xl font-black mt-4 uppercase leading-tight">
              Get In Touch <br /> With Us Easily
            </h2>
            <p className="text-white/60 mt-4 text-sm leading-relaxed max-w-md">
              Our logistics experts are standing by to help you manage your shipping and supply chain needs. Reach out today!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#ff5e14] p-3 rounded-lg">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Our Location</h4>
                <p className="text-white/60 text-sm">123 Logistics St, New York, USA</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#ff5e14] p-3 rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Quick Contact</h4>
                <p className="text-white/60 text-sm">+011 775 643 21</p>
                <p className="text-white/60 text-sm">contact@logisco.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cột 2: Form gửi tin nhắn */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-4 bg-gray-100 text-slate-900 rounded-lg outline-none focus:ring-2 focus:ring-[#ff5e14] transition"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-4 bg-gray-100 text-slate-900 rounded-lg outline-none focus:ring-2 focus:ring-[#ff5e14] transition"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full p-4 bg-gray-100 text-slate-900 rounded-lg outline-none focus:ring-2 focus:ring-[#ff5e14] transition"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="w-full p-4 bg-gray-100 text-slate-900 rounded-lg outline-none focus:ring-2 focus:ring-[#ff5e14] transition"
            ></textarea>
            <button className="w-full bg-[#ff5e14] text-white font-black py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#002147] transition-all duration-300 uppercase text-xs tracking-widest">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}