import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { login } from "src/request/Test";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("校验成功表单数据为:", values);
    // 调用接口判断是否登录成功
    const result = await login(values);
    const { message: axiosMessage, status, token } = result.data;
    message.success(axiosMessage);
    if (status) {
      localStorage.setItem("token", token);
      navigate("/home/users");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("校验失败:", errorInfo);
    const errorMessage: Array<string> = [];
    errorInfo.errorFields.forEach((item: { errors: Array<string> }) => {
      errorMessage.push(item.errors[0]);
    });
    message.error(errorMessage.join("-"));
  };
  return (
    <div className={style["login-contaienr"]}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{
          username: "admin",
          password: "123456",
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[{ required: true, message: "账号不能为空" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "密码不能为空" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
