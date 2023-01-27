// import { connect } from "react-redux";
import { Form, Input, Button, message, Select } from "antd";
import { FC, ReactElement, useState } from "react";
import Layout from "../../Layout/Layout";

const CreateProfile: FC = (): ReactElement => {
  const [form] = Form.useForm();
  const [status, setStatus] = useState<string>("");

  const onFinish = (values: object) => {
    message.success("Submit success!");
    console.log(values, status);
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  const handleChange = (value: string) => {
    setStatus(value);
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
          <Form.Item name="company" label="Company" className="flex-1">
            <Input placeholder="Company" />
          </Form.Item>
          <Form.Item name="website" label="Website" className="flex-1">
            <Input placeholder="Website" />
          </Form.Item>
        </div>
        <div className="grid md:grid-cols-2 md:gap-5 gap-2 items-center w-full mb-5">
          <Form.Item name="location" label="Location">
            <Input placeholder="Location" />
          </Form.Item>
          <div className="w-full mb-4">
            <label className="mb-2">Status</label>
            <Select
              defaultValue="Developer"
              onChange={handleChange}
              className="w-full"
              options={[
                { value: "developer", label: "Developer" },
                { value: "junior-developer", label: "Junior Developer" },
                { value: "sunior-developer", label: "Sunior Developer" },
                { value: "manager", label: "Manager" },
                { value: "student", label: "Student or Learning" },
                { value: "instructor", label: "Instructor" },
                { value: "intern", label: "Intern" },
                { value: "other", label: "other" },
              ]}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-5 gap-2 items-center w-full">
          <Form.Item
            name="skills"
            label="Skills"
            rules={[{ required: true }]}
            className="flex-1"
          >
            <Input placeholder="Skills" />
          </Form.Item>
          <Form.Item name="bio" label="Bio" className="flex-1">
            <Input placeholder="Bio" />
          </Form.Item>
        </div>
        <div className="grid md:grid-cols-3 md:gap-5 gap-2 items-center w-full">
          <Form.Item
            name="githubusername"
            label="Github Username"
            className="flex-1"
          >
            <Input placeholder="Github Username" />
          </Form.Item>
          <Form.Item name="twitter" label="Twitter">
            <Input placeholder="Twitter" />
          </Form.Item>
          <Form.Item name="facebook" label="Facebook">
            <Input placeholder="Facebook" />
          </Form.Item>
          <Form.Item name="linkedin" label="Linkedin">
            <Input placeholder="Linkedin" />
          </Form.Item>
          <Form.Item name="youtube" label="Youtube">
            <Input placeholder="Youtube" />
          </Form.Item>
          <Form.Item name="instagram" label="Instagram">
            <Input placeholder="Instagram" />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 px-5 md:w-fit w-full"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default CreateProfile;
