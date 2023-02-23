import { FC, ReactElement, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { connect } from "react-redux";
import {
  FaUserAlt,
  FaTrash,
  FaEdit,
  FaBlackTie,
  FaGraduationCap,
} from "react-icons/fa";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { Button } from "antd";
import Experience from "./Experience";

interface IDashboard {
  getCurrentProfile: Function;
  deleteAccount: any;
  auth: { user: any };
  profile: { profile: any; loading: Boolean };
  experience: Object;
}

const Dashboard: FC<IDashboard> = (props): ReactElement => {
  const {
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading },
  } = props;
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <Layout>
      {loading && profile === null ? (
        <Loader />
      ) : (
        <section className="max-w-[1100px] m-auto overflow-hidden px-8 mt-24 mb-12">
          <h1 className="text-4xl mb-4">Dashboard</h1>
          <div className="text-3xl mb-4 flex justify-start gap-4">
            <FaUserAlt />
            <p>Welcome {user && user.name}</p>
          </div>
          {profile !== null ? (
            <>
              <div className="flex justify-start items-center gpa-4">
                <Link to="/edit-profile" className="px-5">
                  <Button
                    className="flex justify-start items-center gap-1"
                    type="dashed"
                  >
                    <FaEdit /> <span>Edit Profile</span>
                  </Button>
                </Link>
                <Link to="/experience" className="px-5">
                  <Button
                    className="flex justify-start items-center gap-1"
                    type="dashed"
                  >
                    <FaBlackTie /> <span>Add Experience</span>
                  </Button>
                </Link>
                <Link to="/add-education" className="px-5">
                  <Button
                    className="flex justify-start items-center gap-1"
                    type="dashed"
                  >
                    <FaGraduationCap /> <span>Add Education</span>
                  </Button>
                </Link>
              </div>
              <Experience experience={profile.experience} />
              {/* <Education education={profile.education} /> */}

              <div className="my-4 px-5">
                <Button
                  danger
                  className="px-5 flex justify-center items-center gap-2"
                  onClick={() => deleteAccount()}
                >
                  <FaTrash /> <span>Delete My Account</span>
                </Button>
              </div>
            </>
          ) : (
            <>
              <p>You have not yet create a profile, please add some info</p>
              <Link to="/create-profile" className="my-1 px-5">
                <Button type="primary" className="bg-blue-500">
                  {" "}
                  Create Profile
                </Button>
              </Link>
            </>
          )}
        </section>
      )}
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
