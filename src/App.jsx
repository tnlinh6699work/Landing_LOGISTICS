import React from 'react';
// Import các thành phần giao diện
import Navbar from './components/common/Navbar';
import Hero from './sections/Hero'; // Đảm bảo tên file khớp với file bạn đã tạo
import Stats from './sections/Stats';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    // antialiased giúp font chữ trên Mac trông mượt mà hơn
    // overflow-x-hidden ngăn chặn lỗi cuộn ngang do hiệu ứng motion
    <div className="antialiased font-sans overflow-x-hidden bg-white">
      {/* 1. Thanh điều hướng & Top bar */}
      <Navbar />
      <main>
        {/* 2. Banner chính với hình ảnh xe tải và tàu biển */}
        <Hero />
        {/* 4. Phần giới thiệu chi tiết (20 Years Experience) */}
        <About />
        {/* 5. Section Services sẽ được thêm vào đây ở bước tiếp theo */}
        <Services />
        {/* 3. Dải thông số (50k Successful Transportation,...) */}
        <Stats/>
        {/* 4. Thông tin liên hệ */}
        <Contact/>
        
      </main>
      {/* 6. Footer */}
      <Footer/>
    
    </div>
  );
}

export default App;