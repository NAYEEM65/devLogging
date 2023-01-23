import Layout from "../../Layout/Layout";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Signup: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <div className="relative bg-[url('https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center h-[100vh]">
        <div className="absolute bg-black/50 top-0 left-0 w-full h-full">
          <div className="flex justify-center items-center bg-slate-900/20 my-10 rounded backdrop-blur flex-col mx-auto max-w-[500px] py-5">
            <div>
              <h2 className="text-3xl text-slate-100">Register</h2>
            </div>

            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="login-form"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="fullName"
                rules={[
                  { required: true, message: "Please input your Full Name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Full Name"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item className="text-center text-white">
                <Button
                  type="primary"
                  className="bg-blue-500 w-1/2 mr-3"
                  htmlType="submit"
                >
                  Register
                </Button>
                Or <Link to="/signin">Login</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;