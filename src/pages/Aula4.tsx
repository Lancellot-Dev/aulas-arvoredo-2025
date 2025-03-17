
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Cpu, HardDrive, MemoryStick, Monitor, Power, ShoppingCart, Wrench } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const slides = [
  {
    id: 1,
    topic: "Módulo 1",
    title: "Introdução ao Dimensionamento de Peças",
    content: `Objetivo: Compreender como escolher componentes equilibrados para diferentes necessidades.

1. O que é dimensionamento?
• Selecionar peças que combinem desempenho, compatibilidade e orçamento.
• Exemplo: Um PC básico não precisa de uma GPU high-end.

2. Fatores-chave:
• Uso do PC:
  - Básico: Navegação, Office.
  - Gamer: Alta performance gráfica (FPS elevados).
  - Profissional: Renderização, edição de vídeo (CPU/GPU potentes).
  - Servidores: Confiabilidade e capacidade de processamento.
• Compatibilidade: Evitar conflitos entre componentes (ex: soquete da CPU vs. placa-mãe).
• Custo-benefício: Priorizar peças que ofereçam melhor desempenho por preço.
• Upgrades futuros: Escolher placa-mãe com slots extras para RAM/armazenamento.`,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 2,
    topic: "Módulo 1",
    title: "Componentes Principais",
    content: `3. Componentes Principais:
• CPU:
  - Núcleos vs. Threads: Núcleos físicos vs. threads virtuais (ex: Intel Hyper-Threading).
• Placa-mãe: Define conectividade e suporte para componentes (ex: chipset B650 para AMD AM5).
• RAM: 8GB para uso básico, 16GB+ para jogos/profissional. DDR5 é mais rápida que DDR4.
• Armazenamento: SSD NVMe (rápido) vs. HDD (econômico para armazenamento em massa).
• GPU: Essencial para jogos/edição. Integrada (CPU) é suficiente para tarefas leves.
• Fonte: Calcular potência com base no TDP dos componentes (usar ferramentas como OuterVision).
• Gabinete: Suportar tamanho da placa-mãe (ATX, Micro-ATX) e ter fluxo de ar adequado.`,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 3,
    topic: "Módulo 2",
    title: "Escolha e Compatibilidade dos Componentes",
    content: `Objetivo: Aprender a selecionar peças compatíveis e otimizadas.

1. Ferramentas Úteis:
• PC Part Picker: Verifica compatibilidade automática e sugere melhorias.
• Benchmarks: Compare desempenho no UserBenchmark ou PassMark.

2. Compatibilidade:
• CPU + Placa-mãe:
  - Soquetes: AMD (AM4/AM5) vs. Intel (LGA 1700).
  - Chipset: H610 (Intel básico) vs. X670 (AMD avançado).
• RAM:
  - DDR4 vs. DDR5 (verificar suporte da placa-mãe).
  - Dual Channel: Melhora desempenho (usar dois pentes de RAM).
• Armazenamento:
  - SSD NVMe (PCIe 4.0/5.0) vs. SATA (mais lento).
• GPU:
  - PCIe x16 (garantir slot compatível na placa-mãe).
• Fonte:
  - Calcular potência total + 20% de margem. Certificação 80 Plus Gold para eficiência.`,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 4,
    topic: "Módulo 3",
    title: "Preparação para Montagem",
    content: `Objetivo: Organizar ambiente e componentes para evitar erros.

1. Precauções:
• Anti-estática: Use pulseira ou toque em metal aterrado antes de manusear peças.
• Ferramentas: Chave Philips, pasta térmica (quantidade equivalente a um grão de arroz).

2. Teste Preliminar:
• Montar CPU, cooler e RAM na placa-mãe fora do gabinete.
• Conectar fonte e ligar para ver POST (tela de inicialização).`,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
  {
    id: 5,
    topic: "Módulo 4",
    title: "Montagem Passo a Passo",
    content: `Objetivo: Montar o PC com segurança e eficiência.

1. Etapas Principais:
• CPU: Alinhar setas no soquete e travar.
• Cooler: Aplicar pasta térmica e fixar com parafusos cruzados.
• RAM: Encaixar nos slots (geralmente A2/B2 para Dual Channel).
• Fonte: Instalar no gabinete e conectar cabos (24-pin na placa-mãe, 8-pin na CPU).
• Placa-mãe: Parafusar em suportes do gabinete.
• GPU: Encaixar no slot PCIe e fixar.
• Cabos: Organizar com abraçadeiras para melhor fluxo de ar.

2. Checklist Final:
• Todos os cabos conectados (CPU, GPU, placa-mãe).
• Coolers funcionando.
• Nenhum parafuso solto no gabinete.

✅ Pronto para ligar!`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const Aula4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 4; // This is lesson 4

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar currentLesson={currentLesson} />
        <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="p-4">
            <SidebarTrigger />
          </div>

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
              <div className="content-grid flex items-start gap-6">
                <div className="col-span-2">
                  <span className="topic-chip">
                    {slides[currentSlide].topic}
                  </span>
                  <h1 className="title">{slides[currentSlide].title}</h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                    {slides[currentSlide].content}
                  </p>
                </div>
                <div className="relative h-[500px] rounded-lg self-start">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-contain rounded-lg"
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
      </div>
    </SidebarProvider>
  );
};

export default Aula4;
