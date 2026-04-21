import React from 'react';
import { Truck, Globe, Anchor, TrainFront } from 'lucide-react';

const stats = [
  { icon: <Truck size={28} />, count: "50K", label: "Successful Transportation" },
  { icon: <Globe size={28} />, count: "256", label: "Land Freight" },
  { icon: <Anchor size={28} />, count: "25+", label: "Countries of Operation" },
  { icon: <TrainFront size={28} />, count: "125", label: "Rail Freight" },
];

export default function Stats() {
  return (
    <section className="bg-[#001a38] py-16 px-6 relative z-30">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 text-white 
              md:border-r border-white/10 md:last:border-none"
            >

              {/* ICON */}
              <div className="text-[#ff5e14] bg-white/5 p-4 rounded-2xl backdrop-blur-sm">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <div className="text-4xl font-black tracking-tight">
                  {item.count}
                </div>
                <div className="text-[10px] uppercase font-bold opacity-60 tracking-[0.25em]">
                  {item.label}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}