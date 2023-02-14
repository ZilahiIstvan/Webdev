import { useState } from "react";

import "./VoteBtn.scss";

const VoteBtn = (props) => {
  const { vote, _id, comments, setComments, api_base } = props;

  const [voteAvailable, setVoteAvailable] = useState(true);

  const handleVoteClick = (id, modifierNum) => {
    fetch(api_base + "/comments/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vote: modifierNum,
      }),
    }).then((res) => res.json());
    setComments(
      comments.map((item) =>
        item._id === id
          ? { ...item, vote: item.vote + modifierNum }
          : { ...item }
      )
    );
    setVoteAvailable(!voteAvailable);
  };

  return (
    <div className="vote_btn">
      <svg
        className="vote_btn_plus"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => (voteAvailable ? handleVoteClick(_id, 1) : null)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <div className="vote_btn_text">{vote}</div>
      <svg
        className="vote_btn_minus"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => (voteAvailable ? null : handleVoteClick(_id, -1))}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
    </div>
  );
};

export default VoteBtn;
