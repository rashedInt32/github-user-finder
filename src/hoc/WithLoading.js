import React from 'react';
import Loader from '../components/Loader';

const WithLoading = ({loading, children}) => {
  if (loading) return <Loader />;
  return <>{children}</>;
}

export default WithLoading;
