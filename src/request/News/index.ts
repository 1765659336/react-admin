import { VR } from "src/utils/data";
import request from "../index";

export const getAllNewsClassification = () => {
  return request.get("/api/getAllNewsClassification");
};

// 新增新闻
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

// 查询新闻
export const getNews = VR(
  (getNewsObj: {
    newsStatus?: number;
    newsClassification?: number;
    id?: string;
  }) => {
    return request.post("/api/getNews", getNewsObj);
  },
  1000
);

// 修改新闻
export const putNews = VR(
  (putNewsObj: {
    newsTitle: string;
    newsClassification: number;
    content: string;
    id: string;
  }) => {
    return request.put("/api/putNews", putNewsObj);
  },
  1000
);

// 修改新闻的状态
export const putNewsStatus = VR(
  (putNewsObj: { newsStatus: number; id: string }) => {
    return request.put("/api/putNewsStatus", putNewsObj);
  },
  1000
);
