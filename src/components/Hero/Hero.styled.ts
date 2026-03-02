// Importa styled-components para criar componentes estilizados
import styled from "styled-components";

/* ================= HERO ================= */

// Container principal da seção Hero
export const HeroContainer = styled.div`
  /* Layout horizontal */
  display: flex;

  /* Centraliza verticalmente */
  align-items: center;

  /* Centraliza horizontalmente */
  justify-content: center;

  /* Espaço entre texto e imagem */
  gap: 60px;

  /*
    Padding responsivo:
    - 40px vertical
    - Horizontal usa clamp:
      mínimo 16px
      ideal 5% da largura
      máximo 80px
  */
  padding: 40px clamp(16px, 5vw, 80px);

  @media (max-width: 900px) {
    /* Empilha conteúdo no mobile */
    flex-direction: column;

    /* Centraliza textos */
    text-align: center;

    /* Reduz espaçamento */
    gap: 32px;
  }
`;

// Container do conteúdo textual
export const HeroContent = styled.div`
  /* Limita largura do texto para melhor legibilidade */
  max-width: 520px;

  @media (max-width: 900px) {
    /* Permite ocupar 100% no mobile */
    max-width: 100%;
  }
`;

// Texto pequeno acima do título
export const HeroIntroduction = styled.p`
  color: #96bb7c; /* Verde destaque */
  font-weight: 600; /* Semi-bold */
  font-size: 14px;
  margin-bottom: 16px;
`;

// Título principal do Hero
export const HeroTitle = styled.h1`
  color: #252b42;

  /*
    Fonte responsiva:
    mínimo 32px
    escala com 5vw
    máximo 48px
  */
  font-size: clamp(32px, 5vw, 48px);

  font-weight: 800;
  line-height: 1.1; /* Compacto para títulos grandes */
  margin-bottom: 20px;
`;

// Descrição abaixo do título
export const HeroDescription = styled.p`
  color: #737373;
  font-size: 16px;
  line-height: 1.6; /* Melhora leitura */
  margin-bottom: 30px;
`;

// Container dos botões
export const HeroButtons = styled.div`
  display: flex;

  /* Espaço entre botões */
  gap: 12px;

  /* Permite quebrar linha se faltar espaço */
  flex-wrap: wrap;

  @media (max-width: 900px) {
    /* Centraliza botões no mobile */
    justify-content: center;
  }
`;

// Botão principal (CTA)
export const BudgetButton = styled.button`
  background: #96bb7c;
  color: white;
  border: none;

  padding: 12px 22px;
  border-radius: 6px;

  font-weight: 600;
  cursor: pointer;

  /* Transição suave */
  transition: 0.2s;

  &:hover {
    /* Tom mais escuro no hover */
    background: #7da866;
  }
`;

// Botão secundário
export const FindOutButton = styled.button`
  background: transparent;

  color: #96bb7c;
  border: 1px solid #96bb7c;

  padding: 12px 22px;
  border-radius: 6px;

  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    /* Inverte cores no hover */
    background: #96bb7c;
    color: white;
  }
`;

// Container da imagem do Hero
export const HeroImgContainer = styled.div`
  /*
    Largura responsiva:
    mínimo 260px
    ideal 40vw
    máximo 460px
  */
  width: clamp(260px, 40vw, 460px);

  display: flex;
  justify-content: center;

  img {
    width: 100%; /* Ocupa todo container */
    height: auto; /* Mantém proporção */
    object-fit: contain; /* Evita distorção */
  }
`;

/* ================= CARDS ================= */

// Container geral dos cards
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;

  /*
    Padding horizontal responsivo
  */
  padding: 20px clamp(16px, 5vw, 80px);
`;

// Wrapper interno dos cards
export const CardContent = styled.div`
  display: flex;
  gap: 24px;

  width: 100%;
  max-width: 1000px;

  @media (max-width: 900px) {
    /* Empilha no mobile */
    flex-direction: column;
  }
`;

// Card individual
export const Card = styled.div`
  background: white;
  border-radius: 10px;

  /* Padding responsivo */
  padding: clamp(22px, 3vw, 40px);

  /*
    flex: 1 → cada card ocupa mesma proporção
  */
  flex: 1;

  /* Garante largura mínima */
  min-width: 260px;

  /* Sombra suave */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 14px;

  transition: 0.2s;

  &:hover {
    /* Eleva levemente o card */
    transform: translateY(-4px);

    /* Sombra mais forte */
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  }
`;

// Wrapper do ícone circular
export const IconWrapper = styled.div`
  width: clamp(46px, 6vw, 56px);
  height: clamp(46px, 6vw, 56px);

  border-radius: 50%;
  background: #e74040;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  svg {
    width: clamp(20px, 3vw, 26px);
    height: clamp(20px, 3vw, 26px);
  }
`;

// Título do card
export const CardTitle = styled.h3`
  font-size: 16px;
  color: #252b42;
  margin: 0;
  font-weight: 700;

  position: relative;
  padding-bottom: 10px;

  /* Linha decorativa abaixo do título */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    width: 40px;
    height: 3px;

    background: #e74040;
    border-radius: 2px;
  }
`;

// Descrição do card
export const CardDescription = styled.p`
  font-size: 14px;
  color: #737373;
  line-height: 1.6;
  margin: 0;
`;
