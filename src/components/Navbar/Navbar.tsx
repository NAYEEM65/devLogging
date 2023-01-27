import { Drawer } from "antd";
import { Link } from "react-router-dom";
import React, { FC, ReactElement, useState } from "react";
import LeftMenu from "./LeftMenu";

const Navbar: FC = (): ReactElement => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <nav className="px-5 py-3 bg-slate-700 overflow-auto  flex justify-between items-center shadow-lg">
      <div className="logo">
        <Link to="/" className="text-slate-100">
          DevLogging
        </Link>
      </div>
      <div className="flex justify-around items-center gap-4">
        <div className="hidden md:flex justify-center items-center gap-4">
          <div className="leftMenu">
            <LeftMenu />
          </div>
        </div>
        <div className="md:hidden block">
          <span onClick={showDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>

        <Drawer
          title="Devlogging"
          placement="left"
          closable={true}
          onClose={onClose}
          open={visible}
        >
          <div className="">
            <LeftMenu />
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
