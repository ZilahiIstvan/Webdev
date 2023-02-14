import React, { useEffect } from "react";

import "./MainComment.scss";

import VoteBtn from "../reusable/VoteBtn/VoteBtn";
import ActionBtn from "../reusable/ActionBtn/ActionBtn";
import ItemIcon from "../reusable/ItemIcon/ItemIcon";

const MainComment = (props) => {
  const {
    _id,
    vote,
    description,
    name,
    createdAt,
    icon,
    comments,
    setComments,
    api_base,
    active,
    lastReplayId,
    setLastReplayId,
  } = props;

  const allProps = {
    vote,
    _id,
    comments,
    setComments,
    api_base,
    active,
  };

  // add reply item
  const handleVoteBtnClick = () => {
    setComments(
      comments.map((item) => {
        // set the clicked element
        if (item._id === _id) {
          return {
            ...item,
            replies: item.replies.concat({ icon: "img" }),
            active: { ...item.active, replay: true },
          };
        }
        // reset last element
        else if (item._id === lastReplayId) {
          return {
            ...item,
            replies: item.replies.slice(0, item.replies.length - 1),
            active: { ...item.active, replay: false },
          };
        }
        // keep the rest element
        else {
          return { ...item };
        }
      })
    );
    setLastReplayId(_id);
  };

  useEffect(() => {
    console.log("clicked: ", comments);
  }, [comments]);

  return (
    <div className="main_comment">
      <div className="main_comment_cont">
        <div className="main_comment_modifier">
          <VoteBtn {...allProps} />
        </div>
        <div className="item_top_side">
          <div className="item_top_side_cont">
            <ItemIcon {...{ icon, iconStyle: "item_icon_main_comment" }} />
            <div className="item_name">{name}</div>
            <div className="item_time">{createdAt}</div>
          </div>
          <ActionBtn
            {...{
              ...allProps,
              actionBtnText: "Reply",
              btnClick: handleVoteBtnClick,
            }}
          />
        </div>
        <div className="item_desc">{description}</div>
      </div>
    </div>
  );
};

export default MainComment;
