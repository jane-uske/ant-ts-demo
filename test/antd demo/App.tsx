import React from "react";
import { Form, Select, Button, Tabs } from "antd";

const option = [
  { label: "a", value: "a" },
  { label: "b", value: "b" },
];

export default function App() {
  const [firstFormValue, setFirstFormValue] = React.useState({});
  const [secondFormValue, setSecondFormValue] = React.useState({});
  const [tabKey, setTabKey] = React.useState("1");
  const [form] = Form.useForm();

  const getData = async (params: any) => {};

  const onValuesChange = (value: any) => {
    if (tabKey === "1") {
      setFirstFormValue({ ...firstFormValue, ...value });
      return setFirstFormValue((preValue) => {
        getData({ ...preValue, ...value });
        return { ...preValue, ...value };
      });
    }
    setSecondFormValue({ ...secondFormValue, ...value });
    setSecondFormValue((preValue) => {
      getData({ ...preValue, ...value });
      return { ...preValue, ...value };
    });
  };

  const renderForm = () => {
    return (
      <>
        <Form form={form} onValuesChange={onValuesChange}>
          <Form.Item name="select1">
            <Select>
              {option.map((item) => {
                return (
                  <Select.Option value={item.value}>{item.label}</Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="select2">
            <Select>
              {option.map((item) => {
                return (
                  <Select.Option value={item.value}>{item.label}</Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </Form>
        <Button onClick={() => form.resetFields()}>清空</Button>
      </>
    );
  };
  const handleTabChange = (key:string) => {
    setTabKey(key);
    if (key === "2") {
      setFirstFormValue({ ...form.getFieldsValue() });
      form.resetFields();
      return form.setFieldsValue({ ...secondFormValue });
    }
    setSecondFormValue({ ...form.getFieldsValue() });
    form.resetFields();
    form.setFieldsValue({ ...firstFormValue });
  };

  return (
    <Tabs activeKey={tabKey} onChange={handleTabChange}>
      <Tabs.TabPane tab="Tab 1" key="1">
        <span>Content of Tab Pane 1</span>
        {renderForm()}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">
        <span>Content of Tab Pane 2</span>
        {renderForm()}
      </Tabs.TabPane>
    </Tabs>
  );
}
