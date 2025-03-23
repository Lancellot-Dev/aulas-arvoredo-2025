
import React from "react";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slideData";

interface SlideContentProps {
  slide: SlideData;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="slide-content mb-8"
    >
      <div className="content-grid flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <span className="topic-chip inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
            {slide.topic}
          </span>
          <h1 className="title text-3xl font-bold text-gray-900 mb-4">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {slide.content}
          </p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-0">
          <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
