// Importa styled-components para criar componentes estilizados
import styled from "styled-components";

/* ================= NAVBAR ================= */

// Container principal da Navbar
export const NavbarContainer = styled.nav`
  /* Layout horizontal */
  display: flex;

  /* Espaça logo à esquerda e menu/ações à direita */
  justify-content: space-between;

  /* Centraliza verticalmente */
  align-items: center;

  /*
    Padding responsivo:
    - 20px vertical
    - Horizontal usa clamp:
      mínimo 16px
      ideal 6% da largura da tela
      máximo 150px
  */
  padding: 20px clamp(16px, 6vw, 150px);

  /*
    Permite quebrar linha caso não caiba
    (importante para telas menores)
  */
  flex-wrap: wrap;

  /* Espaço entre linhas quando quebrar */
  gap: 16px;
`;

// Marca / Logo
export const Brand = styled.h1`
  color: #252b42;

  /*
    Fonte responsiva:
    mínimo 20px
    ideal 2.5vw
    máximo 24px
  */
  font-size: clamp(20px, 2.5vw, 24px);

  /* Remove margem padrão do h1 */
  margin: 0;
`;

// Menu de navegação
export const NavMenu = styled.ul`
  /* Layout horizontal */
  display: flex;

  /* Espaçamento entre links */
  gap: 24px;

  /* Remove estilo padrão da lista */
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 900px) {
    /* Ocupa largura total */
    width: 100%;

    /* Centraliza os links */
    justify-content: center;

    /* Permite quebrar linha */
    flex-wrap: wrap;
  }
`;

// Item individual do menu
export const NavLink = styled.li`
  color: #737373;

  /* Indica que é clicável */
  cursor: pointer;

  font-size: 14px;

  /* Transição suave para hover */
  transition: 0.2s;

  &:hover {
    /* Cor mais escura ao passar o mouse */
    color: #252b42;
  }
`;

// Container das ações (Login + Join)
export const NavActions = styled.div`
  display: flex;
  align-items: center;

  /* Espaço entre botões */
  gap: 14px;

  @media (max-width: 900px) {
    /* Ocupa linha inteira no mobile */
    width: 100%;

    /* Centraliza os botões */
    justify-content: center;
  }
`;

// Botão de login (secundário)
export const LoginButton = styled.button`
  color: #96bb7c;

  /* Fundo transparente */
  background: transparent;

  border: none;

  cursor: pointer;

  font-weight: 600;
  font-size: 14px;

  &:hover {
    /* Efeito visual simples */
    opacity: 0.7;
  }
`;

// Botão principal (CTA - Join)
export const JoinButton = styled.button`
  /* Flex para alinhar texto e ícone */
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

  /* Transição suave */
  transition: 0.2s;

  &:hover {
    /* Pequeno efeito de elevação */
    transform: translateY(-1px);

    /* Leve transparência */
    opacity: 0.9;
  }

  svg {
    /* Remove possíveis espaçamentos indesejados */
    display: block;
  }
`;
