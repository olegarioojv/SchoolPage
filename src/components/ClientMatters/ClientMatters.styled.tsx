import styled from "styled-components";

export const ClientMattersContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 80px clamp(16px, 6vw, 120px);
`;

export const ClientMattersContent = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

export const ClientMattersText = styled.div`
  max-width: 420px;
`;

export const ClientMattersBar = styled.div`
  width: 50px;
  height: 4px;
  background: #e74040;
  border-radius: 3px;
  margin-bottom: 18px;

  @media (max-width: 900px) {
    margin: 0 auto 18px auto;
  }
`;

export const ClientMattersTitle = styled.h2`
  font-size: clamp(26px, 4vw, 32px);
  color: #252b42;
  margin: 0 0 16px 0;
`;

export const ClientMattersDescription = styled.p`
  font-size: 15px;
  color: #737373;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const ClientMattersButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: #96bb7c;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ClientMattersImg = styled.div`
  width: clamp(260px, 40vw, 420px);

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
