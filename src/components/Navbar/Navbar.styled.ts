import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 150px;
`;

export const Brand = styled.h1`
  color: #252b42;
  font-size: 24px;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavLink = styled.li`
  color: #737373;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #252b42;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LoginButton = styled.button`
  color: #96bb7c;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;

export const JoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: #ffffff;
  background: #96bb7c;
  border-radius: 5px;
  padding: 10px 18px;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }

  svg {
    display: block;
  }
`;
