import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Footer: FC = (): ReactElement => {
  return (
    <footer className="text-center text-sm border-t border-slate-300 py-4">
      <p>
        &copy; 2023 All Right Reserved | <Link to="/">Nayeem</Link>
      </p>
    </footer>
  );
};

export default Footer;
