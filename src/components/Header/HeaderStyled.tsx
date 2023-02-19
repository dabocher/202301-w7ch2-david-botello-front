import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  .header {
    &__title {
      font-size: 3rem;
    }
  }
`;

export default HeaderStyled;
