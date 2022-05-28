import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>Name:{user.displayName}</h1>
    </div>
  );
};

export default MyProfile;
