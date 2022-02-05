import styled from "styled-components";
import BlockWithLinks from "./BlockWithLinks";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <LinksContainer>
        {/* <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        <Link to="/privacy">Privacy policy</Link>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: var(--footer_height);
  text-align: start;
  color: white;
  padding: var(--default_padding);

  @media (min-width: 768px) {
    padding: 0px var(--default_padding);
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;

  & a {
    color: white;

    :not(:last-child) {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  }

 
  }
`;
