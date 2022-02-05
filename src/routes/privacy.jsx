import styled from "styled-components";
import Page from "../components/Page";

export default function PrivacyPage() {
  return (
    <Page>
      <Title>Privacy Policy</Title>
      <Text>Last updated: February 05, 2022</Text>
      <Text style={{ marginBottom: "60px" }}>
        This Privacy Policy describes our policies and procedures on the
        collection, use and disclosure of your information when you use the
        services of Divabo.
      </Text>
      <Title>Data collection</Title>
      <SubTitle>In-game data</SubTitle>
      <Text>
        While using our services, no personal data is collected, with the
        exception of third-party application Google AdMob.
      </Text>
      <SubTitle>Google AdMob</SubTitle>
      Google AdMob may be used to monetize our websites and / or software.
      Please refer to
      <a target="_blank" href="https://support.google.com/admob/answer/6128543">
        Google Admob's privacy policy.
      </a>
    </Page>
  );
}

const Title = styled.h1`
  font-size: 25px;
  margin: 5px 0px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

const Text = styled.p``;
