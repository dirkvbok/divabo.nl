import styled from "styled-components";

export const Title = styled.h1`
  font-size: 25px;
  margin: 5px 0px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Text = styled.p`
  max-width: 550px;
`;
