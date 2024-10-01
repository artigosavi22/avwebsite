import React, { useState, useEffect } from "react";
import data from "../../data.json";
 
function SilderComponent() {
  // const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch data from API (Example: Placeholder API)
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);

  // Slider next/prev functionality
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  return (
    <div className="flex flex-col h-screen">
    {/* Slider */}
    <div className="relative w-screen h-full overflow-hidden bg-white">
      {data.length > 0 && (
        <>
          <div
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {data.map((item) => (
              <div key={item.id} className="w-screen h-full flex-shrink-0">
                <img
                  className="object-cover w-full h-full"
                  src={item.url}
                  alt={item.title}
                />
              </div>
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          >
            Next
          </button>
        </>
      )}
    </div>
  </div>
  );
}

export default SilderComponent;
