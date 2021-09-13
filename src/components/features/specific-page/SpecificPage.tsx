import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComments } from "./specificPageService/specificPageSlice";
import { RootState } from "../../../redux/rootReducer";
import { getCurrentPost } from "../main-page/mainPageService/mainPageSlice";
import { Box } from "@material-ui/core";
import { CommentDetailsProps } from "./specificPageService/specificPageModel";
import { useHistory } from "react-router-dom";

export interface SpecificPageProps {
  id: string | undefined;
}

const SpecificPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<SpecificPageProps>();
  const postId = Number(id);
  const { commentsDetails } = useSelector(
    (state: RootState) => state.specificPage
  );
  const currentPost = useSelector(getCurrentPost);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, postId]);

  return (
    <Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: " 0 2rem",
        }}
      >
        <h1
          onClick={() => history.push("/posts")}
          style={{
            textAlign: "center",
            fontSize: "2rem",
            textTransform: "capitalize",
            cursor: "pointer",
          }}
        >
          {currentPost?.title}
        </h1>
        <p style={{ textAlign: "center" }}>{currentPost?.body}</p>
      </div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: " 0 2rem",
        }}
      >
        <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>Comments</h3>
        {commentsDetails.map(
          (commentDetail: CommentDetailsProps, index: number) => {
            if (commentDetail.email !== undefined) {
              return (
                <Box key={index}>
                  <h1 style={{ fontSize: "1rem" }}>{commentDetail.email}</h1>
                  <p style={{ fontSize: "0.8rem" }}>{commentDetail.body}</p>
                </Box>
              );
            } else {
              return (
                <div key={index}>
                  <h1>LOADING...</h1>
                </div>
              );
            }
          }
        )}
      </Box>
    </Box>
  );
};

export default SpecificPage;
