import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    topic: "Definição",
    title: "O que é um Computador?",
    content: `Um computador é uma máquina eletrônica programável que processa dados através de instruções lógicas. Seus componentes básicos incluem:

1. Unidade Central de Processamento (CPU):
• Responsável por executar cálculos e tomar decisões
• Composta por Unidade de Controle e Unidade Lógica Aritmética
• Velocidade medida em Hz (ciclos por segundo)

2. Memória:
• RAM (Random Access Memory): Memória volátil para dados temporários
• ROM (Read Only Memory): Memória permanente com instruções básicas
• Cache: Memória ultrarrápida que acelera o processamento

3. Dispositivos de Entrada/Saída:
• Entrada: Teclado, mouse, webcam, microfone
• Saída: Monitor, impressora, alto-falantes
• Entrada/Saída: Tela touchscreen, disco rígido

4. Barramento:
• Sistema de comunicação entre componentes
• Transfere dados, endereços e sinais de controle
• Diferentes velocidades para diferentes tipos de dados`,
    image: "photo-1483058712412-4245e9b90334"
  },
  {
    id: 2,
    topic: "História",
    title: "A Evolução dos Computadores",
    content: `A história dos computadores é fascinante e divide-se em várias gerações:

1ª Geração (1940-1956):
• Válvulas eletrônicas
• ENIAC: Primeiro computador eletrônico (1945)
• Ocupavam salas inteiras e consumiam muita energia
• Programação através de fios e interruptores

2ª Geração (1956-1963):
• Transistores substituem válvulas
• Menor tamanho e consumo de energia
• Início das linguagens de programação
• IBM 1401: Primeiro computador comercial bem-sucedido

3ª Geração (1964-1971):
• Circuitos integrados (chips)
• IBM 360: Primeira família de computadores compatíveis
• Sistemas operacionais mais sofisticados
• Multiprogramação e tempo compartilhado

4ª Geração (1971-atual):
• Microprocessadores
• Computadores pessoais
• Interface gráfica e mouse
• Internet e computação em nuvem

Curiosidades:
• O primeiro "bug" foi literalmente um inseto (uma mariposa) encontrado no Mark II em 1947
• O primeiro mouse foi feito de madeira
• O primeiro disco rígido (1956) pesava uma tonelada e armazenava 5MB`,
    image: "photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    topic: "Tipos",
    title: "Categorias de Computadores",
    content: `Os computadores modernos se dividem em várias categorias com propósitos específicos:

1. Computadores Pessoais (PCs):
• Desktop: Para uso em mesa, expansível
• Notebook: Portátil, bateria própria
• All-in-One: Monitor e CPU integrados
Exemplo: iMac, Dell XPS

2. Dispositivos Móveis:
• Smartphones: Computadores de bolso
• Tablets: Foco em consumo de mídia
• Smartwatches: Computação vestível
Exemplo: iPhone, iPad, Galaxy Watch

3. Servidores:
• Web Servers: Hospedam sites
• Database Servers: Gerenciam dados
• Application Servers: Executam aplicações
Exemplo: Amazon AWS, Google Cloud

4. Supercomputadores:
• Processamento paralelo massivo
• Usado em pesquisas científicas
• Simulações complexas
Exemplo: Frontier (EUA), Fugaku (Japão)

5. Sistemas Embarcados:
• Propósito específico
• Presente em eletrodomésticos
• Carros modernos, semáforos
Exemplo: Arduino, Raspberry Pi`,
    image: "photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 4,
    topic: "Instituto Arvoredo",
    title: "Nossa História e Missão",
    content: `Fundado em junho de 2016, o Instituto Arvoredo nasceu da paixão pelo meio ambiente. Nossa jornada:

Início e Crescimento Digital:
• Começamos em uma garagem, com forte presença digital
• Alcance de mais de meio milhão de pessoas
• Palestra "Hábitos Angulares" como marco de transformação

Expansão e Realizações:
• Plantio inicial de 200 mudas no Parque da Cidade
• Criação do Espaço Cerrado para educação ambiental
• Aquisição de área de 20 hectares para nova sede
• Atuação em 14 estados e expansão para 4 países

Projeto Reciclotech:
• Credenciado pelo Governo do DF
• Foco em descarte adequado de lixo eletrônico
• Capacitação profissional em informática
• Recondicionamento de equipamentos eletrônicos
• Promoção da inclusão digital`,
    image: "photo-1461749280684-dccba630e2f6"
  },
  {
    id: 5,
    topic: "Uniprocessus",
    title: "Parceria Educacional",
    content: `A Uniprocessus, fundada em 1991, é nossa parceira estratégica na educação:

História e Crescimento:
• Início com cursos preparatórios para carreiras jurídicas
• Expansão para outras áreas essenciais
• Reconhecimento pelo MEC
• Diversificação de modalidades de ensino

Nossa Parceria:
• Cursos profissionalizantes em informática
• Níveis médio e básico
• Montagem de computadores
• Pacote Office e design gráfico
• Inteligência artificial e redes sociais

Horários Flexíveis:
• Segunda a quinta-feira
• Períodos: matutino, vespertino e noturno
• Formação completa para o mercado de trabalho

Oportunidades para Alunos:
• Continuidade nos estudos após Reciclotech
• Variedade de cursos superiores
• Foco em desenvolvimento profissional`,
    image: "photo-1485827404703-89b55fcc595e"
  },
  {
    id: 6,
    topic: "Plano de Ensino",
    title: "Estrutura do Curso",
    content: `Nosso curso é estruturado em módulos práticos e teóricos:

Módulo 1 - Fundamentos (Aulas 1-3):
• Introdução ao curso
• História dos computadores
• Componentes de hardware

Módulo 2 - Prática (Aulas 4-8):
• Montagem de PC
• Sistemas operacionais
• Redes e internet

Módulo 3 - Office (Aulas 9-13):
• Word básico e avançado
• Excel fundamentos e funções
• PowerPoint

Módulo 4 - Tecnologias Modernas (Aulas 14-17):
• ChatGPT e IA
• Criação de textos e imagens
• Projetos práticos

Módulo 5 - Design e Mídias (Aulas 18-23):
• Design gráfico
• Canva
• Redes sociais

Avaliação:
• Montagem prática de PC
• Projeto com ChatGPT e Word
• Avaliação final específica`,
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
