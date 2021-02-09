import axios from "axios";

const request = axios.create({
  baseURL: "https://be-nc-news-app.herokuapp.com/api",
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
