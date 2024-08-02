// import React, { useState, useEffect } from "react";

// const Carousel = ({ images, interval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

  
//     return () => clearInterval(slideInterval);
//   }, [images.length, interval]);

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="absolute inset-0 flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((img, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img
//               className="w-full object-cover"
//               src={img}
//               alt={`Slide ${index}`}
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         onClick={prevSlide}
//       >
//         &lt;
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         onClick={nextSlide}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Carousel;
