import styled from "styled-components";

export default function BlockWithLinks(props) {
  return (
    <Container>
      {props.title ? <Title>{props.title}</Title> : null}
      <Links>
        {props.children.map((link) => (
          <li>{link}</li>
        ))}
      </Links>
    </Container>
  );
}

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Links = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  & a {
    color: white;
    text-decoration: none;
    line-height: 1.7;
  }
`;

const Container = styled.div`
  color: white;

  @media (min-width: 768px) {
  }
`;
