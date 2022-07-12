import styled from "styled-components";
import { Page } from "../components/Page";

export default function AboutPage() {
  return (
    <Page>
      <Title>About Divabo</Title>
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
