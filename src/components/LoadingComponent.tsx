import React from "react";

const LoadingComponent: ({
  isLoading,
  error
}: {
  isLoading: boolean | null;
  error: Error | null;
}) => JSX.Element | null = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

export { LoadingComponent };
