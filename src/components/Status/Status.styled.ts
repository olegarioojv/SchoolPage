// Importa styled-components para criar componentes estilizados
import styled from "styled-components";

/* ===== CONTAINER ===== */

export const StatusContainer = styled.div`
  /* Usa flex para centralizar o conteúdo interno */
  display: flex;

  /* Centraliza horizontalmente */
  justify-content: center;

  /*
    Padding:
    - 60px vertical
    - Horizontal responsivo com clamp:
      mínimo 16px
      ideal 6vw
      máximo 120px
  */
  padding: 60px clamp(16px, 6vw, 120px);
`;

/* ===== GRID FLEXÍVEL ===== */

export const StatusContent = styled.div`
  /* Ocupa toda largura disponível */
  width: 100%;

  /* Limita largura máxima para evitar esticar demais */
  max-width: 1100px;

  /* Layout horizontal */
  display: flex;

  /*
    Distribui os itens com espaço igual entre eles
  */
  justify-content: space-between;

  /* Espaçamento entre os blocos */
  gap: 40px;

  @media (max-width: 900px) {
    /*
      Permite quebrar linha quando faltar espaço
      (transforma em layout mais fluido)
    */
    flex-wrap: wrap;

    /* Centraliza os itens quando quebrar */
    justify-content: center;

    /* Reduz o espaçamento */
    gap: 30px;
  }
`;

/* ===== ITEM INDIVIDUAL ===== */

export const StatusItem = styled.div`
  /* Layout vertical */
  display: flex;

  flex-direction: column;

  /* Centraliza número e texto */
  align-items: center;

  /*
    Garante que cada item tenha largura mínima
    Evita ficar muito comprimido
  */
  min-width: 140px;
`;

/* ===== NÚMERO GRANDE ===== */

export const StatusNumber = styled.h2`
  /*
    Fonte responsiva:
    mínimo 28px
    escala com 4vw
    máximo 40px
  */
  font-size: clamp(28px, 4vw, 40px);

  /* Cor verde destaque */
  color: #96bb7c;

  /* Remove margem padrão do h2 */
  margin: 0;

  font-weight: 700;
`;

/* ===== TEXTO PEQUENO ===== */

export const StatusSubTitle = styled.span`
  font-size: 14px;

  /* Cor mais escura */
  color: #252b42;

  /* Espaço entre número e texto */
  margin-top: 6px;

  font-weight: 600;
`;
