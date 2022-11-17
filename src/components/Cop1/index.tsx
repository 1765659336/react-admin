import style from "./index.module.scss";
import style2 from "./index.module.less";

function Cop1() {
  return (
    <>
      <div className={style.box}>cop1</div>
      <div className={style2.box2}>cop1</div>
    </>
  );
}

export default Cop1;
