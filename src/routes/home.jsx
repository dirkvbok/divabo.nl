import * as React from "react";
import styled from "styled-components";
import { CenteredPage } from "../components/CenteredPage";
import GameCard from "../components/GameCard";
import squaresImage from "../images/squares.png";

export default function HomePage() {
  return (
    <CenteredPage>
      <Container>
        <GameCard
          title="SQUAP"
          imageSrc={squaresImage}
          route="/squap"
        ></GameCard>
      </Container>
    </CenteredPage>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-self: center;
`;
