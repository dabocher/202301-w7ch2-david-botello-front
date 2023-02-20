import styled from "styled-components";

const HomePageStyled = styled.section`
  padding: 2rem 4rem;
  .home {
    &__title {
      font-size: clamp(3rem, 3.5vw, 5rem);
      text-align: center;
      padding-bottom: 2rem;
    }
  }
`;

export default HomePageStyled;
