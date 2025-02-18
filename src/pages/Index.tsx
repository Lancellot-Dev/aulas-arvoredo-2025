
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const slides = [
  {
    id: 1,
    topic: "História",
    title: "Fundação e Início",
    content: `O Instituto Arvoredo foi fundado em junho de 2016, movido pela paixão dos seus fundadores pelo meio ambiente. Nossa história começa de forma humilde e inspiradora:

• Início em uma garagem como espaço de operações
• Atividades realizadas nos intervalos dos trabalhos regulares
• Forte estratégia de presença digital inicial
• Foco no Facebook e site com conteúdo educativo
• Disseminação de informações ambientais relevantes

O Instituto nasceu no ambiente digital com o objetivo claro de inspirar ações ambientais e compartilhar conhecimento especializado.`,
    image: "/imagesa.png"
  },
  {
    id: 2,
    topic: "Desenvolvimento",
    title: "Crescimento e Oportunidades",
    content: `O crescimento do Instituto Arvoredo foi marcado por importantes conquistas e aprendizados:

Expansão Digital:
• Alcance de mais de meio milhão de pessoas
• Desenvolvimento de presença online significativa

Evolução Estratégica:
• Reestruturação da proposta de valor
• Organização mais estruturada das ações
• Melhor engajamento com diferentes públicos:
  - Indivíduos
  - Empresas
  - Escolas
  - Voluntários

Marco Transformador:
• Convite para palestra em SIPAT de multinacional
• "Hábitos Angulares" como ponto de virada
• Início de um novo ciclo de sucesso`,
    image: "/arvoredo.jpg"
  },
  {
    id: 3,
    topic: "Expansão",
    title: "Expansão e Melhoria Contínua",
    content: `Após o sucesso da palestra, o Instituto Arvoredo começou a expandir suas ações, iniciando com o plantio de 200 mudas no Parque da Cidade de Brasília, contando com a participação de 30 pessoas. Esse projeto cresceu rapidamente, assim como a compreensão sobre o bioma Cerrado, graças à orientação da Professora Rosângela Corrêa. A partir desse conhecimento, o Instituto criou o Espaço Cerrado, um local dedicado à educação ambiental e atividades sociais. O crescimento contínuo levou à aquisição de uma área de 20 hectares, onde foi estabelecida a nova sede do Instituto. A partir dessa base, o foco se expandiu para incluir restauração ecológica e a promoção do Cerrado. Hoje, o Instituto Arvoredo é credenciado pelo Governo do Distrito Federal para o programa Reciclotech e atua em mais de 14 estados, expandindo para 4 países. O Instituto continua a unir milhares de pessoas em prol de um futuro mais sustentável, oferecendo educação ambiental, trilhas ecológicas e muito mais.
`,
    image: "/plante uma arvore.jpg"
  },
  {
    id: 4,
    topic: "Projeto",
    title: "O que é o Projeto Reciclotech?",
    content: `O Projeto Reciclotech é um dos pilares mais recentes e importantes do Instituto Arvoredo. Credenciado pelo Governo do Distrito Federal, o Reciclotech foi criado com o objetivo de enfrentar um dos maiores desafios ambientais da atualidade: o descarte inadequado de lixo eletrônico. O programa visa transformar esse desafio em oportunidade, oferecendo capacitação profissional para jovens e adultos em áreas como informática básica, manutenção de computadores e robótica.
`,
    image: "/reciclotech.png"
  },
  {
    id: 5,
    topic: "Parceiro",
    title: "Uniprocessus",
    content: `A Uniprocessus, com sua razão social de Instituto Processus de Cultura e Aperfeiçoamento Jurídico Ltda, começou em 1991 oferecendo cursos preparatórios para concursos de alto nível, especialmente para carreiras jurídicas como Juiz de Direito e Promotor de Justiça. Desde a primeira aula ministrada por seu fundador, o Professor Jaci Fernandes de Araújo, a instituição foi moldada com um forte compromisso com a qualidade de ensino, o que a levou a se tornar um centro de referência em educação jurídica no Distrito Federal e em todo o Brasil.
    
`,
    image: "logo Uniprocessus.png"
  },
  {
    id: 6,
    topic: "Parceria",
    title: "Parceria com a Uniprocessus",
    content: `O Instituto Arvoredo firmou uma parceria com a Uniprocessus, um centro universitário, para oferecer curso profissionalizante em informática de nível básico. Esses cursos abrangem montagem de computadores, o pacote Office, design gráfico básico com foco na ferramenta Canva, além de temas emergentes como inteligência artificial e redes sociais.

Horários Flexíveis:

• Segunda a quinta-feira
• Períodos disponíveis:
    - Matutino
    - Vespertino
    - Noturno`,
    image: "/Uniprocessus.jpg"
  },
  {
    id: 7,
    topic: "Curso",
    title: "Plano de Ensino",
    content: `
Módulo Inicial (Aulas 1-3):
• Apresentação do Plano de Ensino e Instituições
• História dos computadores
• Componentes básicos

Módulo Prático (Aulas 4-8):
• Montagem completa de PCs
• Software e Sistemas Operacionais
• Instalação de sistemas (pratica)
• Redes e internet e Navegadores

Módulo Office (Aulas 9-13):
• Word 
• Excel
• PowerPoint

Módulo IA (Aulas 14-17):
• Introdução e Conceitos
• Criação de textos
• Geração de imagens
• Projetos práticos

Módulo Design (Aulas 18-23):
• Fundamentos de design
• Introdução ao Canva
• Redes sociais

Avaliação Final (Aula 24):
• Apresentação de Trabalho final`,
    image: "pde.png"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 1; // This is lesson 1

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
              <span className="topic-chip">{slides[currentSlide].topic}</span>
              <h1 className="title">{slides[currentSlide].title}</h1>
              <div className="content-grid">
                <div className="col-span-2">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                    {slides[currentSlide].content}
                  </p>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden mb-8">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="absolute inset-0 w-full h-full object-contain"
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

export default Index;
