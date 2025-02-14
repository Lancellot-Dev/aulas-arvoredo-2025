
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    topic: "Definição",
    title: "O que é um Computador?",
    content: "Um computador é uma máquina eletrônica programável que processa dados de acordo com um conjunto de instruções. Ele pode armazenar, recuperar e processar dados, realizando operações matemáticas e lógicas em alta velocidade.",
    image: "photo-1483058712412-4245e9b90334"
  },
  {
    id: 2,
    topic: "História",
    title: "A Origem dos Computadores",
    content: "Os primeiros computadores foram desenvolvidos durante a Segunda Guerra Mundial para cálculos militares. O ENIAC, considerado o primeiro computador eletrônico de propósito geral, foi construído em 1945 e ocupava uma sala inteira.",
    image: "photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    topic: "Tipos",
    title: "Categorias de Computadores",
    content: "Existem diversos tipos de computadores: Desktops (computadores de mesa), Laptops (notebooks), Tablets, Smartphones, Servidores e Supercomputadores. Cada um com características e propósitos específicos.",
    image: "photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 4,
    topic: "Propósito",
    title: "Por que foram Criados?",
    content: "Os computadores foram criados inicialmente para realizar cálculos complexos de forma rápida e precisa. Hoje, são ferramentas essenciais em praticamente todas as áreas, desde educação até medicina, facilitando tarefas e expandindo as possibilidades humanas.",
    image: "photo-1461749280684-dccba630e2f6"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      
      <div className="slide-container">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="slide-content"
        >
          <span className="topic-chip">{slides[currentSlide].topic}</span>
          <h1 className="title">{slides[currentSlide].title}</h1>
          <div className="content-grid">
            <div className="col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {slides[currentSlide].content}
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={`https://images.unsplash.com/${slides[currentSlide].image}`}
                alt={slides[currentSlide].title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <div className="slide-nav">
          <button
            onClick={prevSlide}
            className="slide-nav-button"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="flex items-center px-4 text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            className="slide-nav-button"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
