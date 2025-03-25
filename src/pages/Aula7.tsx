
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, FileText, Edit, Layout, Book, Pencil, Image, Text, Bold, Table, Link, FileX, Share2, Printer, Search, ListOrdered } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const slides = [
  {
    id: 1,
    topic: "Introdução",
    title: "Microsoft Word: Interface e Recursos",
    content: `O Microsoft Word é um dos programas de processamento de texto mais utilizados no mundo. Sua interface é organizada em guias, cada uma contendo ferramentas específicas para diferentes tarefas.

Nesta aula, vamos explorar cada uma das principais guias do Word e suas funções, para que você possa utilizar o programa com mais eficiência em seus trabalhos escolares, acadêmicos ou profissionais.`,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    topic: "Guias",
    title: "Guia Arquivo",
    content: `A guia "Arquivo" é usada para gerenciar o documento como um todo, incluindo operações como criação, abertura, salvamento, impressão e compartilhamento de documentos.

Principais funções:
• Novo: Cria um novo documento em branco ou a partir de um modelo predefinido.
• Abrir: Abre documentos existentes de várias fontes, incluindo o computador, nuvem e localizações compartilhadas.
• Salvar: Salva o documento atual no local de origem.
• Salvar Como: Salva o documento atual com um novo nome, formato ou localização.
• Imprimir: Configura opções de impressão como tipo de impressora, páginas a serem impressas e orientação do papel.
• Compartilhar: Oferece opções para enviar o documento por e-mail, compartilhar via OneDrive ou criar um link compartilhável.
• Exportar: Permite converter o documento em outros formatos como PDF ou XPS.
• Fechar: Fecha o documento atual sem sair do Word.
• Conta: Mostra informações sobre a conta do usuário e opções de configuração da conta.
• Opções: Permite acessar configurações avançadas do Word, como personalização da interface e configuração de preferências.`,
    image: "/word-file-menu.jpg",
  },
  {
    id: 3,
    topic: "Guias",
    title: "Guia Página Inicial",
    content: `A guia "Página Inicial" contém ferramentas essenciais de formatação de texto e parágrafos, usadas com frequência para editar e ajustar o conteúdo do documento.

Principais funções:
• Área de Transferência: Inclui comandos para copiar, cortar e colar texto, além do comando "Pincel de Formatação" para copiar formatação.
• Fonte: Permite alterar o tipo, tamanho, cor da fonte, aplicar estilos como negrito, itálico, sublinhado, tachado, sublinhado duplo, sobrescrito, subscrito, efeitos de texto e alteração de maiúsculas/minúsculas.
• Parágrafo: Alinha texto à esquerda, direita, centralizado ou justificado; ajusta o espaçamento entre linhas; define recuos; cria listas com marcadores ou numeradas; adiciona sombreamento e bordas.
• Estilos: Aplica estilos predefinidos para títulos, subtítulos e parágrafos, facilitando a formatação consistente do documento.
• Edição: Ferramentas para localizar e substituir texto, além de selecionar rapidamente partes do documento.`,
    image: "/word-home-tab.jpg",
  },
  {
    id: 4,
    topic: "Guias",
    title: "Guia Inserir",
    content: `A guia "Inserir" permite adicionar diversos elementos ao documento, enriquecendo o conteúdo com gráficos, tabelas, imagens e outros objetos.

Principais funções:
• Páginas: Inclui opções para inserir capas, páginas em branco e quebras de página para organizar o conteúdo.
• Tabelas: Cria e formata tabelas, permitindo inserir e gerenciar dados de maneira estruturada.
• Ilustrações: Adiciona imagens, clip-arts, formas, SmartArt, gráficos e captura de tela para melhorar a visualização do conteúdo.
• Links: Insere hiperlinks para páginas web ou outros documentos, bookmarks dentro do documento e referências cruzadas para facilitar a navegação.
• Cabeçalho e Rodapé: Adiciona e edita cabeçalhos e rodapés para incluir informações como números de página, datas e títulos.
• Texto: Insere caixas de texto, WordArt, linhas de assinatura, a data e a hora atual, e objetos incorporados como documentos do Excel.
• Símbolos: Adiciona símbolos e caracteres especiais que não estão disponíveis no teclado.`,
    image: "/word-insert-tab.jpg",
  },
  {
    id: 5,
    topic: "Atividade",
    title: "Atividade Prática 1",
    content: `Responda às seguintes questões:

1. Cite duas formas de criar um arquivo no Word.
2. Qual é a extensão dos arquivos do Word?
3. O que são fontes?
4. Para que serve o pincel de formatação?
5. Qual a diferença de recortar, copiar e colar? Quais são os respectivos atalhos?
6. Qual função que faz com que pulemos para a próxima página mesmo que ainda haja espaço na página atual é chamada de?`,
    image: "/activity-word.jpg",
  },
  {
    id: 6,
    topic: "Guias",
    title: "Guia Desenhar",
    content: `A guia "Desenhar" fornece ferramentas para adicionar desenhos manuscritos, esboços, anotações e realces diretamente no documento, facilitando a criação de conteúdo visual e interativo.

Principais funções:
• Canetas: Escolha entre diferentes tipos de canetas, lápis e marcadores. Cada ferramenta pode ser personalizada em termos de cor e espessura.
• Caneta: Ideal para escrever ou desenhar com traços precisos.
• Lápis: Proporciona uma textura de desenho mais suave e esboçada.
• Marcador: Usado para destacar texto com cores transparentes.
• Converter Desenho em Formas: Transforma desenhos à mão livre em formas perfeitas, como círculos, quadrados e setas, reconhecendo automaticamente o que foi desenhado.
• Laço de Seleção: Seleciona desenhos à mão livre ou objetos desenhados para movê-los, redimensioná-los ou modificá-los.
• Apagador: Remove traços específicos ou desenhos completos feitos com as ferramentas de desenho.
• Régua: Ferramenta virtual que ajuda a desenhar linhas retas ou medir a distância entre pontos no documento.`,
    image: "/word-draw-tab.jpg",
  },
  {
    id: 7,
    topic: "Guias",
    title: "Guia Design",
    content: `A guia "Design" oferece opções para alterar a aparência geral do documento, aplicando temas, cores e estilos para criar uma aparência visualmente atraente.

Principais funções:
• Temas: Aplica um conjunto de formatos predefinidos que incluem esquemas de cores, fontes e efeitos para uniformizar a aparência do documento.
• Cores: Permite escolher esquemas de cores diferentes para aplicar ao documento.
• Fontes: Define combinações de fontes para títulos e texto normal.
• Efeitos: Aplica efeitos visuais predefinidos a gráficos, tabelas e SmartArt.
• Configuração da Página: Ajusta margens, orientação (retrato ou paisagem), tamanho do papel e colunas para organizar o layout do documento.
• Marca d'água: Adiciona texto ou imagens semitransparentes ao fundo do documento.
• Cor da Página: Altera a cor de fundo do documento.
• Bordas da Página: Adiciona bordas decorativas ao redor da página.`,
    image: "/word-design-tab.jpg",
  },
  {
    id: 8,
    topic: "Guias",
    title: "Guia Layout",
    content: `A guia "Layout" lida com a organização do texto e objetos na página, controlando o design do documento e como o conteúdo é distribuído.

Principais funções:
• Configuração da Página: Ajusta margens, orientação, tamanho do papel e colunas para formatar o layout da página.
• Parágrafo: Define recuos e espaçamento entre parágrafos para melhorar a legibilidade e a apresentação do texto.
• Organizar: Controla a posição de objetos, como imagens e tabelas, no documento, permitindo ajustar a disposição de texto em volta de objetos, trazer para frente ou enviar para trás, alinhar, agrupar e girar objetos.`,
    image: "/word-layout-tab.jpg",
  },
  {
    id: 9,
    topic: "Guias",
    title: "Guia Referências",
    content: `A guia "Referências" contém ferramentas para adicionar referências e citações ao documento, facilitando a criação de trabalhos acadêmicos e profissionais.

Principais funções:
• Sumário: Cria e atualiza sumários automáticos baseados nos estilos de título aplicados no documento.
• Notas de Rodapé: Insere e gerencia notas de rodapé e notas de fim, permitindo adicionar explicações e referências adicionais.
• Citações e Bibliografia: Gerencia fontes bibliográficas, insere citações no estilo desejado e cria bibliografias automaticamente.
• Índice: Marca entradas e cria um índice, permitindo que os leitores localizem rapidamente informações no documento.
• Legendas: Adiciona e gerencia legendas para figuras, tabelas e outros objetos.
• Referências Cruzadas: Cria links internos para outras partes do documento, como tabelas, figuras e seções específicas.`,
    image: "/word-references-tab.jpg",
  },
  {
    id: 10,
    topic: "Guias",
    title: "Guia Correspondências",
    content: `A guia "Correspondências" oferece ferramentas para criar correspondências em massa, como cartas, etiquetas e envelopes personalizados, facilitando a comunicação com múltiplos destinatários.

Principais funções:
• Iniciar Mala Direta: Configura um documento para mala direta, como cartas ou e-mails personalizados.
• Selecionar Destinatários: Escolhe a fonte de dados (como uma lista de endereços) que será usada para a mala direta.
• Escrever e Inserir Campos: Insere campos de mesclagem no documento, como nome, endereço e outros dados variáveis.
• Visualizar Resultados: Mostra uma prévia de como ficará o documento mesclado com os dados dos destinatários.
• Concluir: Finaliza a mala direta, permitindo imprimir documentos, enviar e-mails ou criar arquivos separados para cada destinatário.`,
    image: "/word-mailings-tab.jpg",
  },
  {
    id: 11,
    topic: "Guias",
    title: "Guia Revisão",
    content: `A guia "Revisão" fornece ferramentas para revisar e comentar o documento, facilitando a colaboração e a melhoria do conteúdo.

Principais funções:
• Revisão de Texto: Verifica a ortografia e a gramática do texto, sugerindo correções.
• Dicionário de Sinônimos: Fornece sugestões de sinônimos para palavras selecionadas.
• Idioma: Define o idioma do texto para verificações linguísticas.
• Comentários: Adiciona, exibe, responde e gerencia comentários no documento, permitindo colaboração entre vários usuários.
• Controle de Alterações: Rastreia todas as alterações feitas no documento, permitindo aceitar ou rejeitar mudanças.
• Comparar: Compara e combina diferentes versões do documento, destacando diferenças e mudanças.`,
    image: "/word-review-tab.jpg",
  },
  {
    id: 12,
    topic: "Guias",
    title: "Guia Exibir",
    content: `A guia "Exibir" contém configurações para alterar a forma como o documento é visualizado, ajudando a trabalhar de maneira mais eficiente.

Principais funções:
• Modos de Exibição: Alterna entre diferentes modos de exibição, como Layout de Impressão, Leitura em Tela Inteira, Rascunho e Estrutura de Tópicos.
• Mostrar/Ocultar: Exibe ou oculta elementos como régua, linhas de grade, painéis de navegação e marcas de parágrafo.
• Zoom: Ajusta o nível de zoom do documento para aumentar ou reduzir a visualização do conteúdo.
• Janela: Abre novas janelas do mesmo documento, organiza janelas abertas e exibe o documento em tela dividida.`,
    image: "/word-view-tab.jpg",
  },
  {
    id: 13,
    topic: "Atividade",
    title: "Atividade Prática 2",
    content: `Responda às seguintes questões:

• O que a opção "Espaçamento entre Linhas" permite ajustar?
• O que acontece quando usamos o atalho "Ctrl + Z" no Word?
• Para alterar a orientação da página de retrato para paisagem, qual guia devemos acessar?
• Qual opção permite dividir um texto em várias colunas, como em jornais e revistas?`,
    image: "/activity-word-2.jpg",
  },
  {
    id: 14,
    topic: "Recursos Adicionais",
    title: "Curso de Datilografia",
    content: `Para desenvolver suas habilidades de digitação, é importante praticar regularmente com ferramentas adequadas.

O curso de datilografia da AgilFingers oferece exercícios progressivos que ajudam a melhorar sua velocidade e precisão ao digitar.

Benefícios de um bom treinamento em datilografia:
• Aumento da produtividade em todas as tarefas que envolvem uso do computador
• Redução da fadiga e desconforto ao digitar por longos períodos
• Menor incidência de erros de digitação
• Capacidade de manter o foco no conteúdo, não no teclado

Clique no botão abaixo para acessar o curso gratuito:`,
    image: "/typing-course.jpg",
    link: {
      url: "https://agilefingers.com/pt",
      text: "Acessar Curso de Datilografia"
    }
  },
];

const Aula7 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentLesson = 7; // This is lesson 7

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
                  {slides[currentSlide].link && (
                    <a 
                      href={slides[currentSlide].link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Link className="w-4 h-4" />
                      {slides[currentSlide].link.text}
                    </a>
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

export default Aula7;
