import React, { useRef, useImperativeHandle } from "react";
import { StepProps } from "antd";
import StepOne from "./component/StepOne";
import StepTwo from "./component/StepTwo";
import StepThree from "./component/StepThree";
import style from "./index.module.less";
interface Props {
  stepCurrent: number;
  stepMessage: Array<StepProps>;
}

const Content: React.FC<Props> = React.forwardRef(
  ({ stepCurrent, stepMessage }, ref) => {
    const StepOneRef = useRef<null | {
      StepOneFormRef: any;
      submitForm: Function;
    }>(null);
    const StepTwoRef = useRef<null | {
      newsContent: any;
      submitForm: Function;
    }>(null);

    const divContainerRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => ({
      submit: (stepCurrent: number) => {
        const submitObject = [
          () => StepOneRef?.current?.submitForm(),
          () => StepTwoRef?.current?.submitForm(),
        ];
        return submitObject[stepCurrent]();
      },
    }));

    return (
      <div className={style.contentContainer} ref={divContainerRef}>
        <React.Fragment>
          {/* 因为上一步下一步需要缓存之前填写的内容，所以不能销毁，而是隐藏 */}
          <div className={stepCurrent === 0 ? "" : style.display}>
            <StepOne ref={StepOneRef} />
          </div>
          <div className={stepCurrent === 1 ? "" : style.display}>
            <StepTwo ref={StepTwoRef} />
          </div>
          {/* 最后一步的数据都是拿取的前几步的数据，并且第一步的数据是调用函数获取的，如果直接获取成变量传递，不具备响应式，因此传递整个ref实例，并且最后一步使用v-if
          当被渲染的时候，已经拿到了ref */}
          {/* newsContent的数据使用了useState，具备了响应式 */}
          {stepCurrent === 2 ? (
            <div>
              <StepThree
                StepOneFormRef={StepOneRef?.current?.StepOneFormRef}
                newsContent={StepTwoRef?.current?.newsContent}
                stepCurrent={stepCurrent}
                stepMessage={stepMessage}
              />
            </div>
          ) : null}
        </React.Fragment>
      </div>
    );
  }
);

export default Content;
