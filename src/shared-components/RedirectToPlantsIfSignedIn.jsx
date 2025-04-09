import { useContext, useEffect } from "react";
import SessionContext from "contexts/sessionContext";
import { useNavigate } from "react-router-dom";

const RedirectToPlantsIfSignedIn = props => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      navigate("/plants");
    }
  }, [username, navigate]);

  return props.children;
};

export default RedirectToPlantsIfSignedIn;
