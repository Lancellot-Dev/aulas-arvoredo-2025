import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, Wifi, Share2, Monitor, Chrome, Network } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const slides = [
  {
    id: 1,
    topic: "História",
    title: "Introdução às Redes de Computadores",
    content: `As redes de computadores surgiram na década de 1960, impulsionadas pela necessidade de comunicação entre sistemas remotos. O projeto ARPANET, desenvolvido pelo Departamento de Defesa dos Estados Unidos, foi um dos primeiros exemplos de rede de computadores interligados.

Com o tempo, novas tecnologias foram introduzidas, levando ao desenvolvimento da Internet como a conhecemos hoje.

Nos anos 1980 e 1990, protocolos como o TCP/IP se consolidaram, permitindo a comunicação padronizada entre diferentes sistemas.

Atualmente, as redes são fundamentais para diversas aplicações, desde redes locais (LANs) até redes de grande escala (WANs e a própria Internet).`,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
  },
  {
    id: 2,
    topic: "Conceitos",
    title: "Modelo OSI",
    content: `O modelo OSI é uma referência teórica para comunicação em redes, dividido em sete camadas, cada uma com uma função específica:

1. Física – Define o meio físico de transmissão (cabos, sinais elétricos, ópticos etc.).
2. Enlace de Dados – Garante a transmissão livre de erros entre nós da rede.
3. Rede – Responsável pelo roteamento e endereçamento lógico (ex.: IP).
4. Transporte – Garante a entrega confiável dos dados (ex.: TCP e UDP).
5. Sessão – Gerencia sessões de comunicação entre dispositivos.
6. Apresentação – Cuida da conversão e criptografia dos dados.
7. Aplicação – Interface com o usuário e serviços como HTTP, FTP, SMTP.`,
    image: "https://www.wifiman.com/imagens/blog/modelo-osi-sete-camadas.jpg",
  },
  {
    id: 3,
    topic: "Conceitos",
    title: "Modelo TCP/IP",
    content: `O modelo TCP/IP é mais prático e utilizado na Internet. Ele possui quatro camadas, que correspondem ao modelo OSI:

1. Acesso à Rede – Equivalente às camadas Física e Enlace do OSI.
2. Internet – Equivalente à camada de Rede, cuida do roteamento (IP).
3. Transporte – Equivalente à camada de Transporte do OSI (TCP, UDP).
4. Aplicação – Equivalente às camadas superiores do OSI (HTTP, SMTP, DNS etc.).

A principal diferença entre os modelos é que o OSI é conceitual, enquanto o TCP/IP é prático e amplamente utilizado.`,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
  },
  {
    id: 4,
    topic: "Estrutura",
    title: "Topologias de Rede",
    content: `A topologia de uma rede define como os dispositivos estão conectados. As principais são:

• Estrela – Todos os dispositivos se conectam a um ponto central (como um switch). É comum em redes Ethernet modernas.

• Malha – Cada nó é conectado a vários outros, garantindo redundância e alta disponibilidade (usada em redes críticas).

• Barramento – Todos os dispositivos compartilham o mesmo meio de transmissão. Antiga, tem baixa escalabilidade.

• Anel – Cada dispositivo é ligado ao próximo, formando um círculo. Se um nó falhar, pode afetar a comunicação.

• Híbrida – Combina elementos de várias topologias.`,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    topic: "Tecnologia",
    title: "Meios de Transmissão",
    content: `Os dados podem ser transmitidos por diferentes meios, cada um com características próprias:

• Cabos de par trançado (UTP/STP) – Utilizados em redes Ethernet, possuem baixo custo e boa taxa de transmissão.

• Fibra óptica – Utiliza luz para transmissão, oferecendo alta velocidade e imunidade a interferências eletromagnéticas.

• Wireless (Wi-Fi, Bluetooth etc.) – Conexões sem fio baseadas em ondas de rádio. Possuem mobilidade, mas são mais suscetíveis a interferências.

Cada tecnologia é escolhida conforme o cenário de aplicação e os requisitos de desempenho da rede.`,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    topic: "Software",
    title: "Navegadores",
    content: `Navegadores são programas que permitem acessar e interagir com conteúdo na internet, como páginas web, vídeos e downloads.

Principais funcionalidades em comum:
• Barra de endereço/navegação: Permite digitar URLs ou buscar termos.
• Abas: Abre múltiplas páginas simultaneamente.
• Favoritos/Bookmarks: Salva sites para acesso rápido.
• Histórico: Registra páginas visitadas.
• Extensões: Adiciona funcionalidades extras (bloqueadores de anúncios, tradutores, etc.).
• Modo de navegação privada: Não salva histórico, cookies ou dados temporários.
• Configurações personalizáveis: Aparência, privacidade e segurança.
• Sincronização de dados: Permite salvar configurações e favoritos em uma conta (Google, Microsoft, etc.).`,
    image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    topic: "Software",
    title: "Principais Navegadores",
    content: `Google Chrome:
• Desenvolvido pelo Google, é o navegador mais utilizado no mundo.
• Integração com serviços Google (Drive, Gmail, YouTube).
• Extensa biblioteca de extensões (Chrome Web Store).
• Atalhos úteis: Nova aba (Ctrl + T), Downloads (Ctrl + J), Navegação anônima (Ctrl + Shift + N).

Microsoft Edge:
• Substituiu o Internet Explorer e usa o motor Chromium (o mesmo do Chrome).
• Integração com Windows e serviços Microsoft (OneDrive, Office).
• Modo "Leitura Imersiva" (remove distrações de páginas).
• Recursos exclusivos: Coleções e Barra lateral com Bing Chat (IA).

Opera:
• Navegador conhecido por inovações em experiência do usuário (UX).
• VPN gratuita integrada e bloqueador de anúncios nativo.
• Painel lateral para acesso rápido a redes sociais (WhatsApp, Telegram).
• Workspaces para organizar abas em grupos temáticos (ex: Trabalho, Estudo).`,
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1162&q=80",
  },
];

const Aula6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 6; // This is lesson 6

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

          <div className="progress-bar w-full h-1 bg-gray-200 mb-4">
            <div
              className="h-full bg-indigo-600 transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="slide-container p-6 max-w-7xl mx-auto">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="slide-content mb-8"
            >
              <div className="content-grid flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <span className="topic-chip inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {slides[currentSlide].topic}
                  </span>
                  <h1 className="title text-3xl font-bold text-gray-900 mb-4">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {slides[currentSlide].content}
                  </p>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-0">
                  <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="slide-nav flex justify-center items-center mt-8">
              <button
                onClick={prevSlide}
                className="slide-nav-button bg-white rounded-full p-2 shadow-md text-gray-700 hover:bg-gray-100 transition-colors mr-4"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="flex items-center px-4 text-sm font-medium text-gray-600">
                {currentSlide + 1} / {slides.length}
              </span>
              <button
                onClick={nextSlide}
                className="slide-nav-button bg-white rounded-full p-2 shadow-md text-gray-700 hover:bg-gray-100 transition-colors ml-4"
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

export default Aula6;
