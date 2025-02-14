
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "photo-1461749280684-dccba630e2f6"
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
    image: "photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    topic: "Expansão",
    title: "Expansão e Melhoria Contínua",
    content: `O Instituto Arvoredo cresceu significativamente após seu marco transformador:

Projetos Iniciais:
• Plantio de 200 mudas no Parque da Cidade de Brasília
• Participação de 30 pessoas no primeiro projeto
• Aprendizado sobre o bioma Cerrado com Profª Rosângela Corrêa

Crescimento Estrutural:
• Criação do Espaço Cerrado para educação ambiental
• Aquisição de área de 20 hectares para nova sede
• Foco em restauração ecológica
• Promoção do bioma Cerrado

Alcance Atual:
• Credenciamento pelo Governo do DF para o Reciclotech
• Atuação em 14 estados
• Expansão para 4 países
• União de milhares de pessoas
• Oferta de educação ambiental e trilhas ecológicas`,
    image: "photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 4,
    topic: "Projeto",
    title: "O que é o Projeto Reciclotech?",
    content: `O Projeto Reciclotech representa um dos pilares mais importantes do Instituto Arvoredo:

Objetivos e Credenciamento:
• Programa credenciado pelo Governo do DF
• Foco no descarte adequado de lixo eletrônico
• Transformação de desafios em oportunidades

Áreas de Capacitação:
• Informática básica
• Manutenção de computadores
• Robótica
• Formação profissional para jovens e adultos

Impacto Social e Ambiental:
• Recondicionamento de eletrônicos
• Doação de equipamentos recuperados para:
  - Entidades privadas sem fins lucrativos
  - Órgãos públicos
• Promoção da inclusão digital
• Educação ambiental
• Conexão com comunidades`,
    image: "photo-1555949963-ff9fe0c870eb"
  },
  {
    id: 5,
    topic: "Parceiro",
    title: "Uniprocessus",
    content: `A Uniprocessus tem uma história rica de excelência em educação:

Origem e Fundação:
• Fundada em 1991
• Início com cursos preparatórios para carreiras jurídicas
• Primeira aula ministrada pelo Prof. Jaci Fernandes de Araújo
• Forte compromisso com qualidade de ensino

Evolução e Reconhecimento:
• Expansão além da área jurídica
• Cursos em Administração Pública
• Ciências Contábeis
• Gestão de Recursos Humanos
• Excelente avaliação pelo MEC

Modalidades de Ensino:
• Graduação presencial e EAD
• Pós-graduação e mestrado
• Preparatórios para concursos
• Cursos para OAB
• Formação completa e especializada`,
    image: "photo-1485827404703-89b55fcc595e"
  },
  {
    id: 6,
    topic: "Parceria",
    title: "Parceria com a Uniprocessus",
    content: `Nossa parceria com a Uniprocessus oferece oportunidades únicas de formação:

Cursos Profissionalizantes:
• Informática de nível médio e básico
• Montagem de computadores
• Pacote Office completo
• Design gráfico com Canva
• Inteligência artificial
• Redes sociais

Horários Flexíveis:
• Segunda a quinta-feira
• Períodos disponíveis:
  - Matutino
  - Vespertino
  - Noturno

Oportunidades para Alunos Reciclotech:
• Continuidade da formação
• Acesso a cursos superiores
• Desenvolvimento profissional contínuo
• Matrícula facilitada
• Suporte educacional completo`,
    image: "photo-1487611459768-bd0929079118"
  },
  {
    id: 7,
    topic: "Curso",
    title: "Plano de Ensino",
    content: `Nosso curso é estruturado em módulos progressivos:

Módulo Inicial (Aulas 1-3):
• Apresentação do curso
• História dos computadores
• Componentes de hardware básicos

Módulo Prático (Aulas 4-8):
• Montagem completa de PCs
• Configuração de BIOS
• Instalação de sistemas
• Redes e internet

Módulo Office (Aulas 9-13):
• Word básico e avançado
• Excel com fórmulas
• PowerPoint profissional

Módulo IA (Aulas 14-17):
• Fundamentos do ChatGPT
• Criação de textos
• Geração de imagens
• Projetos práticos

Módulo Design (Aulas 18-23):
• Fundamentos de design
• Canva profissional
• Redes sociais
• Marketing digital`,
    image: "photo-1555949963-ff9fe0c870eb"
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
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
