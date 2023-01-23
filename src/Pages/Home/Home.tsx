import React, { FC } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "antd";
const Home: FC = () => {
  return (
    <Layout>
      <section className="relative bg-[url('https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center h-[100vh]">
        <div className="absolute bg-black/70 top-0 left-0 w-full h-full">
          <div className="text-white h-full w-[80%] mx-auto flex flex-col items-center justify-center text-center gap-2">
            <h1 className="x-large">Developer Blogging</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="flex justify-center gap-5">
              <Button type="primary" className="bg-blue-500">
                <Link to="/signup">Sign Up</Link>
              </Button>

              <Link to="/signin" className="btn btn-light">
                <Button type="dashed" className="text-white">
                  {" "}
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
