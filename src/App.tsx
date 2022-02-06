import styled from "styled-components";
import OriginalPost from "./OriginalPost";
import GlobalStyles from "./GlobalStyles";
import CommentList from "./CommentList";

export default function App() {
  return (
    <Container>
      <Wrapper>
        <OriginalPost></OriginalPost>
        <CommentList />
      </Wrapper>
      <GlobalStyles />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
`;

const Wrapper = styled.div`
  max-width: calc(70ch + 40px);
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;
