import { useState, useEffect } from "react";

const SliderSection = ({ companyInfo }) => {
  const slides = [
    {
      tagline: companyInfo.tagline1,
      slogan: companyInfo.slogan1,
      heroImage: companyInfo.heroImage1,
    },
    {
      tagline: companyInfo.tagline2,
      slogan: companyInfo.slogan2,
      heroImage: companyInfo.heroImage2,
    },
    {
      tagline: companyInfo.tagline3,
      slogan: companyInfo.slogan3,
      heroImage: companyInfo.heroImage3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides.length, isPaused]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative overflow-hidden w-full h-screen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Container */}
      <div
        className="relative flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex flex-col justify-center items-center bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${slide.heroImage || "/placeholder.svg"})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 md:px-12">
              <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.tagline}
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto drop-shadow-lg">
                {slide.slogan}
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition transform hover:scale-105">
                  Get Started
                </button>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-md hover:text-blue-700 hover:bg-gray-100 transition transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full border-2 ${
              currentSlide === index
                ? "bg-blue-600 border-blue-600"
                : "bg-gray-300 border-gray-400"
            } transition transform hover:scale-125`}
          />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 shadow-md hover:bg-opacity-70 transition"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 shadow-md hover:bg-opacity-70 transition"
      >
        ❯
      </button>
    </section>
  );
};

export default SliderSection;
