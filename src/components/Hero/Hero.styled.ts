import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  max-width: 520px;
`;

export const HeroIntroduction = styled.p`
  color: #96bb7c;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.h1`
  color: #252b42;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 36px;
  }
`;

export const HeroDescription = styled.p`
  color: #737373;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const BudgetButton = styled.button`
  background: #96bb7c;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #7da866;
  }
`;

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
    background: #96bb7c;
    color: white;
  }
`;

export const HeroImgContainer = styled.div`
  width: 460px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    width: 520px;
  }

  @media (max-width: 900px) {
    width: 320px;
    height: 360px;

    img {
      width: 300px;
    }
  }
`;
