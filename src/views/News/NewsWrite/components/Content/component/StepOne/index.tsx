import React from 'react';
import { Form, Input, Select } from "antd";

const StepOne: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    const classificationOptions = [
        {
            value: '热点',
            label: '热点',
        },
        {
            value: '民生',
            label: '民生',
        },
        {
            value: '军事',
            label: '军事',
        },
    ]

    return (
        <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="新闻标题"
                name="username"
                rules={[{ required: true, message: '请输入新闻标题' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="新闻分类"
                name="password"
                rules={[{ required: true, message: '请选择新闻分类' }]}
            >
                <Select
                    showSearch
                    placeholder="请选择新闻类型"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={classificationOptions}
                />
            </Form.Item>
        </Form>
    )
}

export default StepOne;