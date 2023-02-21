import React, { useState } from "react";

import "./MainComment.scss";

import VoteBtn from "../reusable/VoteBtn/VoteBtn";
import ActionBtn from "../reusable/ActionBtn/ActionBtn";
import ItemIcon from "../reusable/ItemIcon/ItemIcon";
import Tag from "../reusable/Tag/Tag";
import TextArea from "../reusable/TextArea/TextArea";
import Btn from "../reusable/Btn/Btn";

import { updateFetch, updateDesc } from "../../apis/fetchData";

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
    editBtnClicked,
    replyBtnClicked,
  } = props;

  const [mainTextArea, setMainTextArea] = useState("");

  const allProps = {
    _id,
    comments,
    setComments,
    vote,
  };

  // add reply item
  const replyBtnClick = () => {
    console.log("replybtnClicked");
    setComments(
      comments.map((item) =>
        item._id === _id
          ? {
              ...item,
              replies: [
                ...item.replies,
                {
                  icon: user[0].icon,
                  userName: user[0].userName,
                  btnText: "Reply",
                  btnStyle: "main",
                },
              ],
              replyBtnClicked: true,
            }
          : item.replyBtnClicked
          ? {
              ...item,
              replyBtnClicked: false,
              replies: item.replies.slice(0, -1),
            }
          : { ...item, replyBtnClicked: false }
      )
    );
  };

  const deleteBtnClick = () => {
    setDisableBg(true); // disable bg will be active
    setClickedItemId(_id); // set the current item's ID
  };

  const editBtnClick = () => {
    setComments(
      comments.map((item) => {
        if (item._id === _id) {
          setMainTextArea(item.description);
          return { ...item, editBtnClicked: true };
        } else {
          return { ...item, editBtnClicked: false };
        }
      })
    );
  };

  const updateBtnClick = async () => {
    if (mainTextArea !== "") {
      await updateFetch({
        bodyParams: { description: mainTextArea },
        id: _id,
        updateUrl: updateDesc,
      });
      setComments(
        comments.map((item) =>
          item._id === _id
            ? { ...item, description: mainTextArea, editBtnClicked: false }
            : { ...item }
        )
      );
      setMainTextArea("");
    } else {
      alert("Please add a valid comment!");
    }
  };

  return (
    <div className="main_comment">
      <div
        className={`main_comment_cont ${
          editBtnClicked ? "main_comment_cont_edit_modifier" : ""
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
                  btnClick: replyBtnClick,
                }}
              />
            )
          ) : (
            console.log("[ERROR]: There is no data in the user array!")
          )}
        </div>
        {editBtnClicked ? (
          <TextArea
            {...{
              placeholderText: "",
              valueText: mainTextArea,
              setTextVal: setMainTextArea,
              editBtnClicked,
            }}
          />
        ) : (
          <div className="item_desc">{description}</div>
        )}
        {editBtnClicked ? (
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
