import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deepCloneObj } from "src/utils/data";

const User: React.FC = () => {
  const { num } = useSelector((state: RootState) => ({
    num: state.numReducer.num,
  }));

  const { arr } = useSelector((state: RootState) => ({
    arr: state.arrReducer.arr,
  }));

  const dispatch = useDispatch();

  const changeNum = () => {
    dispatch({ type: "changeNum", value: num + 1 });
  };

  const changeArr = () => {
    const newArr = deepCloneObj(arr);
    newArr.push(num);
    dispatch({ type: "changeArr", value: newArr });
  };

  return (
    <div>
      User
      <p>{num}</p>
      <p>{arr}</p>
      <button onClick={changeNum}>num++</button>
      <button onClick={changeArr}>ArrChange</button>
    </div>
  );
};

export default User;
