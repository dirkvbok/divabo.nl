import styled from "styled-components";
import Page from "../components/Page";

export default function ContactPage() {
  return (
    <Page>
      <Title>Contact</Title>
      <p>You can contact me here.</p>
    </Page>
  );
}

const Container = styled.div`
  background: #fff090;
  text-align: center;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 25px;
  margin: 5px 0px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
