import request from "../index";

interface ILoginMessage {
  username: string;
  password: string;
  remember: boolean;
}

export const login = (data: ILoginMessage) => {
  return request.post("/api/login",data);
};
