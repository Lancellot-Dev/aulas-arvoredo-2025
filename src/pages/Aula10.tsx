
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon, FileText, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, SquarePlus, Layers2, Play, FileImage } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const slides = [
  {
    id: 1,
    title: "Abrindo o PowerPoint",
    topic: "Módulo 1",
    icon: <FileText className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    content:
`• Clique no ícone do PowerPoint no seu computador.
• Escolha “Apresentação em Branco” ou use um modelo pronto (opcional).`
  },
  {
    id: 2,
    title: "Conhecendo a Tela",
    topic: "Módulo 1",
    icon: <Layers2 className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    content:
`• Slides (à esquerda): lista de todos os slides da apresentação.
• Área de Edição (centro): onde você monta o slide.
• Guia de Ferramentas (topo): abas como "Página Inicial", "Inserir", "Design", etc.
• Notas (abaixo do slide): espaço para anotações pessoais (não aparecem na apresentação).`
  },
  {
    id: 3,
    title: "Criando um Novo Slide",
    topic: "Módulo 1",
    icon: <SquarePlus className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    content:
`• Vá em “Página Inicial” > “Novo Slide”.
• Escolha um layout (Título, Título e Conteúdo, Comparação, etc.).
Dica: Use Ctrl + M para criar um novo slide rapidamente.`
  },
  {
    id: 4,
    title: "Inserindo Texto",
    topic: "Módulo 2",
    icon: <FileText className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    content:
`1. Clique em uma caixa de texto ("Clique para adicionar um título").
2. Digite seu conteúdo.
3. Você pode formatar com:
   • Negrito, Itálico, Sublinhado
   • Cor e tamanho da fonte
   • Alinhamento (esquerda, centro, direita)`
  },
  {
    id: 5,
    title: "Formatando Texto",
    topic: "Módulo 2",
    icon: (
      <span>
        <Bold className="inline mr-0.5 w-4 h-4 text-violet-600" />
        <Italic className="inline mr-0.5 w-4 h-4 text-violet-600" />
        <Underline className="inline w-4 h-4 text-violet-600" />
      </span>
    ),
    image: "",
    content:
`Use as opções da barra superior para:
• Negrito, Itálico, Sublinhado (atalhos: Ctrl+B, Ctrl+I, Ctrl+U)
• Cor e tamanho da fonte
• Alinhamento: 
   - Esquerda  ${'<'} (Ctrl+Q), 
   - Centralizado (Ctrl+E), 
   - Direita ${'>'} (Ctrl+G)`
  },
  {
    id: 6,
    title: "Inserindo Imagens, Ícones e Formas",
    topic: "Módulo 3",
    icon: <FileImage className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    content:
`• Vá na aba "Inserir":
   • Imagem: escolha do seu computador.
   • Ícones ou Formas: escolha um modelo e posicione no slide.
   • Texto Personalizado: use "Caixa de Texto" para adicionar frases soltas.`
  },
  {
    id: 7,
    title: "Aplicando um Design Visual",
    topic: "Módulo 3",
    icon: <Layers2 className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    content:
`• Vá na guia "Design":
   • Escolha um tema visual com cores e fontes combinadas.
   • Use "Formatar Plano de Fundo" para personalizar ainda mais.
   • Explore o botão "Ideias de Design" (se disponível) para sugestões automáticas.`
  },
  {
    id: 8,
    title: "Adicionando Transições",
    topic: "Módulo 4",
    icon: <Play className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "",
    content:
`Transições são efeitos entre um slide e outro.
Como aplicar:
1. Clique no slide.
2. Vá em "Transições".
3. Escolha um efeito (ex: "Empurrar", "Esmaecer", "Morfose").
4. Clique em "Aplicar a Todos" se quiser o mesmo em todos.`
  },
  {
    id: 9,
    title: "Adicionando Animações",
    topic: "Módulo 4",
    icon: <Play className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "",
    content:
`Animações controlam como elementos aparecem no slide.
Como fazer:
1. Selecione o item (texto, imagem, forma).
2. Vá em "Animações".
3. Escolha o efeito desejado:
   • Entrada: Aparecer, Voar para Dentro...
   • Ênfase: Pulsar, Aumentar/Diminuir...
   • Saída: Desaparecer, Voar para Fora...`
  },
  {
    id: 10,
    title: "Modo de Apresentação",
    topic: "Módulo 5",
    icon: <Play className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "",
    content:
`Como apresentar:
• Pressione F5 para começar do início.
• Use Shift + F5 para começar do slide atual.
• Use as setas do teclado para navegar.`
  },
  {
    id: 11,
    title: "Salvando sua Apresentação",
    topic: "Módulo 5",
    icon: <FileText className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "",
    content:
`• Vá em "Arquivo" > "Salvar Como".
• Escolha o local e o nome do arquivo.
• Formato: .pptx (editável) ou .pdf (para compartilhar).`
  },
  {
    id: 12,
    title: "Dicas Extras",
    topic: "Dicas",
    icon: <FileText className="inline-block mr-1 w-5 h-5 text-violet-600" />,
    image: "",
    content:
`• Menos é mais: evite slides poluídos. Use palavras-chave + imagens.
• Use tópicos e bullets: facilitam a leitura.
• Evite muitas fontes diferentes. Use 1 ou 2 no máximo.
• Cuidado com o excesso de animações. Mantenha elegante.`
  },
];

const Aula10 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 10;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, []);
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar currentLesson={currentLesson} />
        <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="p-4">
            <SidebarTrigger />
          </div>

          <div className="progress-bar relative h-2 bg-gray-200 my-2 rounded">
            <div className="absolute left-0 top-0 h-2 bg-indigo-400 rounded" style={{ width: `${progress}%`, transition: 'width 0.4s' }} />
          </div>

          <div className="slide-container flex justify-center items-center relative max-w-7xl mx-auto px-2 sm:px-4 py-8 min-h-[65vh]">
            {/* Fundo de imagem, se houver */}
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.title}
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover object-center opacity-25 blur-sm select-none pointer-events-none transition-all duration-700"
                style={{ zIndex: 1 }}
                loading="lazy"
              />
            )}

            {/* Bloco do texto centralizado, sobre imagem */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full flex flex-col items-center"
              style={{ minHeight: "440px" }}
            >
              <div className="bg-white/85 md:bg-white/75 rounded-xl shadow-xl px-6 md:px-12 py-7 backdrop-blur-md w-full md:max-w-3xl lg:max-w-4xl border border-indigo-100">
                <span className="inline-flex items-center text-xs bg-indigo-200 text-indigo-900 px-3 py-1 rounded mb-3 font-semibold">
                  {slide.icon}
                  {slide.topic}
                </span>
                <h2 className="title text-3xl lg:text-4xl font-bold text-indigo-900 mb-4 text-center drop-shadow-md">
                  {slide.title}
                </h2>
                <div className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2 md:mb-4 whitespace-pre-line font-medium text-center">
                  {slide.content}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="slide-nav flex items-center justify-center mt-4 gap-2">
            <button
              onClick={prevSlide}
              className="slide-nav-button flex items-center justify-center bg-indigo-200 hover:bg-indigo-300 text-indigo-800 rounded p-2 transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="flex items-center px-4 text-sm font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="slide-nav-button flex items-center justify-center bg-indigo-200 hover:bg-indigo-300 text-indigo-800 rounded p-2 transition-colors"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Aula10;
