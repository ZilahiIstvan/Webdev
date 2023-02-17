const api_base = "http://localhost:3001";

export const createPostFetch = (params) => {
  const { bodyParams } = params;
  return fetch(api_base + "/comments/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParams),
  })
    .then((res) => res.json())
    .catch((err) => console.log("ERROR: ", err));
};

export const createPutFetch = (params) => {
  const { bodyParams, id } = params;
  return fetch(api_base + "/comments/update/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParams),
  }).then((res) => res.json());
};

export const commentDeleteFetch = (params) => {
  const { id } = params;
  console.log("IDD: ", id);
  return fetch(api_base + "/comments/delete/" + id, {
    method: "DELETE",
  }).then((res) => res.json());
};
