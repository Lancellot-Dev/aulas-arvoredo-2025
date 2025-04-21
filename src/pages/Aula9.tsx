
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    topic: "Excel Básico",
    title: "📘 Excel Básico: Abrindo o Excel",
    content: `🔹 1. Abrindo o Excel
• Clique no ícone do Excel no seu computador (normalmente fica no menu iniciar ou na área de trabalho).
• Ao abrir, você verá a tela inicial com modelos. Escolha "Pasta de Trabalho em Branco".`,
    image: "/excel-abertura.jpg",
  },
  {
    id: 2,
    topic: "Excel Básico",
    title: "Conhecendo a Tela do Excel",
    content: `🔹 2. Conhecendo a Tela do Excel
• Células: Cada caixinha onde você escreve algo. Elas são organizadas em linhas (1, 2, 3...) e colunas (A, B, C...).
• Barra de Fórmulas: Mostra o conteúdo da célula selecionada.
• Guias (ou abas) no topo: Como "Página Inicial", "Inserir", "Fórmulas", "Dados", etc.
• Planilhas: Parte inferior da tela, onde você pode ter várias abas (Plan1, Plan2...).`,
    image: "/excel-tela.jpg",
  },
  {
    id: 3,
    topic: "Excel Básico",
    title: "Inserindo e Formatando Dados",
    content: `🔹 3. Inserindo Dados
• Clique em uma célula e digite qualquer coisa (ex: nome, número, data).
• Pressione Enter para ir para a célula de baixo ou Tab para ir para a direita.

🔹 4. Formatando Dados
• Selecione a célula ou área.
• Vá na aba "Página Inicial":
  ○ Negrito / Itálico / Sublinhado.
  ○ Alinhamento: esquerda, centro, direita.
  ○ Cores e estilos de fonte.
  ○ Formatar como Tabela: transforma seus dados em uma tabela organizada.`,
    image: "/excel-formatacao.jpg",
  },
  {
    id: 4,
    topic: "Excel Básico",
    title: "Usando Fórmulas Simples & Gráficos",
    content: `🔹 5. Usando Fórmulas Simples
Digite as fórmulas começando com =. Exemplos:
• =A1+B1 → soma os valores das células A1 e B1.
• =SOMA(A1:A5) → soma tudo de A1 até A5.
• =MÉDIA(B1:B3) → calcula a média dos valores em B1, B2 e B3.

🔹 6. Criando um Gráfico
1. Selecione os dados (ex: nomes e valores).
2. Vá em "Inserir" → escolha um tipo de gráfico (coluna, pizza, barra...).
3. O gráfico aparecerá automaticamente na planilha.
4. Personalize usando as ferramentas de Design e Formato do Gráfico.`,
    image: "/excel-grafico.jpg",
  },
  {
    id: 5,
    topic: "Excel Básico",
    title: "Salvando, Dicas Extras",
    content: `🔹 7. Salvando seu Arquivo
• Clique em "Arquivo" → "Salvar Como".
• Escolha o local (seu computador, nuvem, pendrive...).
• Dê um nome e clique em Salvar.

🔹 8. Dicas Extras
• Use Ctrl + Z para desfazer.
• Use Ctrl + C / Ctrl + V para copiar e colar.
• Clique com o botão direito em uma célula para ver mais opções.`,
    image: "/excel-salvar.jpg",
  },
  {
    id: 6,
    topic: "Excel Intermediário",
    title: "Validação de Dados & Congelar Painéis",
    content: `🔹 1. Validação de Dados (criar listas suspensas)
Objetivo: Restringir o que pode ser digitado em uma célula (ex: permitir apenas "Sim" ou "Não").
Como fazer:
1. Selecione a(s) célula(s) desejada(s).
2. Vá na guia "Dados" → "Validação de Dados".
3. Em Permitir, escolha "Lista". Em Fonte, digite: Sim,Não. Clique em OK.

🔹 2. Congelar Painéis
Objetivo: Deixar títulos fixos na tela enquanto você rola a planilha.
Como fazer:
1. Clique na célula logo abaixo da linha e à direita da coluna que deseja congelar.
2. Vá em "Exibir" → "Congelar Painéis" → "Congelar Painéis" novamente.`,
    image: "/excel-validacao.jpg",
  },
  {
    id: 7,
    topic: "Excel Intermediário",
    title: "Filtro/Classificação & Funções Intermediárias",
    content: `🔹 3. Filtro e Classificação
Objetivo: Organizar e filtrar dados com facilidade.
Como fazer:
1. Clique em qualquer célula do seu banco de dados.
2. Vá em "Dados" → "Filtro".
3. Clique nas setas das colunas para filtrar ou classificar.

🔹 4. Funções Intermediárias
• SE(): =SE(A1>10;"Maior que 10";"Menor ou igual a 10")
• PROCV(): =PROCV("Produto A"; A2:B10; 2; FALSO)
• CONT.SE(): =CONT.SE(A1:A10;"Sim")`,
    image: "/excel-filtro.jpg",
  },
  {
    id: 8,
    topic: "Excel Intermediário",
    title: "Formatação Condicional & Tabelas Dinâmicas",
    content: `🔹 5. Formatação Condicional
Objetivo: Destacar automaticamente valores com cores.
1. Selecione o intervalo desejado.
2. Vá até "Página Inicial" → "Formatação Condicional".

🔹 6. Tabelas Dinâmicas (Introdução)
Objetivo: Resumir e analisar grandes volumes de dados.
1. Selecione sua base de dados.
2. Vá em "Inserir" → "Tabela Dinâmica".
3. Arraste campos para "Linhas", "Colunas", "Valores", "Filtros".`,
    image: "/excel-dinamica.jpg",
  },
  {
    id: 9,
    topic: "Excel Intermediário",
    title: "Gráficos Avançados e Segmentações",
    content: `🔹 7. Gráficos Avançados
• Gráfico combinado: mescla coluna + linha (ex: vendas + meta).
• Segmentações: usadas com Tabelas Dinâmicas para filtrar dados de forma visual.`,
    image: "/excel-avancado-graficos.jpg",
  },
  {
    id: 10,
    topic: "Excel Avançado",
    title: "Funções Avançadas",
    content: `🔹 1. Funções Avançadas
• ÍNDICE + CORRESP: =ÍNDICE(B2:B10;CORRESP("Produto A";A2:A10;0))
• SEERRO: =SEERRO(A1/B1; "Erro")
• SOMASES: =SOMASES(C2:C100;A2:A100;"João";B2:B100;">10")`,
    image: "/excel-avancado-funcoes.jpg",
  },
  {
    id: 11,
    topic: "Excel Avançado",
    title: "Tabelas Dinâmicas Avançadas & Análises",
    content: `🔹 2. Tabelas Dinâmicas com Análises Profundas
Recursos: Mostrar Valores Como, % do Total, Inserir Segmentações, Linha do Tempo etc.`,
    image: "/excel-analise-dinamica.jpg",
  },
  {
    id: 12,
    topic: "Excel Avançado",
    title: "Power Query",
    content: `🔹 3. Power Query (Importar e Transformar Dados)
1. Vá em "Dados" > "Obter Dados" > "De Arquivo" (ou web etc.).
2. O Power Query abre: remover colunas, preencher células, separar textos, mesclar tabelas.
3. Clique em "Fechar & Carregar".`,
    image: "/excel-powerquery.jpg",
  },
  {
    id: 13,
    topic: "Excel Avançado",
    title: "Macros, VBA, Validação Avançada",
    content: `🔹 4. Macros e VBA
Objetivo: Automatizar tarefas repetitivas no Excel.
Como gravar uma macro:
1. Vá em "Exibir" > "Macros" > "Gravar Macro".
2. Dê um nome significativo à macro.
3. Realize as ações que deseja automatizar.
4. Clique em "Parar Gravação" quando terminar.

🔹 5. Validação Avançada com Fórmulas
Use fórmulas para regras de entrada (ex: =E(A1>HOJE())).

🔹 6. Dashboards Interativos
Combine tabelas dinâmicas, gráficos, segmentações e controles de formulário para criar painéis analíticos completos.`,
    image: "/excel-macro-dashboard.jpg",
  },
];

const Aula9 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar currentLesson={9} />
        <div className="flex-1 overflow-auto">
          <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="p-4">
              <SidebarTrigger />
            </div>
            <div className="h-1.5 bg-blue-600 rounded-r-full" style={{ width: `${progress}%` }} />

            <div className="max-w-6xl mx-auto p-6">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  {slides[currentSlide].topic}
                </span>
                <h1 className="text-3xl font-bold mb-6 text-gray-800 font-serif">
                  {slides[currentSlide].title}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line font-serif">
                      {slides[currentSlide].content}
                    </p>
                  </div>
                  <div className="h-64 relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="object-contain w-full h-full p-2"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>

                {currentSlide === slides.length - 1 && (
                  <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4 items-center">
                    <a
                      href="/EXERCICIO_FINAL_2025.xlsx"
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
                    >
                      <Download className="w-4 h-4" />
                      Baixar Exercício Final
                    </a>
                  </div>
                )}
              </motion.div>

              <div className="flex justify-between items-center mt-8 mb-4 px-4">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  className="flex items-center gap-2 bg-white"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </Button>
                
                <span className="text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full border">
                  {currentSlide + 1} / {slides.length}
                </span>
                
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  className="flex items-center gap-2 bg-white"
                  aria-label="Próximo slide"
                >
                  <span className="hidden sm:inline">Próximo</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Aula9;
