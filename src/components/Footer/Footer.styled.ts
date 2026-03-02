import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: #f5f5f5;
  padding: 80px 20px 30px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #2d2d2d;
`;

export const FooterItem = styled.li`
  display: flex; /* ativa alinhamento horizontal */
  align-items: center; /* centraliza verticalmente */
  gap: 10px; /* espaço entre ícone e texto */

  font-size: 14px;
  color: #777;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    color: #7fb069;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #7fb069;
    flex-shrink: 0; /* evita o ícone encolher */
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;

  padding-top: 20px;
  border-top: 1px solid #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  color: #777;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #7fb069;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  svg {
    width: 16px;
    height: 16px;
    color: white;
  }

  &:hover {
    opacity: 0.85;
  }
`;
