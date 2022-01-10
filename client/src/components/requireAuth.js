import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const requireAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const { authenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const shouldNavigateAway = () => {
      if (!authenticated) {
        navigate("/");
      }
    };
    useEffect(() => {
      shouldNavigateAway();
    }, []);
    return <ChildComponent {...props} />;
  };
  return ComposedComponent;
};
export default requireAuth;
