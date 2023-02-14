import React, { useState } from "react";

import "./ReplyComment.scss";

import ItemIcon from "../reusable/ItemIcon/ItemIcon";
import Btn from "../reusable/Btn/Btn";
import { createPostFetch } from "../../apis/fetchData";

const ReplyComment = (props) => {
  const { icon, userName, setComments, comments, btnText, btnStyle } = props;

  const [textArea, setTextArea] = useState(
    btnText === "REPLY" ? `@${userName}, ` : ""
  );

  const checkTextAreaField = async (btnText) => {
    if (textArea !== "") {
      if (btnText === "SEND") {
        const created = `${1 + Math.floor(Math.random() * 58)} minutes ago`;
        const data = await createPostFetch({
          bodyParams: {
            icon: icon,
            name: userName,
            description: textArea,
            createdAt: created,
          },
        });
        setComments(comments.concat(data));
      }
    } else {
      window.alert("Please add a valid comment!");
    }
  };

  return (
    <div className="reply_comment">
      <ItemIcon {...{ icon, iconStyle: "item_icon_reply_comment" }} />
      <textarea
        className="reply_comment_input_field"
        placeholder="Add a comment..."
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <Btn
        {...{
          btnText: btnText,
          btnStyle: btnStyle,
          btnClick: checkTextAreaField,
        }}
      />
    </div>
  );
};

export default ReplyComment;
