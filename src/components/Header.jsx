import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Title to="/">DIVABO</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--primary);
  color: white;
  height: var(--header_height);
  padding: 0 var(--default_padding);
`;

const Title = styled(Link)`
  text-align: center;
  align-self: center;
  font-size: 30px;
  font-weight: bold;
  color: white;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  :hover {
    /* override global 'a' css */
    opacity: 1;
  }
`;
