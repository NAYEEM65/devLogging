import { Button, Form, Input, message } from "antd";
import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
interface IEducation {
  addEducation: Function;
}
const Education: FC<IEducation> = ({ addEducation }): ReactElement => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    message.success("Submit success!");
    addEducation(values);
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
        <div className="grid md:grid-cols-2 md:gap-5 gap-2 items-center w-full">
          <Form.Item
            name="school"
            label="School"
            rules={[{ required: true }]}
            className="flex-1"
          >
            <Input placeholder="School" />
          </Form.Item>
          <Form.Item
            name="degree"
            label="Degree"
            rules={[{ required: true }]}
            className="flex-1"
          >
            <Input placeholder="Degree" />
          </Form.Item>
        </div>
        <div className="grid md:grid-cols-2 md:gap-5 gap-2 items-center w-full mb-5">
          <Form.Item
            name="fieldofstudy"
            rules={[{ required: true }]}
            label="Field of tudy"
          >
            <Input placeholder="Field of study" />
          </Form.Item>
          <Form.Item
            name="current"
            label="Current"
            rules={[{ required: true }]}
            className="flex-1"
          >
            <Input placeholder="Current " />
          </Form.Item>
        </div>
        <div className="grid md:grid-cols-2 md:gap-5 gap-2 items-center w-full">
          <Form.Item
            name="from"
            label="From"
            rules={[{ required: true }]}
            className="flex-1"
          >
            <Input placeholder="From" />
          </Form.Item>
          <Form.Item name="to" label="To" className="flex-1">
            <Input placeholder="To" />
          </Form.Item>
        </div>
        <div className="grid w-full">
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
            Add Education
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default connect(null, { addEducation })(Education);
