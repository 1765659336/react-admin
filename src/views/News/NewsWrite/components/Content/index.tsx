import React, { useRef, useImperativeHandle } from "react";
import StepOne from "./component/StepOne";
import style from "./index.module.less";
interface Props {
    stepCurrent: number;
}

const Content: React.FC<Props> = React.forwardRef(({ stepCurrent }, ref) => {
    const StepOneRef = useRef(null);

    const divContainerRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => ({
        submit: (stepCurrent: number) => {
            const submitObject = [() => StepOneRef?.current?.submitForm()]
            return submitObject[stepCurrent]();
        },
    }));

    return (
        <div className={style.contentContainer} ref={divContainerRef}>
            <ul>
                {/* 因为上一步下一步需要缓存之前填写的内容，所以不能销毁，而是隐藏 */}
                <li className={stepCurrent === 0 ? "" : style.display}>
                    <StepOne ref={StepOneRef} />
                </li>
                <li className={stepCurrent === 1 ? "" : style.display}>22222222222</li>
                <li className={stepCurrent === 2 ? "" : style.display}>33333333333</li>
            </ul>
        </div>
    );
})

export default Content;
