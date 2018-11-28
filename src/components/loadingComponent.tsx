import React  from 'react';

interface IProps {
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
}

const MyLoadingComponent = ({isLoading, error}: IProps) => {
  // Handle the loading state
  if (isLoading) {
    return <div style={{ color: '#ffffff' }}>Loading...</div>;
  } else if (error) {
    return <div style={{ color: '#ffffff' }}>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

export default MyLoadingComponent;
