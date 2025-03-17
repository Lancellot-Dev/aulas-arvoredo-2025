
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Table } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Table as UITable, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
  {
    id: 6,
    topic: "Configurações de Exemplo",
    title: "Exemplos de Configurações de Desktop e Notebook",
    content: `
### Desktop

Confira exemplos de configurações para cada perfil de uso:`,
    image: "https://images.unsplash.com/photo-1593305841998-bb5c1c848d20",
    tables: [
      {
        title: "Desktop",
        columns: ["Categoria", "Exemplo 1 (Básico)", "Exemplo 2 (Mid-Range)", "Exemplo 3 (High-End)", "Exemplo 4 (Workstation)", "Exemplo 5 (Extreme Gaming)"],
        rows: [
          ["Fonte", "Corsair CV550 (550W, 80+)", "EVGA 650 B5 (650W, 80+ Bronze)", "Corsair RM750x (750W, 80+ Gold)", "Seasonic Prime TX-850 (850W, 80+ Titanium)", "Thermaltake Toughpower GF3 1200W (1200W, 80+ Gold)"],
          ["Placa-Mãe", "ASUS Prime H610M-E (Intel LGA 1700)", "MSI B660M-A Pro (Intel LGA 1700)", "ASUS ROG Strix X670E-F (AMD AM5)", "Gigabyte Z790 AORUS Elite AX (Intel LGA 1700)", "ASUS ROG Maximus Z790 Hero (Intel LGA 1700)"],
          ["CPU", "Intel Core i3-13100F", "AMD Ryzen 5 7600X", "Intel Core i7-13700K", "AMD Ryzen 9 7950X", "Intel Core i9-13900KS"],
          ["Memória", "8GB DDR4 3200MHz (Kingston Fury)", "16GB DDR5 5200MHz (Corsair Vengeance)", "32GB DDR5 6000MHz (G.Skill Trident Z5)", "64GB DDR5 5600MHz (Crucial Pro)", "64GB DDR5 6400MHz (G.Skill Ripjaws S5)"],
          ["Armazenamento", "SSD SATA 500GB (WD Blue)", "NVMe 1TB (Samsung 970 EVO Plus)", "NVMe 2TB (WD Black SN850X)", "NVMe 4TB (Sabrent Rocket 4 Plus)", "2x NVMe 2TB (Samsung 990 Pro RAID 0)"],
          ["GPU", "Integrada (Intel UHD 730)", "NVIDIA RTX 3060 12GB", "NVIDIA RTX 4070 Ti", "NVIDIA RTX A6000", "NVIDIA RTX 4090"]
        ]
      },
      {
        title: "Notebook",
        columns: ["Categoria", "Exemplo 1 (Ultrabook)", "Exemplo 2 (Mid-Range)", "Exemplo 3 (Gamer)", "Exemplo 4 (Workstation)", "Exemplo 5 (Extreme Gaming)"],
        rows: [
          ["Fonte", "Adaptador 65W (USB-C)", "Adaptador 90W (Proprietário)", "Adaptador 230W (Proprietário)", "Adaptador 180W (Proprietário)", "Adaptador 330W (Proprietário)"],
          ["Placa-Mãe", "Placa integrada (Intel HM670)", "Placa integrada (AMD FP7)", "Placa integrada (Intel HM770)", "Placa integrada (AMD FP8)", "Placa integrada (Intel HM790)"],
          ["CPU", "Intel Core i5-1240P", "AMD Ryzen 7 6800H", "Intel Core i7-13700HX", "AMD Ryzen 9 7945HX", "Intel Core i9-13900HX"],
          ["Memória", "8GB LPDDR5 5200MHz (Soldada)", "16GB DDR5 4800MHz (SODIMM)", "32GB DDR5 5600MHz (SODIMM)", "64GB DDR5 5200MHz (SODIMM)", "64GB DDR5 6000MHz (SODIMM)"],
          ["Armazenamento", "SSD 512GB NVMe (SK Hynix Gold P31)", "SSD 1TB NVMe (Samsung PM9A1)", "SSD 2TB NVMe (WD Black SN770)", "SSD 4TB NVMe (Crucial P5 Plus)", "2x SSD 2TB NVMe (Samsung 980 Pro)"],
          ["GPU", "Integrada (Iris Xe Graphics)", "NVIDIA RTX 3050 4GB", "NVIDIA RTX 4060 8GB", "NVIDIA RTX 5000 Ada", "NVIDIA RTX 4090 Laptop"]
        ]
      }
    ]
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
                  
                  {slides[currentSlide].tables && (
                    <div className="mb-6 space-y-10">
                      {slides[currentSlide].tables.map((table, tableIndex) => (
                        <div key={tableIndex} className="overflow-x-auto">
                          <h3 className="text-xl font-semibold mb-3">{table.title}</h3>
                          <UITable className="border-collapse border border-gray-200 bg-white rounded-lg shadow-sm">
                            <TableHeader>
                              <TableRow>
                                {table.columns.map((column, colIndex) => (
                                  <TableHead 
                                    key={colIndex} 
                                    className={colIndex === 0 ? "bg-indigo-100 font-bold" : "bg-indigo-50"}
                                  >
                                    {column}
                                  </TableHead>
                                ))}
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {table.rows.map((row, rowIndex) => (
                                <TableRow key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                  {row.map((cell, cellIndex) => (
                                    <TableCell 
                                      key={cellIndex} 
                                      className={cellIndex === 0 ? "font-medium bg-indigo-50" : ""}
                                    >
                                      {cell}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              ))}
                            </TableBody>
                          </UITable>
                        </div>
                      ))}
                    </div>
                  )}
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
