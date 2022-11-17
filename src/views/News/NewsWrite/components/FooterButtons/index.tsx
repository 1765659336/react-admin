import React from "react";
import { Button, StepProps } from 'antd';
import style from "./index.module.less";

interface Props {
    stepCurrent: number,
    stepMessage: Array<StepProps>,
    changeStepCurrent: Function
}

const FooterButtons: React.FC<Props> = ({ stepCurrent, stepMessage, changeStepCurrent }) => {

    // 保存草稿箱
    const saveDraftBox = () => {
        alert("保存草稿箱");
    }

    // 提交审核
    const submitAudit = () => {
        alert("提交审核");
    }

    return (
        <div className={style.footerButtons}>
            <Button type="primary" size={"large"} onClick={() => changeStepCurrent(-1)} disabled={stepCurrent === 0}>
                上一步
            </Button>
            <Button type="primary" size={"large"} className={style.nextStepBtn} onClick={() => changeStepCurrent(1)} disabled={stepCurrent >= stepMessage.length - 1}>
                下一步
            </Button>
            {stepCurrent === stepMessage.length - 1 ? <Button type="primary" size={"large"} className={style.nextStepBtn} onClick={saveDraftBox}>
                保存草稿箱
            </Button> : null}
            {stepCurrent === stepMessage.length - 1 ? <Button type="primary" size={"large"} className={style.nextStepBtn} onClick={submitAudit}>
                提交审核
            </Button> : null}
        </div>
    )
}

export default FooterButtons;