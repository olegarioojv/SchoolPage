import styled from "styled-components";

/* ================= HERO ================= */

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 40px clamp(16px, 5vw, 80px);

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 32px;
  }
`;

export const HeroContent = styled.div`
  max-width: 520px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const HeroIntroduction = styled.p`
  color: #96bb7c;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.h1`
  color: #252b42;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
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
  flex-wrap: wrap;

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
  width: clamp(260px, 40vw, 460px);
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

/* ================= CARDS ================= */

export const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px clamp(16px, 5vw, 80px);
`;

export const CardContent = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: clamp(22px, 3vw, 40px);
  flex: 1;
  min-width: 260px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  }
`;

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

export const CardTitle = styled.h3`
  font-size: 16px;
  color: #252b42;
  margin: 0;
  font-weight: 700;
  position: relative;
  padding-bottom: 10px;

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

export const CardDescription = styled.p`
  font-size: 14px;
  color: #737373;
  line-height: 1.6;
  margin: 0;
`;
