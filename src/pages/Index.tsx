
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    topic: "História",
    title: "Fundação e Início",
    content: `O Instituto Arvoredo foi fundado em junho de 2016, movido pela paixão dos seus fundadores pelo meio ambiente. No início, sem uma sede própria, as atividades eram realizadas nos intervalos dos trabalhos regulares, utilizando a garagem de casa como espaço de operações. A estratégia inicial focou em fortalecer a presença digital, principalmente por meio do Facebook, além da criação de um site com conteúdo educativo e artigos especializados. Assim, o Instituto Arvoredo nasceu no ambiente digital, com o objetivo de disseminar informações relevantes e inspirar ações ambientais.`,
    image: src=./public/arvoredo.jpg
  },
  {
    id: 2,
    topic: "Desenvolvimento",
    title: "Crescimento e Oportunidades",
    content: `O rápido crescimento digital do Instituto Arvoredo fez com que sua mensagem alcançasse mais de meio milhão de pessoas em pouco tempo. No entanto, apesar desse sucesso online, as parcerias desejadas não estavam se concretizando, o que levou à percepção de que a proposta de valor precisava ser mais clara e direcionada. Com o auxílio de especialistas, o Instituto passou a organizar suas ações de forma mais estruturada, facilitando o engajamento de diferentes públicos, como indivíduos, empresas, escolas e voluntários. A grande virada aconteceu quando o Instituto foi convidado para palestrar em uma SIPAT de uma multinacional, onde a palestra "Hábitos Angulares" marcou o início de um novo ciclo de sucesso.
`,
    image: "photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    topic: "Expansão",
    title: "Expansão e Melhoria Contínua",
    content: `Após o sucesso da palestra, o Instituto Arvoredo começou a expandir suas ações, iniciando com o plantio de 200 mudas no Parque da Cidade de Brasília, contando com a participação de 30 pessoas. Esse projeto cresceu rapidamente, assim como a compreensão sobre o bioma Cerrado, graças à orientação da Professora Rosângela Corrêa. A partir desse conhecimento, o Instituto criou o Espaço Cerrado, um local dedicado à educação ambiental e atividades sociais. O crescimento contínuo levou à aquisição de uma área de 20 hectares, onde foi estabelecida a nova sede do Instituto. A partir dessa base, o foco se expandiu para incluir restauração ecológica e a promoção do Cerrado. Hoje, o Instituto Arvoredo é credenciado pelo Governo do Distrito Federal para o programa Reciclotech e atua em mais de 14 estados, expandindo para 4 países. O Instituto continua a unir milhares de pessoas em prol de um futuro mais sustentável, oferecendo educação ambiental, trilhas ecológicas e muito mais.
`,
    image: "photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 4,
    topic: "Projeto",
    title: "O que é o Projeto Reciclotech?",
    content: `O Projeto Reciclotech é um dos pilares mais recentes e importantes do Instituto Arvoredo. Credenciado pelo Governo do Distrito Federal, o Reciclotech foi criado com o objetivo de enfrentar um dos maiores desafios ambientais da atualidade: o descarte inadequado de lixo eletrônico. O programa visa transformar esse desafio em oportunidade, oferecendo capacitação profissional para jovens e adultos em áreas como informática básica, manutenção de computadores e robótica.
`,
    image: "photo-1555949963-ff9fe0c870eb"
  },
  {
    id: 5,
    topic: "Parceiro",
    title: "Uniprocessus",
    content: `A Uniprocessus, com sua razão social de Instituto Processus de Cultura e Aperfeiçoamento Jurídico Ltda, começou em 1991 oferecendo cursos preparatórios para concursos de alto nível, especialmente para carreiras jurídicas como Juiz de Direito e Promotor de Justiça. Desde a primeira aula ministrada por seu fundador, o Professor Jaci Fernandes de Araújo, a instituição foi moldada com um forte compromisso com a qualidade de ensino, o que a levou a se tornar um centro de referência em educação jurídica no Distrito Federal e em todo o Brasil.
    
`,
    image: "photo-1485827404703-89b55fcc595e"
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
