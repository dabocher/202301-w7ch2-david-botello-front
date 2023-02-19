import styled from "styled-components";

const HomePageStyled = styled.section`
  padding: 2rem 4rem;
  .home {
    &__title {
      font-size: clamp(3rem, 3.5vw, 8rem);
      text-align: center;
    }
  }
`;

export default HomePageStyled;
