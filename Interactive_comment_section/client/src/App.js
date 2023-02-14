import { useEffect, useState } from "react";

import "./App.scss";

import MainComment from "./comps/mainComment/MainComment";
import ReplyComment from "./comps/replyComment/ReplyComment";

const api_base = "http://localhost:3001";

const App = () => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);
  const [lastReplayId, setLastReplayId] = useState(-1);

  useEffect(() => {
    fetch(api_base + "/user/myUser")
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch(api_base + "/comments/data")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="app">
      <div className="app_cont">
        {comments.map((commentsItem) => {
          const MainCommentProps = {
            ...commentsItem,
            comments,
            setComments,
            api_base,
            lastReplayId,
            setLastReplayId,
          };
          return (
            <>
              <MainComment key={commentsItem._id} {...MainCommentProps} />
              {commentsItem.replies.map((repliesItem) => {
                return (
                  <ReplyComment
                    {...{
                      ...repliesItem,
                      api_base,
                      setComments,
                      comments,
                      btnText: "REPLY",
                      btnStyle: "main",
                      userName: commentsItem.name,
                    }}
                  />
                );
              })}
            </>
          );
        })}
        {user.map((item) => (
          <ReplyComment
            {...{
              ...item,
              api_base,
              setComments,
              comments,
              btnText: "SEND",
              btnStyle: "main",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
