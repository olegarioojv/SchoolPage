// Importa a função styled da biblioteca styled-components
// Permite criar componentes React já estilizados com CSS-in-JS
import styled from "styled-components";

/* ================================
   CONTAINER PRINCIPAL
================================ */

export const CustomerFeedbackContainer = styled.div`
  /* Ocupa 100% da largura disponível */
  width: 100%;

  /* Limita largura máxima para evitar layout muito esticado em telas grandes */
  max-width: 1200px;

  /* Centraliza horizontalmente (auto nas laterais) */
  margin: 0 auto;

  /*
    Padding responsivo:
    - Mínimo 40px
    - Ideal 6% da largura da tela
    - Máximo 80px
    Horizontal fixo de 24px
  */
  padding: clamp(40px, 6vw, 80px) 24px;

  /* Layout em coluna */
  display: flex;
  flex-direction: column;

  /*
    justify-self NÃO tem efeito em flexbox.
    Só funciona dentro de CSS Grid.
    Aqui pode ser removido sem impacto.
  */
  justify-self: start;
`;

/* ================================
   BLOCO SUPERIOR (INTRODUÇÃO)
================================ */

export const CustomerFeedbackContent = styled.div`
  /*
    Espaçamento inferior responsivo
  */
  margin-bottom: clamp(32px, 5vw, 60px);

  /*
    Também não tem efeito aqui se não estiver dentro de grid
  */
  justify-self: start;
`;

export const CustomerFeedbackIntroduction = styled.p`
  /* Cor verde do destaque */
  color: #96bb7c;

  /* Peso semi-bold */
  font-weight: 600;

  /* Tamanho pequeno */
  font-size: 14px;

  /* Espaçamento inferior */
  margin-bottom: 12px;
`;

export const CustomerFeedbackTitle = styled.h1`
  /*
    Fonte responsiva:
    - Mínimo 22px
    - Ideal 3vw
    - Máximo 34px
  */
  font-size: clamp(22px, 3vw, 34px);

  /* Peso mais forte */
  font-weight: 800;

  /* Cor principal */
  color: #252b42;

  margin-bottom: 16px;

  /* Controla altura da linha para melhor leitura */
  line-height: 1.2;
`;

export const CustomerFeedbackDescription = styled.p`
  /* Cor cinza secundária */
  color: #737373;

  font-size: 14px;

  /* Espaçamento entre linhas */
  line-height: 1.6;

  /* Limita largura para melhor legibilidade */
  max-width: 520px;
`;

/* ================================
   LISTA DE FEEDBACKS
================================ */

export const CustomerFeedbackList = styled.div`
  width: 100%;

  /* Usa CSS Grid */
  display: grid;

  /*
    Cria colunas automáticas:
    - Cada card tem mínimo 260px
    - Cresce até ocupar 1fr
    - auto-fit faz adaptar automaticamente
  */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  /*
    Espaçamento responsivo entre os cards
  */
  gap: clamp(16px, 3vw, 40px);
`;

/* ================================
   CARD DE FEEDBACK
================================ */

export const CustomerFeedbackCard = styled.div`
  width: 100%;

  /* Limita largura máxima do card */
  max-width: 340px;

  /* Centraliza dentro da célula do grid */
  margin: 0 auto;

  /* Centraliza texto */
  text-align: center;

  /* Necessário para usar pseudo-elementos posicionados */
  position: relative;

  @media (max-width: 768px) {
    /* Espaço inferior para a linha divisória */
    padding-bottom: 24px;

    /*
      Adiciona linha separadora entre os cards
      Exceto no último
    */
    &:not(:last-child)::after {
      content: "";

      /* Posicionamento absoluto relativo ao card */
      position: absolute;

      left: 50%;
      bottom: 0;

      /* Centraliza horizontalmente */
      transform: translateX(-50%);

      width: 60%;
      height: 1px;

      /* Cor da linha */
      background-color: #e5e5e5;
    }
  }
`;

/* ================================
   ESTRELAS
================================ */

export const CustomerFeedbackStar = styled.div`
  /* Layout horizontal */
  display: flex;

  /* Centraliza estrelas */
  justify-content: center;

  /* Espaço entre estrelas */
  gap: 6px;

  margin-bottom: 18px;
`;

/* ================================
   COMENTÁRIO
================================ */

export const CustomerFeedbackComment = styled.p`
  font-size: 14px;

  color: #737373;

  line-height: 1.6;

  /* Espaço antes do perfil */
  margin-bottom: 40px;
`;

/* ================================
   PERFIL DO CLIENTE
================================ */

export const CustomerFeedbackPerfil = styled.div`
  /* Layout horizontal */
  display: flex;

  /* Alinha verticalmente imagem e texto */
  align-items: center;

  /* Centraliza o bloco */
  justify-content: center;

  gap: 12px;
`;

export const CustomerFeedbackPerfilImg = styled.img`
  /* Tamanho fixo */
  width: 42px;
  height: 42px;

  /* Transforma em círculo */
  border-radius: 50%;

  /* Mantém proporção sem distorcer */
  object-fit: cover;
`;

export const CustomerFeedbackPerfilInfo = styled.div`
  /* Alinha texto à esquerda dentro do bloco */
  text-align: left;
`;

export const CustomerFeedbackPerfilName = styled.p`
  font-size: 14px;

  font-weight: 700;

  color: #252b42;

  /* Remove margem padrão do <p> */
  margin: 0;
`;

export const CustomerFeedbackPerfilProfession = styled.p`
  font-size: 12px;

  color: #737373;

  margin: 0;
`;
