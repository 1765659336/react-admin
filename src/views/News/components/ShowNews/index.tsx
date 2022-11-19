import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Form, Input, Select, FormInstance, message, Button } from "antd";
import MarkDetail from "src/components/MarkDownShow";
import MarkDownEdit from "src/components/MarkDownEdit";

interface Props {
    newsTitle: string, newsClassification: string, content: string, type: string, previousPath: string
}
const ShowNews: React.FC<Props> = ({ newsTitle, newsClassification, content, type, previousPath }) => {
    const StepOneFormRef = useRef<FormInstance<any> | null>(null);

    const [newsContent, setNewsContent] = useState(content);

    const navigate = useNavigate();

    // 是否可编辑
    const isCanEdit = type === 'edit'

    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log("search:", value);
    };

    const btn = () => {
        StepOneFormRef?.current
            ?.validateFields()
            .then((value) => {
                console.log("校验成功", value);
                message.success("保存成功");
                navigate(previousPath, { replace: true })
            })
            .catch(() => {
                message.warning("请按提示输入内容");
            });
    }

    const classificationOptions = [
        {
            value: "热点",
            label: "热点",
        },
        {
            value: "民生",
            label: "民生",
        },
        {
            value: "军事",
            label: "军事",
        },
    ];

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ newsTitle, newsClassification, content }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                ref={StepOneFormRef}
                disabled={!isCanEdit}
            >
                <Form.Item
                    label="新闻标题"
                    name="newsTitle"
                    rules={[{ required: true, message: "请输入新闻标题" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="新闻分类"
                    name="newsClassification"
                    rules={[{ required: true, message: "请选择新闻分类" }]}
                >
                    <Select
                        showSearch
                        placeholder="请选择新闻类型"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                        }
                        options={classificationOptions}
                    />
                </Form.Item>
                <Form.Item
                    label="新闻内容"
                    name="content"
                    rules={[{ required: true, message: "请输入新闻内容" }]}
                >
                    {isCanEdit ? <MarkDownEdit value={newsContent} onChange={(value: string) => setNewsContent(value)} /> : <MarkDetail content={content} />}
                </Form.Item>
                {isCanEdit ? <Form.Item
                    label=""
                    name="action"
                >
                    <Button type="primary" onClick={btn}>保存</Button>
                </Form.Item> : null}
            </Form>

        </>
    )
}
export default ShowNews;