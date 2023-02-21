const api_base = "http://localhost:3001";

// create
const createComment = "/comments/create";
// update
export const updateVote = "/comments/update/vote/";
export const updateDesc = "/comments/update/desc/";
// delete
const deleteComment = "/comments/delete/";

// CREATE
// create comment
export const createCommentFetch = (params) => {
  const { bodyParams } = params;
  return fetch(api_base + createComment, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParams),
  })
    .then((res) => res.json())
    .catch((err) => console.log("ERROR: ", err));
};

// UPDATE
// update vote of comment
export const updateFetch = (params) => {
  const { bodyParams, id, updateUrl } = params;
  return fetch(api_base + updateUrl + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParams),
  }).then((res) => res.json());
};

// DELETE
// delete comment by id
export const commentDeleteFetch = (params) => {
  const { id } = params;
  console.log("IDD: ", id);
  return fetch(api_base + deleteComment + id, {
    method: "DELETE",
  }).then((res) => res.json());
};
