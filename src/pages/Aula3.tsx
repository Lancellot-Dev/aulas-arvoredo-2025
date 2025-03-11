
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const slides = [
  {
    id: 18,
    topic: "Introdução",
    title: "Introdução aos Componentes Básicos de um Computador",
    content: `A aula de hoje tem como objetivo entender de forma simples e prática como os componentes físicos de um computador funcionam e se conectam para realizar tarefas do dia a dia. Vamos conhecer melhor a máquina que usamos todos os dias.`,
    image: "/computer-components.jpg",
  },
  {
    id: 19,
    topic: "Definição",
    title: "O Que É Um Computador?",
    content: `Um computador é uma máquina inteligente que recebe dados (como números, textos ou cliques do mouse), processa essas informações e entrega resultados (exibindo uma página na internet, reproduzindo música ou abrindo um arquivo). Ele pode ser:

• Desktop (computador de mesa)
• Notebook (portátil)
• Smartphone (um "mini computador" no seu bolso!)
• Servidor (gerencia redes e dados em empresas)

Analogia simples:
Pense no computador como um chef de cozinha:
• Ingredientes = dados (ex: cliques, fotos)
• Fogão = processador (CPU)
• Prato final = resultado (ex: vídeo, documento)`,
    image: "/types-of-computers.jpg",
  },
  {
    id: 20,
    topic: "Primeiros Passos",
    title: "Ligando Um Computador Pela Primeira Vez",
    content: `Siga estes passos se for sua primeira experiência:

Conecte os cabos:
• Gabinete/Notebook: Plugue na tomada
• Monitor: Conecte ao gabinete com cabo HDMI ou VGA (se for um desktop tradicional)
(Nota: Em computadores "all-in-one", monitor e CPU são a mesma unidade)

Pressione o botão de ligar:
• Localizado no gabinete (desktop) ou na lateral do notebook
• Símbolo universal: ⏻ (círculo com um traço vertical)

Aguarde a inicialização:
• Leva de 10 segundos a 2 minutos, dependendo do sistema
• A tela inicial (área de trabalho) aparecerá

Use o mouse e o teclado:
• Mouse: Clique em ícones para abrir programas
• Teclado: Digite textos ou comandos

Dica: Se o monitor não ligar, verifique se está conectado à energia e ao gabinete!`,
    image: "/computer-startup.jpg",
  },
  {
    id: 21,
    topic: "Gabinete",
    title: "Gabinete: A Casa dos Componentes",
    content: `O que é? A "caixa" que protege os componentes internos.

Função:
• Abriga peças como placa-mãe, processador e memória RAM
• Mantém a ventilação para evitar superaquecimento (graças às ventoinhas)

Curiosidade: Gamers usam gabinetes coloridos com luzes LED para personalização!

A placa-mãe (Motherboard) é a "plataforma" que conecta todas as peças. Suas funções incluem:
• Soquete da CPU: Onde o processador é instalado
• Slots de RAM: Para inserir memória
• Portas USB, HDMI, etc.: Conectam periféricos como mouse e impressora

Metáfora: Imagine uma cidade onde todas as ruas (componentes) se encontram.`,
    image: "/computer-case.jpg",
  },
  {
    id: 22,
    topic: "Processador",
    title: "Processador (CPU): O Cérebro do Computador",
    content: `O que é? O "cérebro" do computador.

Função: Realiza bilhões de cálculos por segundo para executar programas.

Exemplo: Quando você abre um vídeo no YouTube, a CPU decodifica o arquivo e envia para a placa de vídeo exibir.

Fato divertido: CPUs modernas têm velocidades de até 5 GHz (5 bilhões de ciclos por segundo!).

A Memória RAM é uma "mesa de trabalho temporária" para o computador:
• Armazena dados de programas em uso (ex: navegador, editor de texto)
• Quanto mais RAM, mais programas você pode usar ao mesmo tempo sem travar

Exemplo prático:
• 4 GB RAM: Suficiente para navegar na internet
• 16 GB RAM: Ideal para jogos e edição de vídeo`,
    image: "/cpu-ram.jpg",
  },
  {
    id: 23,
    topic: "Armazenamento",
    title: "Armazenamento: Onde Seus Arquivos Ficam Guardados",
    content: `O que é? A "prateleira" onde arquivos são guardados permanentemente.

Tipos:
• HD (Disco Rígido): Usa discos magnéticos. É mais lento, mas barato (ex: 1 TB por ~R$ 200)
• SSD (Unidade de Estado Sólido): Usa chips de memória. É rápido e silencioso (ex: inicia o Windows em 10 segundos)

Dica: Use um SSD para o sistema operacional e um HD para armazenar fotos e vídeos.

A Fonte de Alimentação (PSU) é a "usina de energia" do computador:
• Converte a energia da tomada (110V/220V) em voltagens seguras para os componentes (ex: 12V para a placa-mãe)

Cuidado: Nunca abra a fonte! Ela contém capacitores que podem dar choque mesmo desligada.`,
    image: "/storage-devices.jpg",
  },
  {
    id: 24,
    topic: "Placa de Vídeo",
    title: "Placa de Vídeo (GPU): O Artista Visual",
    content: `O que é? O "artista" que cria as imagens na tela.

Tipos:
• Integrada: Vem junto com a CPU (ex: Intel HD Graphics). Ideal para tarefas básicas
• Dedicada: Placa separada (ex: NVIDIA GeForce). Necessária para jogos e edição profissional

Curiosidade: GPUs também são usadas em mineração de criptomoedas!

Os Periféricos são dispositivos que conectamos ao computador:
• Entrada: Teclado, mouse, microfone, webcam
• Saída: Monitor, caixa de som, impressora
• Híbridos: Pendrive (armazena e transfere dados)`,
    image: "/gpu-peripherals.jpg",
  },
  {
    id: 25,
    topic: "Funcionamento",
    title: "Como Tudo Funciona Junto?",
    content: `Imagine um fluxo de trabalho:

• Energia: A fonte alimenta todos os componentes
• Processamento: A CPU recebe um comando (ex: "abra o Chrome") e usa a RAM para trabalhar
• Armazenamento: O HD/SSD fornece os arquivos necessários (ex: o programa Chrome)
• Exibição: A GPU mostra o navegador no monitor
• Comunicação: A placa-mãe coordena tudo, como um maestro em uma orquestra

Exemplo Prático:
Ao digitar um texto:
Teclado (entrada) → Placa-mãe → CPU → RAM (armazena temporariamente) → SSD (salva o arquivo) → Monitor (exibe o texto)`,
    image: "/computer-workflow.jpg",
  },
  {
    id: 26,
    topic: "Placas de Expansão",
    title: "Placas de Expansão e Conexões",
    content: `Além dos componentes principais, os computadores podem receber placas adicionais:

• Placa de Som: Melhora a qualidade do áudio para músicos e produtores
• Placa de Rede: Adiciona conexão Ethernet ou Wi-Fi
• Placa Capturadora: Grava vídeos de câmeras ou consoles de jogos

Conexões externas importantes:
• USB: Conecta a maioria dos periféricos (mouse, teclado, impressora)
• HDMI: Envia áudio e vídeo para monitores e TVs
• Ethernet: Conecta à internet via cabo
• Bluetooth: Conecta dispositivos sem fio (fones, mouse)`,
    image: "/expansion-cards.jpg",
  },
  {
    id: 27,
    topic: "Curiosidades",
    title: "Curiosidades Para Fixar o Conteúdo",
    content: `• O primeiro computador pessoal: IBM PC (1981), com apenas 16 KB de RAM!

• Por que "mouse"? O inventor (Douglas Engelbart) achou que o cabo parecia um rabo de rato.

• O maior HD do mundo: 30 TB (equivalente a 6.000 filmes em HD!).

• O processador mais rápido do mundo consegue realizar mais cálculos em 1 segundo do que uma pessoa poderia fazer em 1.000 anos.

• A tela do seu celular provavelmente tem mais pixels (pontos coloridos) do que as TVs dos anos 1990.

• A memória RAM "esquece" tudo quando o computador é desligado - por isso é importante salvar seus arquivos no HD/SSD!`,
    image: "/computer-fun-facts.jpg",
  },
];

const Aula3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 3; // This is lesson 3

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

export default Aula3;
