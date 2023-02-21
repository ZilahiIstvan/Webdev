import React, { useState } from "react";

import "./ReplyComment.scss";

import ItemIcon from "../reusable/ItemIcon/ItemIcon";
import Btn from "../reusable/Btn/Btn";
import { createCommentFetch } from "../../apis/fetchData";
import TextArea from "../reusable/TextArea/TextArea";

const ReplyComment = (props) => {
  const { icon, userName, setComments, comments, btnText, btnStyle, _id } =
    props;

  const [replyTextArea, setReplyTextArea] = useState("");

  const sendButtonClicked = async () => {
    if (replyTextArea !== "") {
      const created = `${1 + Math.floor(Math.random() * 58)} minutes ago`;
      // problem is here -> new comment is created every time in the database (create new comment creation post)
      const data = await createCommentFetch({
        bodyParams: {
          icon: icon,
          name: userName,
          description: replyTextArea,
          createdAt: created,
        },
      });
      setReplyTextArea("");
      if (btnText === "Send") {
        // SEND button clicked
        setComments(comments.concat(data));
      } else {
        // REPLY button clicked
        console.log("REPLY BUTTON");
        console.log("data: ", data);
        setComments(
          comments.map((item) =>
            item._id === _id
              ? {
                  ...item,
                  replies: [...item.replies, data], // problem is here
                }
              : { ...item }
          )
        );
      }
    } else {
      window.alert("Please add a valid comment!");
    }
  };

  return (
    <div className="reply_comment">
      <ItemIcon {...{ icon, iconStyle: "item_icon_reply_comment" }} />
      <TextArea
        {...{
          placeholderText: "Add new comment...",
          valueText: replyTextArea,
          setTextVal: setReplyTextArea,
        }}
      />
      <Btn
        {...{
          btnText: btnText,
          btnStyle: btnStyle,
          btnClick: sendButtonClicked,
        }}
      />
    </div>
  );
};

export default ReplyComment;
