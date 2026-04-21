/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      logisco: {
        navy: '#002147',   // Xanh đậm chủ đạo
        orange: '#ff5e14', // Cam nút nhấn
        light: '#f4f4f4'   // Xám nhạt nền
      }
    }
  }
},
  plugins: [],
}