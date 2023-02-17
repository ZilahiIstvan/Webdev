import React, { useState } from "react";

import "./ReplyComment.scss";

import ItemIcon from "../reusable/ItemIcon/ItemIcon";
import Btn from "../reusable/Btn/Btn";
import { createPostFetch } from "../../apis/fetchData";
import TextArea from "../reusable/TextArea/TextArea";

const ReplyComment = (props) => {
  const { icon, userName, setComments, comments, btnText, btnStyle } = props;

  const [replyTextArea, setReplyTextArea] = useState("");

  const sendButtonClicked = async () => {
    if (replyTextArea !== "") {
      const created = `${1 + Math.floor(Math.random() * 58)} minutes ago`;
      const data = await createPostFetch({
        bodyParams: {
          icon: icon,
          name: userName,
          description: replyTextArea,
          createdAt: created,
        },
      });
      setReplyTextArea("");
      setComments(comments.concat(data));
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
