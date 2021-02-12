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
export const updateVotes =(element,id,vote)=>{
  return request.patch(`/${element}/${id}`,{
    inc_votes : vote
  })
}
export const postComment =(name,article_id,comment)=>{
  return request.post(`/articles/${article_id}/comments`,{username:`${name}`,body:`${comment}`}).then(({data})=>{
      return data.comment;
  })
}