import { PageHeader, Steps, StepProps } from 'antd';
import React, { useState } from 'react';
import Content from "./components/Content";
import FooterButtons from "./components/FooterButtons";

const NewsWrite: React.FC = () => {

    // 步骤条步数
    const [stepCurrent, setStepCurrent] = useState<number>(0);

    // 步骤条信息
    const stepMessage: Array<StepProps> = [
        {
            title: '基本信息',
            description: "新闻标题，新闻分类",
        },
        {
            title: '新闻内容',
            description: "新闻主体内容",
            subTitle: 'Left 00:00:08',
        },
        {
            title: '新闻提交',
            description: "保存草稿",
        },
    ]

    // 上一步下一步改变步骤条的current值
    const changeStepCurrent = (stepNumber: number) => {

        // 将要改变的值大小
        const willChangedStepCurrent = stepNumber + stepCurrent;

        if (willChangedStepCurrent >= 0 && willChangedStepCurrent < stepMessage.length) {
            setStepCurrent(willChangedStepCurrent)
        }

    }

    return (
        <>
            <PageHeader
                title="撰写新闻"
                subTitle="按步骤操作"
            />
            <Steps
                current={stepCurrent}
                items={stepMessage}
            />
            <Content stepCurrent={stepCurrent} />
            <FooterButtons stepMessage={stepMessage} stepCurrent={stepCurrent} changeStepCurrent={changeStepCurrent} />
        </>
    )
}

export default NewsWrite;