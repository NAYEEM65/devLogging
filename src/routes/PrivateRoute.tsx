import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
type Props = {
  children?: any;
  auth: { isAuthenticated: boolean; loading: boolean };
};
const PrivateRoute: React.FC<Props> = ({
  children,
  auth: { isAuthenticated, loading },
}) => {
  if (!isAuthenticated && !loading) {
    return <Navigate to="/signin" />;
  }
  return children;
};
const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
