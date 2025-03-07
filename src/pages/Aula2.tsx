
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const slides = [
  {
    id: 8,
    topic: "Aula 2",
    title: "Introdução à História dos Computadores",
    content: `A história dos computadores é marcada por uma sucessão de inovações que transformaram simples instrumentos de cálculo em poderosas máquinas capazes de conectar o mundo, processar informações complexas e até aprender de forma autônoma. Cada etapa dessa evolução construiu as bases para os avanços tecnológicos atuais.`,
    image: "/computer-history.jpg",
  },
  {
    id: 9,
    topic: "Definição",
    title: "O que Define um Computador?",
    content: `Um computador é um dispositivo eletrônico que recebe, processa, armazena e transmite dados. Seus componentes básicos incluem:

• Hardware: A parte física, composta por unidades de processamento, memória, dispositivos de entrada/saída e outros circuitos.
• Software: Conjunto de programas e sistemas operacionais que comandam as operações do hardware.
• Processamento: Realiza operações lógicas e aritméticas de forma automatizada, permitindo a execução de tarefas complexas.

Esses elementos, em conjunto, possibilitam a solução de problemas, o controle de sistemas e a interação com o usuário, definindo o que entendemos por computador.`,
    image: "/computer-components.jpg",
  },
  {
    id: 10,
    topic: "História",
    title: "Antiguidade e Inícios da Computação",
    content: `Ábaco (c. 3000 a.C.)
• Origem: Desenvolvido na Mesopotâmia e na China.
• Função: Ferramenta de cálculo para operações básicas (soma, subtração) por meio de contas móveis.
• Legado: Ainda é utilizado em alguns contextos para o ensino de matemática.

Pascalina (1642)
• Criador: Blaise Pascal, matemático francês.
• Características: Máquina mecânica com engrenagens, capaz de realizar somas e subtrações simples.
• Importância: Primeira calculadora mecânica comercializada, que inspirou futuras inovações.`,
    image: "/abacus.jpg",
  },
  {
    id: 11,
    topic: "Inovação",
    title: "Revolução Mecânica e Programação",
    content: `Tear de Jacquard (1801)
• Criador: Joseph Marie Jacquard.
• Inovação: Utilizava cartões perfurados para automatizar padrões de tecelagem.
• Impacto: Introduziu o conceito de "programação" por meio de códigos.

Máquina Diferencial e a Máquina Analítica
• Charles Babbage (1822): Projetou a Máquina Diferencial para calcular tabelas matemáticas sem erros humanos.
• Ada Lovelace (1843): Desenvolveu algoritmos para a Máquina Analítica, sendo reconhecida como a primeira programadora da história.`,
    image: "/jacquard-machine.jpg",
  },
  {
    id: 12,
    topic: "Guerra",
    title: "Era Eletromecânica e Computação nas Guerras",
    content: `IBM e Cartões Perfurados (1911)
• Origem: Fusão de empresas formou a Computing-Tabulating-Recording Company (CTR), depois IBM em 1924.
• Uso: Desenvolveu máquinas de cartões perfurados para aplicações governamentais e comerciais.

Máquina Enigma (1930–1945)
• Uso: Empregada na criptografia nazista durante a Segunda Guerra Mundial.
• Decifração: Alan Turing e sua equipe desenvolveram métodos para quebrar o código.

Harvard Mark I (1944)
• Características: Computador eletromecânico de 17 metros de comprimento.
• Contribuições: Utilizado para cálculos balísticos e científicos.`,
    image: "/enigma-machine.jpg",
  },
  {
    id: 13,
    topic: "Eletrônica",
    title: "A Era Eletrônica: ENIAC e Transistores",
    content: `ENIAC (1946)
• Primeiro computador eletrônico programável
• 17.000 válvulas, 27 toneladas, 150 kW de energia
• Operado por mulheres que configuravam manualmente os cabos

Transistores (1947)
• Invenção: Bell Labs por Bardeen, Brattain e Shockley
• Impacto: Reduziu tamanho, consumo e custo dos computadores

UNIVAC I (1951)
• Primeiro computador comercial dos EUA
• Famoso pela previsão eleitoral de 1952`,
    image: "/eniac.jpg",
  },
  {
    id: 14,
    topic: "Redes",
    title: "Miniaturização e Surgimento das Redes",
    content: `Circuitos Integrados e Microprocessadores
• Circuitos Integrados (1958–1959): Inventados por Jack Kilby e Robert Noyce
• Microprocessador Intel 4004 (1971): 2.300 transistores

ARPANET e a Base da Internet
• ARPANET (1969): Primeira rede a conectar universidades
• TCP/IP (1974): Desenvolvido por Vint Cerf e Bob Kahn
• Estabeleceu as bases para a comunicação global`,
    image: "/arpanet.jpg",
  },
  {
    id: 15,
    topic: "PCs",
    title: "A Revolução dos Computadores Pessoais",
    content: `Computadores Pessoais (PCs)
• Apple I (1976): Desenvolvido por Wozniak e Jobs
• IBM PC (1981): Estabeleceu padrão com MS-DOS e processadores Intel

A World Wide Web
• Criação (1991): Desenvolvida por Tim Berners-Lee no CERN
• Revolucionou o acesso e compartilhamento de informações online
• Base para a internet moderna que conhecemos hoje`,
    image: "/apple-1.jpg",
  },
  {
    id: 16,
    topic: "Atual",
    title: "Mobilidade e Inteligência Artificial",
    content: `Era dos Smartphones
• iPhone (2007) e Android (2008)
• Transformação em centrais de comunicação e computação

Inteligência Artificial e Computação Quântica
• Deep Blue: Derrotou campeão mundial de xadrez
• ChatGPT: Demonstra capacidades avançadas de linguagem
• Computação Quântica: IBM Q System e Google Sycamore (2019)
• Novas fronteiras para resolução de problemas complexos`,
    image: "/ai-future.jpg",
  },
  {
    id: 17,
    topic: "Conclusão",
    title: "Reflexão e Futuro",
    content: `A trajetória dos computadores reflete a criatividade humana e a capacidade de transformar ideias em tecnologias que moldam nosso cotidiano. Do simples ábaco às sofisticadas máquinas de inteligência artificial e computação quântica, cada avanço contribuiu para inovações futuras.

Refletir sobre como essas tecnologias transformam nossas vidas e os desafios éticos e sociais que elas trazem é fundamental para entendermos nosso papel na construção do futuro.`,
    image: "/future-computing.jpg",
  },
];

const Aula2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 2; // This is lesson 2

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

export default Aula2;
