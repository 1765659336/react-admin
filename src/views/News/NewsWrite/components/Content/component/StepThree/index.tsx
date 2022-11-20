import React from "react";
import { Button, StepProps } from "antd";
import { useNavigate } from "react-router-dom";
import ShowNews from "src/views/News/components/ShowNews";
import { addNews } from "src/request/News";

interface Props {
  StepOneFormRef: any;
  newsContent: string;
  stepCurrent: number;
  stepMessage: Array<StepProps>;
}

const StepThree: React.FC<Props> = ({
  StepOneFormRef,
  newsContent,
  stepCurrent,
  stepMessage,
}) => {
  // 保存草稿箱
  const saveDraftBox = () => {
    console.log(StepOneFormRef, newsContent);
    addNews({ newsTitle, newsClassification, content: newsContent }).then(
      (res) => {
        if(res.data.status){
          navigate("/news/manage/draft/list", { replace: true, state: {} });
        }
      }
    );
  };

  // 提交审核
  const submitAudit = () => {
    console.log(StepOneFormRef, newsContent);
    navigate("/news/manage/classification/list", { replace: true, state: {} });
  };

  const navigate = useNavigate();

  const { newsTitle, newsClassification } =
    StepOneFormRef?.current.getFieldsValue(["newsTitle", "newsClassification"]);

  return (
    <>
      <ShowNews
        newsTitle={newsTitle}
        newsClassification={newsClassification}
        content={newsContent}
        type="view"
        previousPath=""
      />
      <div>
        {stepCurrent === stepMessage.length - 1 ? (
          <Button type="primary" size={"large"} onClick={saveDraftBox}>
            保存草稿箱
          </Button>
        ) : null}
        {stepCurrent === stepMessage.length - 1 ? (
          <Button type="primary" size={"large"} onClick={submitAudit}>
            提交审核
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default StepThree;
