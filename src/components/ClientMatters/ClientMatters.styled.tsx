// Importa a função `styled` da biblioteca styled-components.
// Ela permite criar componentes React já estilizados usando CSS dentro do JS.
import styled from "styled-components";

// ===============================
// CONTAINER PRINCIPAL DA SEÇÃO
// ===============================
export const ClientMattersContainer = styled.div`
  /* Ativa Flexbox */
  display: flex;

  /* Centraliza o conteúdo horizontalmente */
  justify-content: center;

  /*
    Padding:
    - 80px → espaçamento vertical (top e bottom)
    - clamp(16px, 6vw, 120px) → padding horizontal responsivo
      Nunca menor que 16px
      Cresce com 6% da largura da tela
      Nunca maior que 120px
  */
  padding: 80px clamp(16px, 6vw, 120px);
`;

// ===============================
// CONTEÚDO INTERNO (TEXTO + IMAGEM)
// ===============================
export const ClientMattersContent = styled.div`
  /* Ocupa toda largura disponível */
  width: 100%;

  /* Limita a largura máxima para não esticar demais em telas grandes */
  max-width: 1100px;

  /* Layout horizontal */
  display: flex;

  /* Centraliza verticalmente os elementos */
  align-items: center;

  /* Separa texto e imagem nas extremidades */
  justify-content: space-between;

  /* Espaço entre os elementos */
  gap: 60px;

  /*
    Responsividade:
    Quando a tela for menor que 900px
  */
  @media (max-width: 900px) {
    /* Empilha os elementos verticalmente */
    flex-direction: column;

    /* Centraliza o texto */
    text-align: center;

    /* Reduz o espaçamento */
    gap: 40px;
  }
`;

// ===============================
// BLOCO DE TEXTO
// ===============================
export const ClientMattersText = styled.div`
  /*
    Limita largura do texto para melhorar legibilidade.
    Evita linhas muito longas.
  */
  max-width: 420px;
`;

// ===============================
// BARRA DECORATIVA (LINHA VERMELHA)
// ===============================
export const ClientMattersBar = styled.div`
  /* Largura fixa da barra */
  width: 50px;

  /* Altura fina */
  height: 4px;

  /* Cor da barra */
  background: #e74040;

  /* Bordas arredondadas */
  border-radius: 3px;

  /* Espaçamento abaixo da barra */
  margin-bottom: 18px;

  @media (max-width: 900px) {
    /*
      Centraliza a barra horizontalmente no mobile
      auto nas laterais faz o elemento ficar centralizado
    */
    margin: 0 auto 18px auto;
  }
`;

// ===============================
// TÍTULO
// ===============================
export const ClientMattersTitle = styled.h2`
  /*
    Fonte responsiva:
    - Mínimo 26px
    - Ideal 4vw (escala com largura da tela)
    - Máximo 32px
  */
  font-size: clamp(26px, 4vw, 32px);

  /* Cor do texto */
  color: #252b42;

  /* Remove margem superior e define margem inferior */
  margin: 0 0 16px 0;
`;

// ===============================
// DESCRIÇÃO
// ===============================
export const ClientMattersDescription = styled.p`
  /* Tamanho do texto */
  font-size: 15px;

  /* Cor cinza */
  color: #737373;

  /* Espaçamento entre linhas (melhora leitura) */
  line-height: 1.6;

  /* Espaçamento abaixo */
  margin-bottom: 24px;
`;

// ===============================
// BOTÃO
// ===============================
export const ClientMattersButton = styled.button`
  /* Permite alinhar texto e ícone lado a lado */
  display: inline-flex;

  /* Centraliza verticalmente */
  align-items: center;

  /* Espaço entre texto e ícone */
  gap: 6px;

  /* Fundo transparente */
  background: transparent;

  /* Remove borda padrão */
  border: none;

  /* Cor verde */
  color: #96bb7c;

  /* Texto mais forte */
  font-weight: 700;

  /* Mostra cursor de clique */
  cursor: pointer;

  /* Tamanho da fonte */
  font-size: 14px;

  /*
    Estilização específica para SVG dentro do botão
    (ícones como Arrow, etc)
  */
  svg {
    width: 18px;
    height: 18px;
  }

  /* Efeito hover */
  &:hover {
    opacity: 0.7;
  }
`;

// ===============================
// IMAGEM
// ===============================
export const ClientMattersImg = styled.div`
  /*
    Largura responsiva:
    - Mínimo 260px
    - Ideal 40% da largura da tela
    - Máximo 420px
  */
  width: clamp(260px, 40vw, 420px);

  img {
    /* Ocupa 100% da largura do container */
    width: 100%;

    /* Altura automática para manter proporção */
    height: auto;

    /* Mantém proporção sem distorcer */
    object-fit: contain;
  }
`;
