import styled from "styled-components";

export const NewsletterContainer = styled.div`
  width: 100%;
  padding: 100px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const NewsletterIntroduction = styled.p`
  color: #7fb069;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const NewsletterTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 20px;
`;

export const NewsletterDescription = styled.p`
  max-width: 600px;
  font-size: 14px;
  color: #777;
  line-height: 1.6;
  margin-bottom: 40px;
`;

export const NewsletterAction = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-right: none;
  outline: none;
  font-size: 14px;
  border-radius: 6px 0 0 6px;

  @media (max-width: 600px) {
    border-radius: 6px;
    border-right: 1px solid #ddd;
  }
`;

export const NewsletterButton = styled.button`
  padding: 14px 24px;
  background: #7fb069;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0 6px 6px 0;

  @media (max-width: 600px) {
    border-radius: 6px;
  }

  &:hover {
    opacity: 0.9;
  }
`;
