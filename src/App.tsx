import { Button } from "antd";
import React from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
const App: React.FC = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <QuestionCircleOutlined style={{ fontSize: "40px", color: "red" }} />
  </>
);

export default App;
