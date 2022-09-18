import styled from "styled-components";
import { CenteredPage } from "../components/CenteredPage";
import { Title, Text } from "../components/TextComponents";
import squaresImage from "../images/squares.png";

export default function Squap() {
  return (
    <CenteredPage>
      <Container>
        <ImageContainer>
          <ColumnTitle>Squap</ColumnTitle>
          <Image src={squaresImage} />
        </ImageContainer>

        <TextContainer>
          <RowTitle>Squap</RowTitle>
          <Text>
            In Squap, your task is to swap your active square with a square on
            the board to get a combination of three or more squares of the same
            color (more squares in one go means more points). The color of the
            square you tapped will now be your active square's color. Each
            square must be cleared within 25 turns. The remaining turns of each
            square will slowly appear as they approach zero. It is your job to
            prevent any of the square's remaining turns to reach zero!
          </Text>

          <BadgeContainer>
            <a
              href="https://play.google.com/store/apps/details?id=nl.divabo.games.squap&hl=nl&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BadgeImage
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              />
            </a>
          </BadgeContainer>
        </TextContainer>
      </Container>
    </CenteredPage>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const RowTitle = styled(Title)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ColumnTitle = styled(Title)`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: var(--default_padding);
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 300px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BadgeContainer = styled.div`
  display: flex;
`;

const BadgeImage = styled.img`
  width: 200px;
  margin: 0;
`;
