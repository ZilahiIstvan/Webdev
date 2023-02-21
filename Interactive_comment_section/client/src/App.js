import React, { useEffect, useState } from "react";

import "./App.scss";

import MainComment from "./comps/mainComment/MainComment";
import ReplyComment from "./comps/replyComment/ReplyComment";
import DisabledBg from "./comps/reusable/DisabledBg/DisabledBg";
import DeletePopUp from "./comps/deletePopUp/DeletePopUp";

const api_base = "http://localhost:3001";

const App = () => {
  // contains all the comments
  /* 
    -- in database --
    icon
    name
    createdAt
    replies
    description
    vote: {cnt, selector}

    -- not in database --
    editBtnClicked
    replyBtnClicked
  */
  const [comments, setComments] = useState([]);
  // contains all the users
  const [user, setUser] = useState([]);
  const [lastReplayId, setLastReplayId] = useState(-1);
  // used to enable or disable the background
  const [disableBg, setDisableBg] = useState(false);
  // stores the id of the clicked item
  const [clickedItemId, setClickedItemId] = useState(0);
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    fetch(api_base + "/user/myUser")
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch(api_base + "/comments/data")
      .then((res) => res.json())
      .then((data) =>
        setComments(
          data.map((item) => ({
            ...item,
            editBtnClicked: false,
            replyBtnClicked: false,
          }))
        )
      );
  }, []);

  useEffect(() => {
    console.log("Comments: ", comments);
  }, [comments]);

  return (
    <div className="app">
      <div className="app_cont">
        {comments.map((commentsItem) => {
          const MainCommentProps = {
            ...commentsItem,
            comments,
            setComments,
            lastReplayId,
            setLastReplayId,
            user,
            setDisableBg,
            setClickedItemId,
            textArea,
            setTextArea,
          };
          return (
            <React.Fragment key={commentsItem._id}>
              <MainComment {...MainCommentProps} />
              <div className="main_comment_grid">
                <div className="main_comment_strip_cont">
                  <div className="main_comment_strip"></div>
                </div>
                {commentsItem.replies.map((repliesItem) => {
                  return repliesItem.name ? (
                    <MainComment
                      {...{
                        ...repliesItem,
                        user,
                        setDisableBg,
                        setClickedItemId,
                      }}
                    />
                  ) : (
                    <></>
                  );
                })}
              </div>
              {commentsItem.replies.map((repliesItem, idx) => {
                return repliesItem.name ? (
                  <></>
                ) : (
                  <ReplyComment
                    key={repliesItem._id} // id is needed !!!
                    {...{
                      ...repliesItem,
                      ...commentsItem,
                      comments,
                      setComments,
                    }}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
        {user.map((item) => (
          <ReplyComment
            key={item._id}
            {...{
              ...item,
              api_base,
              setComments,
              comments,
              textArea,
              setTextArea,
              btnText: "SEND",
              btnStyle: "main",
            }}
          />
        ))}
      </div>
      {disableBg ? (
        <React.Fragment>
          <DisabledBg
            {...{
              onClickFunc: () => setDisableBg(false),
            }}
          />
          <DeletePopUp
            {...{
              setDisableBg,
              clickedItemId,
              comments,
              setComments,
            }}
          />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default App;
