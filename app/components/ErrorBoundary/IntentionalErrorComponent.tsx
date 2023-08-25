// IntentionalErrorComponent.tsx
import React from "react";

const IntentionalErrorComponent: React.FC = () => {
  throw new Error("This is an intentional error for testing purposes.");
  return <div>Should not reach here</div>;
};

export default IntentionalErrorComponent;
