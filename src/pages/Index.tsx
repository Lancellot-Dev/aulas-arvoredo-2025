
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
    topic: "Propósito",
    title: "Aplicações e Impacto na Sociedade",
    content: `Os computadores revolucionaram praticamente todos os aspectos da vida moderna:

1. Ciência e Pesquisa:
• Sequenciamento de DNA
• Previsão do tempo
• Simulações físicas
• Descoberta de medicamentos

2. Medicina:
• Diagnóstico por imagem
• Cirurgias robóticas
• Prontuários eletrônicos
• Telemedicina

3. Educação:
• Ensino à distância
• Simuladores de treinamento
• Recursos interativos
• Inteligência artificial adaptativa

4. Negócios:
• Automação de processos
• Big Data e Analytics
• Comércio eletrônico
• Sistemas de gestão

5. Entretenimento:
• Jogos e realidade virtual
• Streaming de mídia
• Redes sociais
• Criação digital

Impacto Social:
• Transformação do mercado de trabalho
• Novas formas de comunicação
• Democratização do conhecimento
• Questões de privacidade e segurança`,
    image: "photo-1461749280684-dccba630e2f6"
  },
  {
    id: 5,
    topic: "Fundamentos",
    title: "Como os Computadores Funcionam",
    content: `Entendendo o funcionamento básico dos computadores:

1. Sistema Binário:
• Baseado em 0s e 1s
• Bit: Unidade básica
• Byte: 8 bits
• Representação de dados

2. Ciclo Básico:
• Busca de instrução
• Decodificação
• Execução
• Armazenamento

3. Hierarquia de Memória:
• Registradores (mais rápidos)
• Cache L1, L2, L3
• Memória RAM
• Armazenamento em disco

4. Pipeline de Instruções:
• Execução paralela
• Otimização de desempenho
• Branch prediction
• Superescalaridade

Curiosidades:
• Um processador moderno pode executar bilhões de instruções por segundo
• A primeira memória RAM custava US$ 400/KB em 1975
• O primeiro disco rígido da IBM armazenava 5MB por US$ 50.000`,
    image: "photo-1555949963-ff9fe0c870eb"
  },
  {
    id: 6,
    topic: "Futuro",
    title: "Tendências e Inovações",
    content: `O futuro da computação promete avanços revolucionários:

1. Computação Quântica:
• Qubits ao invés de bits
• Processamento paralelo massivo
• Criptografia quântica
• Simulações moleculares

2. Inteligência Artificial:
• Machine Learning avançado
• Processamento de linguagem natural
• Visão computacional
• Sistemas autônomos

3. Computação Neuromórfica:
• Inspirada no cérebro humano
• Baixo consumo de energia
• Processamento em tempo real
• Aplicações em robótica

4. Internet das Coisas (IoT):
• Dispositivos conectados
• Cidades inteligentes
• Automação residencial
• Indústria 4.0

Desafios Futuros:
• Consumo de energia
• Limites físicos dos processadores
• Segurança e privacidade
• Impacto ambiental

Uma reflexão importante é como essas tecnologias afetarão a sociedade e como podemos garantir seu uso ético e sustentável.`,
    image: "photo-1485827404703-89b55fcc595e"
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
