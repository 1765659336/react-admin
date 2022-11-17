import React from "react";
import style from "./index.module.less";

interface Props {
    stepCurrent: number
}

const Content: React.FC<Props> = ({ stepCurrent }) => {

    return (
        <div className={style.contentContainer}>
            <ul>
                {/* 因为上一步下一步需要缓存之前填写的内容，所以不能销毁，而是隐藏 */}
                <li className={stepCurrent === 0 ? '' : style.display}>11111111111</li>
                <li className={stepCurrent === 1 ? '' : style.display}>22222222222</li>
                <li className={stepCurrent === 2 ? '' : style.display}>33333333333</li>
            </ul>
        </div>
    )
}

export default Content;