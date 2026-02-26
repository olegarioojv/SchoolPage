import styled from "styled-components";

/* ─── Container geral ─────────────────────────────────────── */
export const TrainingContainer = styled.section`
  background: #fff2f3;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

/* ─── Cabeçalho ───────────────────────────────────────────── */
export const TrainingContent = styled.div`
  text-align: left;
  max-width: 860px;
  width: 100%;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TrainingIntroduction = styled.p`
  color: #96bb7c;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const TrainingTitle = styled.h1`
  font-size: 34px;
  font-weight: 800;
  color: #252b42;
  margin-bottom: 12px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const TrainingDescription = styled.p`
  color: #737373;
  font-size: 14px;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

/* ─── Wrapper dos cards ───────────────────────────────────── */
export const TrainingCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 860px;
  width: 100%;

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 680px;
    margin: 0 auto;
  }

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 420px;
    gap: 16px;
  }
`;

/* ─── Card ────────────────────────────────────────────────── */
export const TrainingCardContainer = styled.section`
  background: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

/* ─── Imagem ──────────────────────────────────────────────── */
export const TrainingCardImagem = styled.div`
  position: relative;
  height: 230px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

/* ─── Badge "Sale" ────────────────────────────────────────── */
export const TrainingCardSale = styled.p`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #e74040;
  color: white;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 0.3px;
  z-index: 1;
`;

export const TrainingCardIcon = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;

  span {
    background: white;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #252b42;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }

  span:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

/* ─── Conteúdo do card ────────────────────────────────────── */
export const TrainingCardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

/* ─── Linha: categoria + nota ─────────────────────────────── */
export const TrainingCardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrainingCardIntroduction = styled.p`
  font-size: 12px;
  color: #23856d;
  font-weight: 700;
  letter-spacing: 0.2px;
`;

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

export const TrainingCardTitle = styled.h2`
  font-size: 15px;
  font-weight: 700;
  color: #252b42;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TrainingCardParagraph = styled.p`
  font-size: 13px;
  color: #737373;
  line-height: 1.5;
`;

/* ─── Linha de vendas ─────────────────────────────────────── */
export const TrainingCardSales = styled.p`
  font-size: 12px;
  color: #737373;
  display: flex;
  align-items: center;
  gap: 6px;
  border-top: 1px solid #f0f0f0;
  padding-top: 8px;
  margin-top: 2px;

  * {
    color: #23856d;
    width: 14px;
    height: 14px;
  }
`;

export const TrainingCardPrice = styled.span`
  font-size: 13px;
  color: #bdbdbd;
  text-decoration: line-through;
  font-weight: 500;
`;

export const TrainingCardDiscount = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #23856d;
`;

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
  align-self: flex-start;
  letter-spacing: 0.2px;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #23856d;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
  }

  * {
    width: 14px;
    height: 14px;
  }
`;
