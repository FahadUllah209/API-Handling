import React from "react";

const ErrorMessage = ({ message }) => (
  <p className="error" style={{ color: "red" }}>
    Error: {message}
  </p>
);

export default ErrorMessage;