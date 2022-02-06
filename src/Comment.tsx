import { FunctionComponent } from "react";
import styled from "styled-components";
import { PartialComment } from "./ApiResponseTypes";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
dayjs.extend(relativeTime);
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
dayjs.locale("zh-cn");

const Comment: FunctionComponent<{
  comment?: PartialComment;
}> = (props) => {
  return (
    <Wrapper>
      <TopWrapper>
        {props.comment ? (
          <Avatar src={props.comment.user.profile_image_url} />
        ) : (
          <Skeleton width={30} />
        )}
        <Name>
          {props.comment ? (
            props.comment.user.screen_name
          ) : (
            <Skeleton width={30} />
          )}
        </Name>
        <Time>
          {props.comment ? (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            dayjs(props.comment.created_at).fromNow()
          ) : (
            <Skeleton width={30} />
          )}
        </Time>
      </TopWrapper>
      {props.comment ? (
        <Content
          dangerouslySetInnerHTML={{ __html: props.comment.text }}
        ></Content>
      ) : (
        <Skeleton />
      )}
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
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
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
  & img {
    display: inline;
  }
`;

export default Comment;
