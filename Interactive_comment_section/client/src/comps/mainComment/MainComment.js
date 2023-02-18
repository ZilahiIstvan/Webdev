import React, { useState } from "react";

import "./MainComment.scss";

import VoteBtn from "../reusable/VoteBtn/VoteBtn";
import ActionBtn from "../reusable/ActionBtn/ActionBtn";
import ItemIcon from "../reusable/ItemIcon/ItemIcon";
import Tag from "../reusable/Tag/Tag";
import TextArea from "../reusable/TextArea/TextArea";
import Btn from "../reusable/Btn/Btn";

const MainComment = (props) => {
  const {
    _id,
    description,
    name,
    createdAt,
    icon,
    comments,
    setComments,
    vote,
    user,
    setDisableBg,
    setClickedItemId,
  } = props;

  const [commentEdit, setCommentEdit] = useState(false);
  const [mainTextArea, setMainTextArea] = useState("");

  const allProps = {
    _id,
    comments,
    setComments,
    vote,
  };

  // add reply item
  const handleVoteBtnClick = () => {};

  const deleteBtnClick = () => {
    setDisableBg(true); // disable bg will be active
    setClickedItemId(_id); // set the current item's ID
  };

  const editBtnClick = () => {
    setCommentEdit(true);
    const data = comments.filter((item) => item._id === _id);
    setMainTextArea(data[0].description);
  };

  const updateBtnClick = () => {
    if (mainTextArea !== "") {
      setComments(
        comments.map((item) =>
          item._id === _id
            ? { ...item, description: mainTextArea }
            : { ...item }
        )
      );
      setCommentEdit(false);
      setMainTextArea("");
    } else {
      alert("Please add a valid comment!");
    }
  };

  return (
    <div className="main_comment">
      <div
        className={`main_comment_cont ${
          commentEdit ? "main_comment_cont_edit_modifier" : ""
        }`}
      >
        <div className="main_comment_modifier">
          <VoteBtn {...allProps} />
        </div>
        <div className="item_top_side">
          <div className="item_top_side_cont">
            <ItemIcon {...{ icon, iconStyle: "item_icon_main_comment" }} />
            <div className="item_top_side_cont_cont">
              <div className="item_name">{name}</div>
              {user.length > 0 ? (
                user[0].userName === name ? (
                  <Tag {...{ tagText: "you" }} />
                ) : null
              ) : (
                console.log("[ERROR]: There is no data in the user array!")
              )}
            </div>
            <div className="item_time">{createdAt}</div>
          </div>
          {user.length > 0 ? (
            user[0].userName === name ? (
              <div className="action_btns_cont">
                <ActionBtn
                  {...{
                    ...allProps,
                    actionBtnText: "Delete",
                    btnClick: deleteBtnClick,
                  }}
                />
                <ActionBtn
                  {...{
                    ...allProps,
                    actionBtnText: "Edit",
                    btnClick: editBtnClick,
                  }}
                />
              </div>
            ) : (
              <ActionBtn
                {...{
                  ...allProps,
                  actionBtnText: "Reply",
                  btnClick: handleVoteBtnClick,
                }}
              />
            )
          ) : (
            console.log("[ERROR]: There is no data in the user array!")
          )}
        </div>
        {commentEdit ? (
          <TextArea
            {...{
              placeholderText: "",
              valueText: mainTextArea,
              setTextVal: setMainTextArea,
              commentEdit,
            }}
          />
        ) : (
          <div className="item_desc">{description}</div>
        )}
        {commentEdit ? (
          <div className="main_comment_update_btn_modifier">
            <Btn
              {...{
                btnText: "UPDATE",
                btnStyle: "main",
                btnClick: updateBtnClick,
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainComment;
