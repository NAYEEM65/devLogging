import React, { FC, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { connect } from "react-redux";

import { getCurrentProfile } from "../../actions/profile";

interface IDashboard {
  getCurrentProfile: Function;
  deleteAccount: any;
  auth: { user: any };
  profile: { profile: any };
}

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
}: IDashboard) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return <Layout>hello</Layout>;
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
