import styled from "styled-components";
import GameCard from "../components/GameCard";
import googleplaybadge from "../images/googleplaybadge.png";
import Page from "../components/Page";

export default function Squap() {
  return (
    <Page>
      <Container>
        <GameCard title="SQUAP" imageSrc={googleplaybadge} route="/squap" />
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
