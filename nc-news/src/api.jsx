import axios from "axios";

const request = axios.create({
  baseURL: "https://be-nc-news-app.herokuapp.com/api",
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
export const getArticles = (topic) => {
  return request.get("/articles", { params: {topic}  }).then(({data}) => {
    return data.articles;
   

  });
};
export const getArticleById = (article_id)=>{
  return request.get(`/articles/${article_id}`).then(({data})=>{
      return data;
  })
}
export const getCommentsByArticleId = (article_id)=>{
  return request.get(`/articles/${article_id}/comments`).then(({data})=>{
    return data.comments;
  })
  
}
export const updateVotes =(id,vote)=>{
  return request.patch(`articles/${id}`,{
    inc_votes : vote
  })
}