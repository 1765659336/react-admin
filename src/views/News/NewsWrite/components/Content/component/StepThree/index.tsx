import React from 'react';
import { Button, StepProps } from 'antd';
import MarkDetail from "src/components/MarkDownShow";
import { useNavigate } from "react-router-dom";

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
            <div>新闻标题:{newsFormValue?.newsTitle}</div>
            <div>新闻分类:{newsFormValue?.newsClassification}</div>
            <div>
                <div>新闻内容</div>
                <MarkDetail content={newsContent} />
            </div>
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