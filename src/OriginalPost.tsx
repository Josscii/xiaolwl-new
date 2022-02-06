import styled from "styled-components";

const postImage = new URL("xiaolwl.png", import.meta.url);

export default function OriginalPost() {
  return (
    <Wrapper>
      <Link href="https://weibo.com/u/1139098205" target="_blank">
        <PostImage src={postImage.toString()}></PostImage>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  box-shadow: 2px 2px 8px hsl(0deg 0% 0% / 0.25);
  border-radius: 5px;
  background-color: white;
`;

const Link = styled.a``;

const PostImage = styled.img`
  width: 100%;
`;
