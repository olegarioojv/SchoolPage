import styled from "styled-components";

/* CONTAINER PRINCIPAL */

export const CustomerFeedbackContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  padding: clamp(40px, 6vw, 80px) 24px;

  display: flex;
  flex-direction: column;
  justify-self: start;
`;

/* BLOCO SUPERIOR */

export const CustomerFeedbackContent = styled.div`
  margin-bottom: clamp(32px, 5vw, 60px);
  justify-self: start;
`;

export const CustomerFeedbackIntroduction = styled.p`
  color: #96bb7c;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const CustomerFeedbackTitle = styled.h1`
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 800;
  color: #252b42;
  margin-bottom: 16px;
  line-height: 1.2;
`;

export const CustomerFeedbackDescription = styled.p`
  color: #737373;
  font-size: 14px;
  line-height: 1.6;
  max-width: 520px;
`;

/* LISTA DE FEEDBACKS */

export const CustomerFeedbackList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(16px, 3vw, 40px);
`;

/* CARD */

export const CustomerFeedbackCard = styled.div`
  width: 100%;
  max-width: 340px;
  margin: 0 auto;

  text-align: center;
`;

/* ESTRELAS */

export const CustomerFeedbackStar = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 18px;
`;

/* COMENTÁRIO */

export const CustomerFeedbackComment = styled.p`
  font-size: 14px;
  color: #737373;
  line-height: 1.6;
  margin-bottom: 22px;
`;

/* PERFIL */

export const CustomerFeedbackPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const CustomerFeedbackPerfilImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CustomerFeedbackPerfilInfo = styled.div`
  text-align: left;
`;

export const CustomerFeedbackPerfilName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #252b42;
  margin: 0;
`;

export const CustomerFeedbackPerfilProfession = styled.p`
  font-size: 12px;
  color: #737373;
  margin: 0;
`;
