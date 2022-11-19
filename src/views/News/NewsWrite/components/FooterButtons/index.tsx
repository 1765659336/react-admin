import React from "react";
import { Button, StepProps } from 'antd';
import style from "./index.module.less";

interface Props {
    stepCurrent: number,
    stepMessage: Array<StepProps>,
    changeStepCurrent: Function
}

const FooterButtons: React.FC<Props> = ({ stepCurrent, stepMessage, changeStepCurrent }) => {

    return (
        <div className={style.footerButtons}>
            <Button type="primary" size={"large"} onClick={() => changeStepCurrent(-1)} disabled={stepCurrent === 0}>
                上一步
            </Button>
            <Button type="primary" size={"large"} className={style.nextStepBtn} onClick={() => changeStepCurrent(1)} disabled={stepCurrent >= stepMessage.length - 1}>
                下一步
            </Button>
        </div>
    )
}

export default FooterButtons;