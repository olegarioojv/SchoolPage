// Importa styled-components para criar componentes estilizados
import styled from "styled-components";

/* ===============================
   Container Geral
================================== */

export const TeamContainer = styled.div`
  /* Ocupa 100% da largura */
  width: 100%;

  /* Espaçamento interno */
  padding: 80px 24px;

  /* Limita largura máxima */
  max-width: 1200px;

  /* Centraliza horizontalmente */
  margin: 0 auto;

  /* Tablet pequeno */
  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

/* ===============================
   Cabeçalho
================================== */

export const TeamIntroduction = styled.span`
  /* Cor verde destaque */
  color: #96bb7c;

  font-weight: 600;
  font-size: 14px;

  /* Garante quebra de linha */
  display: block;

  margin-bottom: 12px;
`;

export const TeamTitle = styled.h1`
  /*
    Fonte responsiva:
    mínimo 22px
    escala com 3vw
    máximo 34px
  */
  font-size: clamp(22px, 3vw, 34px);

  font-weight: 800;
  color: #252b42;

  margin-bottom: 16px;

  /* Altura de linha controlada */
  line-height: 1.2;

  @media (max-width: 600px) {
    /* Ajuste extra no mobile */
    font-size: 24px;
  }
`;

export const TeamDescription = styled.p`
  color: #737373;
  font-size: 14px;
  line-height: 1.6;

  /* Limita largura para melhor leitura */
  max-width: 520px;

  margin-bottom: 50px;
`;

/* ===============================
   Grid Responsivo
================================== */

export const TeamContent = styled.div`
  display: grid;

  /* 4 colunas padrão */
  grid-template-columns: repeat(4, 1fr);

  gap: 30px;

  /* Notebook */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Tablet */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

/* ===============================
   Card
================================== */

export const TeamCard = styled.article`
  background: #ffffff;

  /* Bordas bem arredondadas */
  border-radius: 20px;

  /* Esconde qualquer overflow da imagem */
  overflow: hidden;

  /* Sombra suave */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);

  /* Transição suave */
  transition: 0.3s ease;

  &:hover {
    /* Elevação leve no hover */
    transform: translateY(-6px);
  }
`;

/* Container da imagem */
export const TeamImgPerfil = styled.div`
  width: 100%;
  height: 280px;

  @media (max-width: 600px) {
    height: 240px;
  }

  img {
    width: 100%;
    height: 100%;

    /* Mantém proporção e corta excesso */
    object-fit: cover;

    display: block;
  }
`;

/* Bloco de informações */
export const TeamInfo = styled.div`
  padding: 24px;

  /* Centraliza texto */
  text-align: center;

  background: #f8f8f8;
`;

/* ===============================
   Texto do Card
================================== */

export const TeamPerfilName = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #252b42;

  margin-bottom: 6px;
`;

export const TeamPerfilProfision = styled.p`
  font-size: 14px;
  color: #737373;

  margin-bottom: 18px;
`;

/* ===============================
   Social Icons
================================== */

export const TeamPerfilMidia = styled.div`
  display: flex;

  /* Centraliza ícones */
  justify-content: center;

  gap: 18px;

  margin-top: 16px;

  svg {
    color: #96bb7c;

    transition: 0.3s ease;

    cursor: pointer;

    &:hover {
      /* Leve aumento */
      transform: scale(1.15);

      /* Reduz opacidade */
      opacity: 0.8;
    }
  }
`;
