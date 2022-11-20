import React, { useRef, useImperativeHandle, useEffect } from "react";
import { Form, Input, Select, FormInstance, message } from "antd";
import { useSelector, useDispatch } from "react-redux";

const StepOne: React.FC = React.forwardRef((props, ref) => {
  const StepOneFormRef = useRef<FormInstance<any> | null>(null);
  useImperativeHandle(ref, () => ({
    submitForm: () => {
      return new Promise((resolve, reject) => {
        StepOneFormRef?.current
          ?.validateFields()
          .then((value) => {
            console.log("校验成功", value);
            resolve(true);
          })
          .catch(() => {
            message.warning("请按提示输入内容");
            reject(false);
          });
      });
    },
    StepOneFormRef,
  }));

  const { newsClassification: classificationOptions } = useSelector(
    (state: RootState) => ({
      newsClassification: state.commonReducer.newsClassification,
    })
  );

  const dispatch = useDispatch();

  const getNewsClassification = () => {
    dispatch((dis: Function) => {
      dispatch({
        actionName: "actionAsync",
        type: "getNewsClassificationAsync",
        dis: dis,
      });
    });
  };

  useEffect(() => {
    if (classificationOptions.length === 0) {
      getNewsClassification();
    }
  }, []);

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

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      ref={StepOneFormRef}
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
    </Form>
  );
});

export default StepOne;
