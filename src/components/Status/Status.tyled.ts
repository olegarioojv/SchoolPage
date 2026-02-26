import styled from "styled-components";

/* ===== CONTAINER ===== */

export const StatusContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 60px clamp(16px, 6vw, 120px);
`;

/* ===== GRID FLEXÍVEL ===== */

export const StatusContent = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
`;

/* ===== ITEM INDIVIDUAL ===== */

export const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
`;

/* ===== NÚMERO GRANDE ===== */

export const StatusNumber = styled.h2`
  font-size: clamp(28px, 4vw, 40px);
  color: #96bb7c;
  margin: 0;
  font-weight: 700;
`;

/* ===== TEXTO PEQUENO ===== */

export const StatusSubTitle = styled.span`
  font-size: 14px;
  color: #252b42;
  margin-top: 6px;
  font-weight: 600;
`;
