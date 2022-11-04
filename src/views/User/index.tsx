import React from "react";
import { useSelector } from "react-redux";
const User: React.FC = () => {
  const { num } = useSelector((state) => ({
    num: state.num,
  }));
  return (
    <div>
      User
      <p>{num}</p>
    </div>
  );
};

export default User;
