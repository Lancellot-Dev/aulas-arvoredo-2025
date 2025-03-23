
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
}) => {
  return (
    <div className="slide-nav flex justify-center items-center mt-8">
      <button
        onClick={onPrevSlide}
        className="slide-nav-button bg-white rounded-full p-2 shadow-md text-gray-700 hover:bg-gray-100 transition-colors mr-4"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <span className="flex items-center px-4 text-sm font-medium text-gray-600">
        {currentSlide + 1} / {totalSlides}
      </span>
      <button
        onClick={onNextSlide}
        className="slide-nav-button bg-white rounded-full p-2 shadow-md text-gray-700 hover:bg-gray-100 transition-colors ml-4"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
