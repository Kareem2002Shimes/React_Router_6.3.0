import React from "react";
import { useNavigate } from "react-router-dom";

export const NextPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Next Page</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};
