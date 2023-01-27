import { connect } from "react-redux";
import { Form, Input, Button, message, Select } from "antd";
import { FC, ReactElement, useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
interface ICreateProfile {
  createProfile: Function;
  getCurrentProfile: Function;
  profile: any;
}
const EditProfile: FC<ICreateProfile> = ({
  profile,
  createProfile,
  getCurrentProfile,
}): ReactElement => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [status, setStatus] = useState<string>("");
  const [formData, setFormData] = useState<any>({});

  const { profile: propf, loading }: any = profile;

  const onFinish = (values: any) => {
    message.success("Submit success!");
    const data = {
      company: values.company,
      website: values.website,
      location: values.location,
      status: status,
      skills: values.skills,
      githubusername: values.githubusername,
      bio: values.bio,
      twitter: values.twitter,
      facebook: values.facebook,
      linkedin: values.linkedin,
      youtube: values.youtube,
      instagram: values.instagram,
    };
    createProfile(data, navigate);
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  const handleChange = (value: string) => {
    setStatus(value);
  };
  useEffect(() => {
    getCurrentProfile();
    // setFormData({
    //   company: loading || !propf.company ? "" : propf.company,
    //   website: loading || !propf.website ? "" : propf.website,
    //   location: loading || !propf.location ? "" : propf.location,
    //   status: loading || !propf.status ? "" : propf.status,
    //   skills: loading || !propf.skills ? "" : propf.skills.join(","),
    //   githubusername:
    //     loading || !propf.githubusername ? "" : propf.githubusername,
    //   bio: loading || !propf.bio ? "" : propf.bio,
    //   twitter: loading || !propf.social ? "" : propf.social.twitter,
    //   facebook: loading || !propf.social ? "" : propf.social.facebook,
    //   linkedin: loading || !propf.social ? "" : propf.social.linkedin,
    //   youtube: loading || !propf.social ? "" : propf.social.youtube,
    //   instagram: loading || !propf.social ? "" : propf.social.instagram,
    // });
  }, [loading]);
  console.log(propf);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="mt-10 px-10"
          initialValues={propf}
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
                onChange={handleChange}
                defaultValue={propf.status ? propf.status : status}
                placeholder="Select a Status"
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
            <Form.Item
              name="twitter"
              initialValue={propf.social.twitter ? propf.social.twitter : ""}
              label="Twitter"
            >
              <Input placeholder="Twitter" />
            </Form.Item>
            <Form.Item
              name="facebook"
              label="Facebook"
              initialValue={propf.social.facebook ? propf.social.facebook : ""}
            >
              <Input placeholder="Facebook" />
            </Form.Item>
            <Form.Item
              name="linkedin"
              label="Linkedin"
              initialValue={propf.social.linkedin ? propf.social.linkedin : ""}
            >
              <Input placeholder="Linkedin" />
            </Form.Item>
            <Form.Item
              name="youtube"
              label="Youtube"
              initialValue={propf.social.youtube ? propf.social.youtube : ""}
            >
              <Input placeholder="Youtube" />
            </Form.Item>
            <Form.Item
              name="instagram"
              label="Instagram"
              initialValue={
                propf.social.instagram ? propf.social.instagram : ""
              }
            >
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
      )}
    </Layout>
  );
};
const mapStateToProps = (state: any) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  EditProfile
);
