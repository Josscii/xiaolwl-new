import { FunctionComponent } from "react";
import styled from "styled-components";
import { PartialComment } from "./ApiResponseTypes";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
dayjs.extend(relativeTime);
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
dayjs.locale("zh-cn");

const Comment: FunctionComponent<PartialComment> = (props) => {
  return (
    <Wrapper>
      <TopWrapper>
        <AvatarWrapper>
          <Avatar src={props.user.profile_image_url} />
        </AvatarWrapper>
        <Name>{props.user.screen_name}</Name>
        <Time>
          {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            dayjs(props.created_at).fromNow()
          }
        </Time>
      </TopWrapper>
      <Content dangerouslySetInnerHTML={{ __html: props.text }}></Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  box-shadow: 2px 2px 8px hsl(0deg 0% 0% / 0.25);
  border-radius: 5px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div``;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Name = styled.p`
  margin-left: 8px;
  font-size: 0.8rem;
`;

const Time = styled.p`
  margin-left: auto;
  font-size: 0.8rem;
`;

const Content = styled.p`
  margin-top: 10px;

  & img {
    display: inline;
  }
`;

export default Comment;
