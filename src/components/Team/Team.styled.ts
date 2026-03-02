import styled from "styled-components";

/* ===============================
   Container Geral
================================== */

export const TeamContainer = styled.div`
  width: 100%;
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

/* ===============================
   Cabeçalho
================================== */

export const TeamIntroduction = styled.span`
  color: #96bb7c;
  font-weight: 600;
  font-size: 14px;
  display: block;
  margin-bottom: 12px;
`;

export const TeamTitle = styled.h1`
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 800;
  color: #252b42;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const TeamDescription = styled.p`
  color: #737373;
  font-size: 14px;
  line-height: 1.6;
  max-width: 520px;
  margin-bottom: 50px;
`;

/* ===============================
   Grid Responsivo
================================== */

export const TeamContent = styled.div`
  display: grid;
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
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const TeamImgPerfil = styled.div`
  width: 100%;
  height: 280px;

  @media (max-width: 600px) {
    height: 240px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const TeamInfo = styled.div`
  padding: 24px;
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
  justify-content: center;
  gap: 18px;
  margin-top: 16px;

  svg {
    color: #96bb7c;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.15);
      opacity: 0.8;
    }
  }
`;
