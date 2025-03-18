
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code, Terminal, Book, BookOpen, Smartphone, Computer, Apple, List, ListCheck, Keyboard } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const slides = [
  {
    id: 1,
    topic: "Introdução",
    title: "Software e Sistemas Operacionais",
    content: `A aula de hoje tem como objetivo compreender o que é software, como ele funciona e a importância dos sistemas operacionais no funcionamento dos computadores.

Perguntas iniciais para reflexão:
• O que é software?
• O que um sistema operacional faz?

Definições Básicas:
• Software: Conjunto de instruções que permite ao hardware executar tarefas.
• Sistema Operacional (SO): Programa que gerencia os recursos do computador (CPU, memória, dispositivos) e serve de intermediário entre o usuário e o hardware.`,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
  },
  {
    id: 2,
    topic: "Conceitos",
    title: "Tipos de Software",
    content: `Os softwares podem ser classificados em três categorias principais:

1. Software de Sistema:
• Exemplos: Sistemas operacionais (Windows, Linux), drivers e utilitários.
• Função: Gerenciar o hardware e criar um ambiente para a execução de outros programas.

2. Software de Aplicação:
• Exemplos: Navegadores (Chrome), editores de texto (Word) e jogos.
• Função: Realizar tarefas específicas solicitadas pelo usuário.

3. Software de Programação:
• Exemplos: Compiladores (Python, Java) e editores de código (VS Code).
• Função: Auxiliar na criação de novos softwares.

Atividade Prática:
Liste 5 softwares que você usa diariamente e classifique-os nas categorias acima.`,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
  },
  {
    id: 3,
    topic: "Sistemas",
    title: "Sistemas Operacionais e Suas Funções",
    content: `Funções Essenciais de um Sistema Operacional:

• Gerenciamento de processos (uso da CPU)
• Controle de memória (RAM)
• Interface com o usuário (GUI ou CLI)
• Gerenciamento de arquivos e dispositivos

Um bom sistema operacional é a base para o funcionamento adequado do computador, permitindo que o usuário interaja com o hardware de forma simplificada e eficiente.

Os sistemas operacionais modernos também oferecem recursos avançados como:
• Multitarefa: Executar vários programas simultaneamente
• Multiusuário: Permitir que vários usuários compartilhem o mesmo dispositivo
• Segurança: Proteção contra ameaças e controle de acesso
• Conectividade: Comunicação com redes e outros dispositivos`,
    image: "https://images.unsplash.com/photo-1629419091458-b1f426729376",
  },
  {
    id: 4,
    topic: "Comparativo",
    title: "Sistemas Operacionais Populares",
    content: `Existem diversos sistemas operacionais no mercado, cada um com suas características próprias:`,
    image: "https://images.unsplash.com/photo-1629838744244-730fb9e167c6",
    table: true,
    tableContent: [
      {
        so: "Windows",
        tipo: "Proprietário",
        usuario: "Geral",
        customizacao: "Limitada",
        seguranca: "Vulnerável a vírus"
      },
      {
        so: "Linux",
        tipo: "Open-source",
        usuario: "Técnicos/Desenvolvedores",
        customizacao: "Alta",
        seguranca: "Geralmente mais seguro"
      },
      {
        so: "macOS",
        tipo: "Proprietário",
        usuario: "Criativos/Profissionais",
        customizacao: "Média",
        seguranca: "Elevada"
      },
      {
        so: "Android",
        tipo: "Open-source",
        usuario: "Consumidores móveis",
        customizacao: "Alta",
        seguranca: "Variável"
      },
      {
        so: "iOS",
        tipo: "Proprietário",
        usuario: "Usuários de dispositivos Apple",
        customizacao: "Limitada",
        seguranca: "Elevada"
      }
    ]
  },
  {
    id: 5,
    topic: "Windows",
    title: "Detalhamento do Windows",
    content: `Desenvolvido pela Microsoft, o Windows é um dos sistemas operacionais mais utilizados no mundo, oferecendo:

• Interface gráfica intuitiva
• Suporte para multitarefa
• Amplo gerenciamento de arquivos
• Compatibilidade com diversos softwares
• Recursos de segurança (Windows Defender e atualizações regulares)
• Opções de personalização (temas e configurações)

O Windows possui várias versões, sendo as mais recentes o Windows 10 e Windows 11, que trazem recursos avançados como integração com a nuvem, assistente virtual (Cortana) e suporte a tecnologias modernas como realidade virtual e inteligência artificial.`,
    image: "https://images.unsplash.com/photo-1624571409508-275c3468825a",
  },
  {
    id: 6,
    topic: "Produtividade",
    title: "Atalhos Úteis do Windows",
    content: `Para aumentar a produtividade, é fundamental conhecer atalhos que facilitam o uso diário do sistema:`,
    image: "https://images.unsplash.com/photo-1562516710-066112b68014",
    table: true,
    shortcutsTable: true,
    tableContent: [
      { atalho: "Ctrl + C", funcao: "Copiar" },
      { atalho: "Ctrl + V", funcao: "Colar" },
      { atalho: "Ctrl + X", funcao: "Recortar" },
      { atalho: "Ctrl + Z", funcao: "Desfazer" },
      { atalho: "Ctrl + Y", funcao: "Refazer" },
      { atalho: "Ctrl + P", funcao: "Imprimir" },
      { atalho: "Ctrl + A", funcao: "Selecionar tudo" },
      { atalho: "Alt + Tab", funcao: "Alternar entre janelas abertas" },
      { atalho: "Windows + D", funcao: "Mostrar/ocultar área de trabalho" },
      { atalho: "Windows + L", funcao: "Bloquear o computador" },
      { atalho: "Windows + E", funcao: "Abrir o Explorador de Arquivos" },
      { atalho: "Windows + R", funcao: "Abrir a janela 'Executar'" },
      { atalho: "Windows + Shift + S", funcao: "Captura de tela personalizada" },
      { atalho: "Windows + P", funcao: "Alternar modos de exibição (monitor/projetor)" }
    ]
  },
  {
    id: 7,
    topic: "Hardware",
    title: "Tipos de Teclados",
    content: `Conhecer os tipos de teclados ajuda na escolha do dispositivo ideal para cada necessidade:

1. Teclado ABNT2 (Padrão Brasileiro):
• Possui a tecla "Ç"
• Acentos configurados para o português
• Tecla AltGr para caracteres especiais
• Layout adaptado para língua portuguesa

2. Teclado Internacional (US - ANSI):
• Não possui a tecla "Ç" dedicada
• Necessita de combinações para caracteres acentuados
• Comum em notebooks importados
• Layout padrão para língua inglesa

A escolha do teclado pode afetar significativamente a produtividade, especialmente para quem precisa digitar em português com frequência.`,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  }
];

const Aula5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 5; // This is lesson 5

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

          <div 
            className="h-1 bg-indigo-600 transition-all duration-300 ease-in-out" 
            style={{ width: `${progress}%` }} 
          />

          <div className="max-w-7xl mx-auto p-6">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                      {slides[currentSlide].topic}
                    </span>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                      {slides[currentSlide].title}
                    </h1>
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                        {slides[currentSlide].content}
                      </p>
                      
                      {slides[currentSlide].table && !slides[currentSlide].shortcutsTable && (
                        <div className="mt-6 mb-6 overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Sistema Operacional</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Usuário-alvo</TableHead>
                                <TableHead>Customização</TableHead>
                                <TableHead>Segurança</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {slides[currentSlide].tableContent.map((row, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{row.so}</TableCell>
                                  <TableCell>{row.tipo}</TableCell>
                                  <TableCell>{row.usuario}</TableCell>
                                  <TableCell>{row.customizacao}</TableCell>
                                  <TableCell>{row.seguranca}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      )}

                      {slides[currentSlide].shortcutsTable && (
                        <div className="mt-6 mb-6 overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Atalho</TableHead>
                                <TableHead>Função</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {slides[currentSlide].tableContent.map((row, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{row.atalho}</TableCell>
                                  <TableCell>{row.funcao}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                      <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-50 px-8 py-4">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-indigo-50 transition-colors"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-indigo-600" />
                </button>
                <span className="flex items-center px-4 text-sm font-medium text-gray-600">
                  {currentSlide + 1} / {slides.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-indigo-50 transition-colors"
                  aria-label="Próximo slide"
                >
                  <ChevronRight className="w-5 h-5 text-indigo-600" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Aula5;
