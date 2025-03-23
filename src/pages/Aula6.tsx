
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ProgressBar } from "@/components/ProgressBar";
import { SlideContent } from "@/components/SlideContent";
import { SlideNavigation } from "@/components/SlideNavigation";
import { aula6Slides } from "@/data/slideData";

const Aula6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 6; // This is lesson 6

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aula6Slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aula6Slides.length) % aula6Slides.length);
  };

  const progress = ((currentSlide + 1) / aula6Slides.length) * 100;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar currentLesson={currentLesson} />
        <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="p-4">
            <SidebarTrigger />
          </div>

          <ProgressBar progress={progress} />

          <div className="slide-container p-6 max-w-7xl mx-auto">
            <SlideContent slide={aula6Slides[currentSlide]} />

            <SlideNavigation
              currentSlide={currentSlide}
              totalSlides={aula6Slides.length}
              onPrevSlide={prevSlide}
              onNextSlide={nextSlide}
            />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Aula6;
