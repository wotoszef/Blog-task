import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts, setPostName } from "./mainPageService/mainPageSlice";
import { RootState } from "../../../redux/rootReducer";
import { Box, Button, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { postDetailProps } from "./mainPageService/mainPageModel";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postsDetails } = useSelector((state: RootState) => state.mainPage);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      {postsDetails.map((postDetail: postDetailProps) => {
        return (
          <Box
            key={postDetail.id}
            style={{ border: "1px solid black", margin: "1rem 0" }}
          >
            <h1 style={{ textAlign: "left", padding: '0 3rem', textTransform: "capitalize" }}>
              {postDetail.title}
            </h1>
            <p style={{ textAlign: "justify", padding: '0 3rem' }}>{postDetail.body}</p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={() => {
                  dispatch(setPostName(postDetail.title));
                  history.push(`/${postDetail.title}/${postDetail.id}`);
                }}
                style={{
                  border: "2px solid black",
                  margin: "1rem",
                  borderRadius: "8px",
                }}
              >
                Full version
              </Button>
            </div>
          </Box>
        );
      })}
    </Container>
  );
};

export default MainPage;
