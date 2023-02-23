import { Button, Checkbox, DatePicker, Form, Input, message } from "antd";
import { FC, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import { CheckboxChangeEvent } from "antd/es/checkbox";
interface IExperience {
  addExperience: Function;
}
const Experience: FC<IExperience> = ({ addExperience }): ReactElement => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);
  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(!checked);
  };

  const onFinish = (values: any) => {
    message.success("Submit success!");
    addExperience({ ...values, current: checked });
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <Layout>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="mt-10 px-10"
      >
        <div className="grid md:grid-cols-3 md:gap-5 gap-2 items-center w-full">
          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: true }]}
            className="flex-1"
          >
            <Input placeholder="Company" />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true }]}
            className="flex-1"
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name="location" label="Location">
            <Input placeholder="Location" />
          </Form.Item>
        </div>

        <div className="grid md:grid-cols-2 md:gap-5 gap-2 items-center w-full mb-5">
          <div className="grid md:grid-cols-3 md:gap-5 gap-2 items-center w-full flex-1">
            <Form.Item name="current" label="Current" className="flex-1">
              <Checkbox onChange={onChange} checked={checked}>
                Checkbox
              </Checkbox>
            </Form.Item>

            <Form.Item
              name="from"
              label="From"
              rules={[{ required: true }]}
              className="flex-1"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item name="to" label="To" className="flex-1">
              <DatePicker disabled={checked} />
            </Form.Item>
          </div>

          <Form.Item name="description" label="Description">
            <Input placeholder="description" />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 px-5 md:w-fit w-full"
          >
            Add Experience
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default connect(null, { addExperience })(Experience);
