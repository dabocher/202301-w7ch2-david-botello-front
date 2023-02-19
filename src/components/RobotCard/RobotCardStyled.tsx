import styled from "styled-components";

export const RobotCardStyled = styled.article`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  width: 32rem;
  box-shadow: 1px 2px 4px #0003;
  border-radius: 10px;
  background-color: white;
  padding: 2rem 1rem;
  gap: 1rem;
  color: #333;

  .robot-card {
    &__title {
      text-align: center;
      width: 100%;
      font-size: 3rem;
    }
    &__stats {
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
