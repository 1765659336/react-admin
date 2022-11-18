import React from 'react';
import { Button, StepProps } from 'antd';
import { useNavigate } from "react-router-dom";
import ShowNews from "src/views/News/components/ShowNews";

interface Props {
    newsFormValue: { newsTitle: string, newsClassification: string },
    newsContent: string,
    stepCurrent: number,
    stepMessage: Array<StepProps>
}

const StepThree: React.FC<Props> = ({ newsFormValue, newsContent, stepCurrent, stepMessage }) => {

    // 保存草稿箱
    const saveDraftBox = () => {
        console.log(newsFormValue, newsContent);
        navigate("/news/manage/draft/list", { replace: true, state: {} });
    }

    // 提交审核
    const submitAudit = () => {
        console.log(newsFormValue, newsContent)
        navigate("/news/manage/classification/list", { replace: true, state: {} });
    }

    const navigate = useNavigate();

    return (
        <>
            <ShowNews newsTitle={newsFormValue?.newsTitle} newsClassification={newsFormValue?.newsClassification} content={newsContent} />
            <div>
                {stepCurrent === stepMessage.length - 1 ? <Button type="primary" size={"large"} onClick={saveDraftBox}>
                    保存草稿箱
                </Button> : null}
                {stepCurrent === stepMessage.length - 1 ? <Button type="primary" size={"large"} onClick={submitAudit}>
                    提交审核
                </Button> : null}
            </div>
        </>
    )

}

export default StepThree;