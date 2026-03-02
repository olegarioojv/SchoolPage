// Importa a função styled da biblioteca styled-components.
// Permite criar componentes React já estilizados usando CSS-in-JS.
import styled from "styled-components";

/* ===============================
   CONTAINER GERAL DA SEÇÃO
================================== */

export const TrainingContainer = styled.div`
  /* Cor de fundo da seção */
  background: #fff2f3;

  /* Espaçamento interno em todos os lados */
  padding: 80px;

  /* Ativa flexbox */
  display: flex;

  /* Organiza os elementos em coluna */
  flex-direction: column;

  /* Centraliza os elementos horizontalmente */
  align-items: center;

  /* Ajuste para telas médias */
  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  /* Ajuste para mobile */
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

/* ===============================
   CABEÇALHO
================================== */

export const TrainingContent = styled.div`
  /* Alinha texto à esquerda */
  text-align: left;

  /* Limita largura máxima para melhor leitura */
  max-width: 860px;

  /* Ocupa toda largura disponível até o limite */
  width: 100%;

  /* Espaço abaixo antes dos cards */
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

/* Texto pequeno acima do título */
export const TrainingIntroduction = styled.p`
  color: #96bb7c; /* Verde destaque */
  font-weight: 700; /* Texto mais forte */
  font-size: 14px;
  margin-bottom: 8px;
`;

/* Título principal */
export const TrainingTitle = styled.h1`
  font-size: 34px; /* Tamanho grande */
  font-weight: 800; /* Bem forte */
  color: #252b42; /* Cor escura */
  margin-bottom: 12px;
  line-height: 1.2; /* Controla altura da linha */

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

/* Texto descritivo */
export const TrainingDescription = styled.p`
  color: #737373; /* Cinza secundário */
  font-size: 14px;
  line-height: 1.6; /* Melhora leitura */
  max-width: 500px; /* Limita largura do texto */

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

/* ===============================
   GRID DOS CARDS
================================== */

export const TrainingCardsWrapper = styled.div`
  display: grid; /* Ativa CSS Grid */

  /* Cria 3 colunas iguais */
  grid-template-columns: repeat(3, 1fr);

  /* Espaço entre os cards */
  gap: 24px;

  max-width: 860px;
  width: 100%;

  /* Tablet */
  @media (max-width: 1024px) {
    /* Reduz para 2 colunas */
    grid-template-columns: repeat(2, 1fr);

    max-width: 680px;
    margin: 0 auto; /* Centraliza */
  }

  /* Mobile */
  @media (max-width: 768px) {
    /* Apenas 1 coluna */
    grid-template-columns: 1fr;

    max-width: 420px;
    gap: 16px;
  }
`;

/* ===============================
   CARD
================================== */

export const TrainingCardContainer = styled.div`
  background: white;

  /* Sombra suave para efeito de elevação */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  /* Impede que conteúdo ultrapasse as bordas */
  overflow: hidden;
`;

/* ===============================
   IMAGEM
================================== */

export const TrainingCardImagem = styled.div`
  position: relative; /* Necessário para posicionamento absoluto interno */
  height: 230px;
  overflow: hidden; /* Corta excesso da imagem */

  @media (max-width: 768px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;

    /* Mantém proporção cortando excesso */
    object-fit: cover;

    display: block;
  }
`;

/* Badge SALE */
export const TrainingCardSale = styled.p`
  position: absolute; /* Sai do fluxo normal */
  top: 12px;
  left: 12px;

  background: #e74040;
  color: white;

  font-size: 11px;
  padding: 4px 10px;
  border-radius: 4px;

  font-weight: 700;
  letter-spacing: 0.3px;

  z-index: 1; /* Fica acima da imagem */
`;

/* Ícones flutuantes */
export const TrainingCardIcon = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;

  /* Centraliza horizontalmente */
  transform: translateX(-50%);

  display: flex;
  gap: 10px;

  span {
    background: white;
    width: 36px;
    height: 36px;

    border-radius: 50%; /* Forma circular */

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #252b42;

    /* Animação suave */
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  span:hover {
    /* Aumenta levemente */
    transform: scale(1.1);

    /* Sombra mais forte */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

/* ===============================
   CONTEÚDO DO CARD
================================== */

export const TrainingCardContent = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: column;

  gap: 8px; /* Espaço entre elementos */

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

/* Linha categoria + nota */
export const TrainingCardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Categoria */
export const TrainingCardIntroduction = styled.p`
  font-size: 12px;
  color: #23856d;
  font-weight: 700;
  letter-spacing: 0.2px;
`;

/* Nota */
export const TrainingCardNotes = styled.p`
  background: #2d4059;
  color: white;

  font-size: 11px;
  padding: 3px 8px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 4px;

  font-weight: 600;
`;

/* Título do curso */
export const TrainingCardTitle = styled.h2`
  font-size: 15px;
  font-weight: 700;
  color: #252b42;
  line-height: 1.3;
`;

/* Descrição */
export const TrainingCardParagraph = styled.p`
  font-size: 13px;
  color: #737373;
  line-height: 1.5;
`;

/* Linha de vendas */
export const TrainingCardSales = styled.p`
  font-size: 12px;
  color: #737373;

  display: flex;
  align-items: center;
  gap: 6px;

  border-top: 1px solid #f0f0f0;
  padding-top: 8px;
  margin-top: 2px;

  /* Estiliza ícones internos */
  * {
    color: #23856d;
    width: 14px;
    height: 14px;
  }
`;

/* Preço antigo */
export const TrainingCardPrice = styled.span`
  font-size: 13px;
  color: #bdbdbd;

  /* Risca o preço */
  text-decoration: line-through;

  font-weight: 500;
`;

/* Preço com desconto */
export const TrainingCardDiscount = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #23856d;
`;

/* Botão */
export const TrainingCardButton = styled.button`
  margin-top: 4px;

  border: 1px solid #23856d;
  background: transparent;
  color: #23856d;

  padding: 8px 16px;
  border-radius: 20px;

  font-size: 12px;
  font-weight: 700;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  cursor: pointer;

  /* Alinha à esquerda dentro do flex column */
  align-self: flex-start;

  letter-spacing: 0.2px;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #23856d;
    color: white;
  }
`;
