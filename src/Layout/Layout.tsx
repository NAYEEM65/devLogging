import { FC, ReactElement, ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
type Props = { children: ReactNode };
const Layout: FC<Props> = ({ children }): ReactElement => {
  return (
    <>
      <Navbar />
      <div className="min-h-[83vh]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
