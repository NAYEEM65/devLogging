import React, { FC, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { connect } from "react-redux";

import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";

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
  return (
    <Layout>
      <section className="max-w-[1100px] m-auto overflow-hidden px-8 mt-24 mb-12">
        <h1 className="text-4xl mb-4">Dashboard</h1>
        <p className="text-3xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <>
            <div className="dash-buttons">
              <Link to="/edit-profile" className="btn btn-light">
                <i className="fas fa-user-circle text-primary" /> Edit Profile
              </Link>
              <Link to="/add-experience" className="btn btn-light">
                <i className="fab fa-black-tie text-primary" /> Add Experience
              </Link>
              <Link to="/add-education" className="btn btn-light">
                <i className="fas fa-graduation-cap text-primary" /> Add
                Education
              </Link>
            </div>
            {/* <Experience experience={profile.experience} />
          <Education education={profile.education} /> */}

            <div className="my-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus" /> Delete My Account
              </button>
            </div>
          </>
        ) : (
          <>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </>
        )}
      </section>
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
