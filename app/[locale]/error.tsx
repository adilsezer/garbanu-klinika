"use client";
import React from "react";

interface ErrorProps {
  errorMessage: string;
}

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <section>
      <h2>An Error Occurred</h2>
      <p>{errorMessage}</p>
    </section>
  );
};

export default Error;
