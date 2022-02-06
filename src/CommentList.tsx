import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { CommentListApiResponse, PartialComment } from "./ApiResponseTypes";
import Comment from "./Comment";

const COMMENT_LIST_URL =
  "/api/comments/hotflow?id=4467107636950632&mid=4467107636950632&max_id_type=0";

const CommentList: FunctionComponent = () => {
  const [refreshCount, setRefreshCount] = useState<number>(0);
  const [commentList, setCommentList] = useState<PartialComment[]>([]);

  useEffect(() => {
    fetch(COMMENT_LIST_URL)
      .then((res) => res.json())
      .then((json) => {
        const commentListApiRes = json as CommentListApiResponse;
        if (commentListApiRes.ok === 1 && commentListApiRes.data?.data) {
          const newList = commentListApiRes.data.data;
          setCommentList((oldList) => {
            if (oldList.length === 0) {
              return newList;
            } else {
              const filteredList = newList.filter(
                (value) => value.id > oldList[0].id
              );
              return [...filteredList, ...oldList];
            }
          });
        }
      })
      .catch((e) => console.log(e));
  }, [refreshCount]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRefreshCount((rc) => rc + 1);
    }, 30000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <Wrapper>
      {commentList.map((comment) => {
        return <Comment key={comment.id} {...comment} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CommentList;
