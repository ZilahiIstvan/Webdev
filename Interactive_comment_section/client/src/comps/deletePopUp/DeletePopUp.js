import React from "react";

import "./DeletePopUp.scss";

import Btn from "../reusable/Btn/Btn";
import { commentDeleteFetch } from "../../apis/fetchData";

const DeletePopUp = (props) => {
  const { setDisableBg, clickedItemId, comments, setComments } = props;

  const deleteBtnClick = async (id) => {
    await commentDeleteFetch({ id });
    setComments(comments.filter((item) => item._id !== id));
    setDisableBg(false);
  };

  return (
    <div className="delete_pop_up">
      <div className="delete_pop_up_title">Delete comment</div>
      <div className="delete_pop_up_desc">
        Are you sure you want to delete the comment? This will remove the
        comment and can't be undone.
      </div>
      <div className="delete_pop_up_cont">
        <Btn
          {...{
            btnText: "NO, CANCEL",
            btnStyle: "cancel",
            btnClick: () => setDisableBg(false),
          }}
        />
        <Btn
          {...{
            btnText: "YES, DELETE",
            btnStyle: "delete",
            btnClick: () => deleteBtnClick(clickedItemId),
          }}
        />
      </div>
    </div>
  );
};

export default DeletePopUp;
