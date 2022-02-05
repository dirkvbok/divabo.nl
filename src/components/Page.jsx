import styled from "styled-components";

export default function Page(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;
  color: var(--dark);
  padding: var(--default_padding);
  padding-bottom: 60px;
  height: calc(120% - var(--header_height) - var(--footer_height));
`;
