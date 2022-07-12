import styled from "styled-components";
import GameCard from "../components/GameCard";
import googleplaybadge from "../images/googleplaybadge.png";
import Page from "../components/Page";

export default function Squap() {
  return (
    <Page>
      <Container>
        <a href="https://play.google.com/store/apps/details?id=nl.divabo.games.squap&hl=nl&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
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
