import React from "react";
import { useSelector, useDispatch } from "react-redux";

const User: React.FC = () => {

  const { num } = useSelector((state: RootState) => ({
    num: state.num,
  }));

  const dispatch = useDispatch();
  
  const changeNum = () => {
    dispatch({ type: "add" });
  };
  return (
    <div>
      User
      <p>{num}</p>
      <button onClick={changeNum}>num++</button>
    </div>
  );
};

export default User;
