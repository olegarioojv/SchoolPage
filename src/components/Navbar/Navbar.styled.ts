import styled from "styled-components";

/* ================= NAVBAR ================= */

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px clamp(16px, 6vw, 150px);
  flex-wrap: wrap;
  gap: 16px;
`;

export const Brand = styled.h1`
  color: #252b42;
  font-size: clamp(20px, 2.5vw, 24px);
  margin: 0;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled.li`
  color: #737373;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    color: #252b42;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;

export const LoginButton = styled.button`
  color: #96bb7c;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    opacity: 0.7;
  }
`;

export const JoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: #ffffff;
  background: #96bb7c;
  border-radius: 6px;
  padding: 10px 18px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }

  svg {
    display: block;
  }
`;
