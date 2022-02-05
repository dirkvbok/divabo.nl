import styled from "styled-components";
import { Link } from "react-router-dom";

export default function GameCard({ title, imageSrc, route }) {
  return (
    <Link to={route}>
      <Container>
        <Title>{title}</Title>
        <Image src={imageSrc}></Image>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--light);
  justify-content: center;
  height: 300px;
  width: 200px;
  border-radius: var(--default_border_radius);
  padding: var(--default_padding);
`;

const Title = styled.h1`
  font-size: 25px;
  color: var(--dark);
  padding: var(--default_padding);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Image = styled.img``;
