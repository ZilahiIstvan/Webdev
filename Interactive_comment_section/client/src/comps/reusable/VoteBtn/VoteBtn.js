import "./VoteBtn.scss";

import { createPutFetch } from "../../../apis/fetchData";

const VoteBtn = (props) => {
  const { vote, _id, comments, setComments } = props;

  const handleVoteClick = async (id, selector) => {
    // selector -> 1 means -> + and 2 means -> - (0 -> fully default)
    const modifier = selector === 1 ? 1 : -1;
    const data = await createPutFetch({
      bodyParams: { cnt: modifier, selector: selector },
      id: id,
    });
    setComments(
      comments.map((item) =>
        item._id === _id
          ? {
              ...item,
              vote: { cnt: item.vote.cnt + modifier, selector: selector },
            }
          : { ...item }
      )
    );
  };

  console.log("vote: ", vote);

  return (
    <div className="vote_btn">
      <svg
        className={`vote_btn_plus ${
          vote.selector === 1 ? "vote_btn_plus_active" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() =>
          vote.selector === 0 || vote.selector === 2
            ? handleVoteClick(_id, 1)
            : null
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <div className="vote_btn_text">{vote.cnt}</div>
      <svg
        className={`vote_btn_minus ${
          vote.selector === 2 ? "vote_btn_minus_active" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => (vote.selector === 1 ? handleVoteClick(_id, 2) : null)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
    </div>
  );
};

export default VoteBtn;
