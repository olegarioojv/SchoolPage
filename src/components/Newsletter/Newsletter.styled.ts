// Importa styled-components para criar componentes estilizados
import styled from "styled-components";

// ================================
// CONTAINER PRINCIPAL
// ================================
export const NewsletterContainer = styled.div`
  /* Ocupa toda largura disponível */
  width: 100%;

  /* Espaçamento vertical grande para dar destaque à seção */
  padding: 100px 20px;

  /* Layout em coluna */
  display: flex;
  flex-direction: column;

  /* Centraliza horizontalmente */
  align-items: center;

  /* Centraliza textos */
  text-align: center;
`;

// ================================
// TEXTO PEQUENO DE INTRODUÇÃO
// ================================
export const NewsletterIntroduction = styled.p`
  color: #7fb069; /* Verde destaque */
  font-size: 14px;
  font-weight: 600; /* Semi-bold */
  margin-bottom: 10px;
`;

// ================================
// TÍTULO PRINCIPAL
// ================================
export const NewsletterTitle = styled.h1`
  font-size: 36px; /* Tamanho fixo (poderia usar clamp para responsividade) */
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 20px;
`;

// ================================
// DESCRIÇÃO
// ================================
export const NewsletterDescription = styled.p`
  /* Limita largura para melhor legibilidade */
  max-width: 600px;

  font-size: 14px;
  color: #777;

  /* Espaçamento entre linhas */
  line-height: 1.6;

  margin-bottom: 40px;
`;

// ================================
// CONTAINER DO INPUT + BOTÃO
// ================================
export const NewsletterAction = styled.div`
  display: flex;

  width: 100%;
  max-width: 500px; /* Evita esticar demais */

  @media (max-width: 600px) {
    /* Empilha input e botão no mobile */
    flex-direction: column;

    /* Espaçamento entre eles */
    gap: 10px;
  }
`;

// ================================
// INPUT DE EMAIL
// ================================
export const NewsletterInput = styled.input`
  /* Faz ocupar todo espaço disponível */
  flex: 1;

  padding: 14px 16px;

  border: 1px solid #ddd;

  /*
    Remove a borda direita
    para juntar visualmente com o botão
  */
  border-right: none;

  /* Remove outline padrão do navegador */
  outline: none;

  font-size: 14px;

  /*
    Arredonda apenas lado esquerdo
    (para combinar com botão ao lado)
  */
  border-radius: 6px 0 0 6px;

  @media (max-width: 600px) {
    /* No mobile, arredonda todos os lados */
    border-radius: 6px;

    /* Restaura borda direita */
    border-right: 1px solid #ddd;
  }
`;

// ================================
// BOTÃO DE ENVIO
// ================================
export const NewsletterButton = styled.button`
  padding: 14px 24px;

  background: #7fb069;
  color: white;

  border: none;

  font-weight: 600;
  cursor: pointer;

  /*
    Arredonda apenas lado direito
    para formar um único bloco com o input
  */
  border-radius: 0 6px 6px 0;

  @media (max-width: 600px) {
    /* No mobile fica independente */
    border-radius: 6px;
  }

  &:hover {
    /* Efeito visual simples */
    opacity: 0.9;
  }
`;
