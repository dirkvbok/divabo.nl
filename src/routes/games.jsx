import styled from "styled-components";
import { Page } from "../components/Page";
import { Outlet, Link } from "react-router-dom";

export default function Games() {
  return (
    <Page style={{ minWidth: "100%" }}>
      <Container>
        <Outlet />
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

const Title = styled.h1`
  font-size: 25px;
  margin: 5px 0px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
