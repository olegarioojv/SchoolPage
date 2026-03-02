// Importa styled-components para criar componentes estilizados
import styled from "styled-components";

// ================================
// CONTAINER PRINCIPAL DO FOOTER
// ================================
export const FooterContainer = styled.footer`
  /* Ocupa 100% da largura da tela */
  width: 100%;

  /* Cor de fundo cinza claro */
  background: #f5f5f5;

  /*
    Padding:
    80px → topo
    20px → laterais
    30px → parte inferior
  */
  padding: 80px 20px 30px;
`;

// ================================
// CONTEÚDO INTERNO (COLUNAS)
// ================================
export const FooterContent = styled.div`
  /* Limita largura máxima do conteúdo */
  max-width: 1200px;

  /* Centraliza horizontalmente */
  margin: 0 auto;

  /* Usa CSS Grid para organizar as colunas */
  display: grid;

  /*
    Cria 5 colunas iguais
    Cada coluna ocupa 1 fração do espaço disponível
  */
  grid-template-columns: repeat(5, 1fr);

  /* Espaço entre colunas */
  gap: 40px;

  /* Responsividade - tablets */
  @media (max-width: 992px) {
    /* Reduz para 2 colunas */
    grid-template-columns: repeat(2, 1fr);
  }

  /* Responsividade - mobile */
  @media (max-width: 600px) {
    /* Apenas 1 coluna */
    grid-template-columns: 1fr;
  }
`;

// ================================
// COLUNA DO FOOTER
// ================================
export const FooterColumn = styled.ul`
  /* Remove marcador padrão da lista */
  list-style: none;

  /* Remove padding padrão do <ul> */
  padding: 0;
`;

// ================================
// TÍTULO DA COLUNA
// ================================
export const FooterTitle = styled.h3`
  font-size: 16px;

  /* Peso forte */
  font-weight: 700;

  /* Espaçamento abaixo do título */
  margin-bottom: 20px;

  /* Cor mais escura */
  color: #2d2d2d;
`;

// ================================
// ITEM DA LISTA
// ================================
export const FooterItem = styled.li`
  /*
    Flexbox para alinhar ícone e texto horizontalmente
  */
  display: flex;

  /* Centraliza verticalmente */
  align-items: center;

  /* Espaço entre ícone e texto */
  gap: 10px;

  font-size: 14px;
  color: #777;

  /* Espaçamento entre itens */
  margin-bottom: 12px;

  /* Mostra cursor de clique */
  cursor: pointer;

  /* Efeito hover */
  &:hover {
    color: #7fb069;
  }

  /*
    Estiliza SVG dentro do item
  */
  svg {
    width: 20px;
    height: 20px;

    /* Cor do ícone */
    color: #7fb069;

    /*
      Impede que o ícone encolha caso o texto fique grande
      Mantém tamanho fixo
    */
    flex-shrink: 0;
  }
`;

// ================================
// PARTE INFERIOR DO FOOTER
// ================================
export const FooterBottom = styled.div`
  max-width: 1200px;

  /*
    60px de margem superior
    auto centraliza horizontalmente
    0 margem inferior
  */
  margin: 60px auto 0;

  /* Espaçamento interno superior */
  padding-top: 20px;

  /* Linha divisória superior */
  border-top: 1px solid #ddd;

  /*
    Layout horizontal
    (texto à esquerda, redes sociais à direita)
  */
  display: flex;

  /* Espaça elementos nas extremidades */
  justify-content: space-between;

  /* Centraliza verticalmente */
  align-items: center;

  font-size: 14px;
  color: #777;

  /* Mobile */
  @media (max-width: 600px) {
    /* Empilha verticalmente */
    flex-direction: column;

    /* Espaço entre elementos */
    gap: 20px;

    /* Centraliza texto */
    text-align: center;
  }
`;

// ================================
// CONTAINER DAS REDES SOCIAIS
// ================================
export const FooterSocial = styled.div`
  /* Layout horizontal */
  display: flex;

  /* Espaço entre ícones */
  gap: 15px;
`;

// ================================
// ÍCONE SOCIAL
// ================================
export const SocialIcon = styled.div`
  /* Tamanho fixo */
  width: 35px;
  height: 35px;

  /* Forma circular */
  border-radius: 50%;

  /* Cor de fundo verde */
  background: #7fb069;

  /* Centraliza o SVG */
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  /* Transição suave */
  transition: 0.3s;

  svg {
    width: 16px;
    height: 16px;

    /* Ícone branco */
    color: white;
  }

  &:hover {
    /* Leve efeito visual */
    opacity: 0.85;
  }
`;
