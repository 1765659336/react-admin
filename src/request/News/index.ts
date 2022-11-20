import request from "../index";

export const getAllNewsClassification = () => {
  return request.get("/api/getAllNewsClassification");
};

export const addNews = (addNewsObj: {
  newsTitle: string;
  newsClassification: number;
  content: string;
}) => {
  return request.post("/api/addNews", addNewsObj);
};
