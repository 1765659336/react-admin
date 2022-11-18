import React, { useRef, useImperativeHandle } from "react";
import { StepProps } from "antd";
import StepOne from "./component/StepOne";
import StepTwo from "./component/StepTwo";
import StepThree from "./component/StepThree";
import style from "./index.module.less";
interface Props {
    stepCurrent: number;
    stepMessage: Array<StepProps>
}

const Content: React.FC<Props> = React.forwardRef(({ stepCurrent, stepMessage }, ref) => {
    const StepOneRef = useRef(null);
    const StepTwoRef = useRef(null);

    const divContainerRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => ({
        submit: (stepCurrent: number) => {
            const submitObject = [() => StepOneRef?.current?.submitForm(), () => StepTwoRef?.current?.submitForm()]
            return submitObject[stepCurrent]();
        },
    }));

    return (
        <div className={style.contentContainer} ref={divContainerRef}>
            <React.Fragment>
                {/* 因为上一步下一步需要缓存之前填写的内容，所以不能销毁，而是隐藏 */}
                <li className={stepCurrent === 0 ? "" : style.display}>
                    <StepOne ref={StepOneRef} />
                </li>
                <li className={stepCurrent === 1 ? "" : style.display}>
                    <StepTwo ref={StepTwoRef} />
                </li>
                <li className={stepCurrent === 2 ? "" : style.display}>
                    <StepThree newsFormValue={StepOneRef?.current?.formValue} newsContent={StepTwoRef?.current?.newsContent} stepCurrent={stepCurrent} stepMessage={stepMessage} />
                </li>
            </React.Fragment>
        </div>
    );
})

export default Content;
