import React, { useState, useRef, useImperativeHandle } from "react";
import { message } from "antd";
import MarkDownEdit from "src/components/MarkDownEdit";

const StepTwo: React.FC = React.forwardRef((props, ref) => {

    const [newsContent, setNewsContent] = useState("");

    useImperativeHandle(ref, () => ({
        submitForm: () => {
            return new Promise((resolve, reject) => {
                if (newsContent === "") {
                    message.warning("请输入新闻的内容");
                    reject(false);
                } else {
                    resolve(true);
                }
            })
        },
        newsContent
    }));

    return (
        <MarkDownEdit value={newsContent} onChange={(value: string) => setNewsContent(value)} />
    )
})

export default StepTwo;