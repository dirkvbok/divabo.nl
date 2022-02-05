import * as React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import GameCard from "../components/GameCard";
import squaresImage from "../images/squares.png";

export default function HomePage() {
  return (
    <Page style={{ minWidth: "100%" }}>
      <Container>
        <GameCard
          title="SQUAP"
          imageSrc={squaresImage}
          route="/squap"
        ></GameCard>
      </Container>
    </Page>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-content: center;
  align-self: center;
`;
