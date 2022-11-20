import { VR } from "src/utils/data";
import request from "../index";

export const getAllNewsClassification = () => {
  return request.get("/api/getAllNewsClassification");
};

export const addNews = VR(
  (addNewsObj: {
    newsTitle: string;
    newsClassification: number;
    content: string;
  }) => {
    return request.post("/api/addNews", addNewsObj);
  },
  1000
);
