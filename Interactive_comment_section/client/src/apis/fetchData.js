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

/*
export const createPostFetch = (params) => {
  const { bodyParams } = params;
  return fetch(api_base + "/comments/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParams),
  }).then((res) => res.json());
};*/
