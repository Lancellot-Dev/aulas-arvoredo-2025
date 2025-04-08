
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    topic: "Introdução",
    title: "📘 Aula 8 - Introdução ao Excel",
    content: `🎯 Objetivo da Aula
Introduzir os fundamentos do Excel, incluindo sua interface, conceitos básicos, atalhos essenciais e técnicas de automação como o Preenchimento Relâmpago. Ao final da aula, o aluno será capaz de:
•	Navegar na interface do Excel com confiança.
•	Utilizar atalhos para otimizar tarefas.
•	Aplicar o Preenchimento Relâmpago para automatizar dados.
•	Criar e formatar planilhas simples.`,
    image: "/excel-interface.jpg"
  },
  {
    id: 2,
    topic: "Conceitos Básicos",
    title: "📂 Conceitos Básicos do Excel",
    content: `1. Pasta de Trabalho
•	É o arquivo do Excel (ex: curso_excel.xlsx).
•	Como criar: Arquivo > Novo > Pasta de trabalho em branco.
•	Dica: Salve frequentemente com Ctrl + S para evitar perdas.

2. Planilhas
•	São as "abas" dentro da pasta (ex: "Vendas", "Clientes").
•	Adicionar nova planilha: Clique no ícone + ao lado das abas existentes.
•	Renomear: Duplo clique no nome da aba.

3. Colunas, Linhas e Células
•	Colunas: Identificadas por letras (A, B, ..., AA, AB...).
•	Linhas: Numeradas de 1 a 1.048.576.
•	Célula: Interseção de linha e coluna (ex: B10).
•	Intervalo: Grupo de células (ex: A1:D10).`,
    image: "/excel-basics.jpg"
  },
  {
    id: 3,
    topic: "Interface",
    title: "🖥️ Interface do Excel: Guias e Ferramentas",
    content: `Guia	Funções Principais
Página Inicial	Formatação básica, alinhamento, estilos de fonte, copiar/colar.
Inserir	Gráficos, tabelas, imagens, formas.
Fórmulas	Funções matemáticas, lógicas, estatísticas (ex: SOMA, SE).
Dados	Importar dados, filtros, validação, ferramentas de análise.
Revisão	Verificação ortográfica, comentários, proteger planilha.`,
    image: "/excel-ribbons.jpg"
  },
  {
    id: 4,
    topic: "Atalhos",
    title: "⚡ Atalhos Essenciais",
    content: `Navegação:
•	Ctrl + Page Down/Page Up: Alternar entre planilhas.
•	Ctrl + Seta (→, ←, ↑, ↓): Ir para a extremidade dos dados.
•	Ctrl + Home: Voltar para a célula A1.

Edição:
•	Ctrl + C / Ctrl + V: Copiar e colar.
•	Ctrl + Z / Ctrl + Y: Desfazer e refazer.
•	Ctrl + D: Copiar conteúdo da célula acima.

Formatação:
•	Ctrl + B / I / U: Negrito, Itálico, Sublinhado.
•	Alt + H + O + I: Ajustar largura da coluna automaticamente.`,
    image: "/excel-shortcuts.jpg"
  },
  {
    id: 5,
    topic: "Flash Fill",
    title: "🚀 Preenchimento Relâmpago (Flash Fill)",
    content: `O que é?
Ferramenta que identifica padrões em dados e preenche automaticamente colunas (disponível a partir do Excel 2013).

Como usar:
1.	Digite um exemplo do padrão desejado (ex: Ana Silva → SILVA, Ana).
2.	Pressione Ctrl + E ou vá para Dados > Preenchimento Relâmpago.
3.	O Excel completará as células restantes seguindo o padrão.

Aplicações comuns:
•	Separar nomes e sobrenomes.
•	Formatar datas, CPF, telefones.
•	Extrair informações de textos (ex: domínios de e-mails).`,
    image: "/excel-flashfill.jpg"
  },
  {
    id: 6,
    topic: "Prática",
    title: "Exemplos Práticos",
    content: `Prática 1:
1.	Na coluna A, insira: maria@gmail.com; joao@hotmail.com.
2.	Na coluna B, digite gmail ao lado de "maria" e pressione Ctrl + E.
O Excel identificará que você quer extrair o domínio do email!

Prática 2:
•	Na coluna D, insira datas no formato dd/mm/aaaa (ex: 01/01/2023).
•	Na coluna E, digite "Jan-23" ao lado da primeira data e pressione Ctrl + E.
O Excel formatará todas as outras datas no mesmo padrão!`,
    image: "/excel-practice.jpg"
  },
  {
    id: 7,
    topic: "Boas Práticas",
    title: "📌 Dicas de Boas Práticas",
    content: `1.	Nomeie planilhas claramente (evite "Planilha1", "Planilha2").
2.	Use cabeçalhos em negrito para identificar colunas.
3.	Salve versões diferentes ao fazer alterações significativas.
4.	Utilize fórmulas em vez de valores fixos quando possível.
5.	Crie um padrão de cores e formatação consistente.
6.	Documente fórmulas complexas com comentários.
7.	Proteja células com fórmulas importantes para evitar alterações acidentais.`,
    image: "/excel-bestpractices.jpg"
  }
];

const Aula8 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="flex h-screen">
      <AppSidebar currentLesson={8} />
      <div className="flex-1 overflow-auto">
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="h-1 bg-blue-500" style={{ width: `${progress}%` }} />
          
          <div className="max-w-6xl mx-auto p-6">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                {slides[currentSlide].topic}
              </span>
              <h1 className="text-3xl font-bold mb-6 text-gray-800">
                {slides[currentSlide].title}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                    {slides[currentSlide].content}
                  </p>
                </div>
                <div className="h-64 relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <span className="text-sm font-medium text-gray-500">
                {currentSlide + 1} / {slides.length}
              </span>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aula8;
