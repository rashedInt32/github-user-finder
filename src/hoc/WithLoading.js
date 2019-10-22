import React from 'react';
import Loader from '../components/Loader';

/**
 * WithLoading HOC
 * @desc writing ternary operator inside jsx return value
 * looks meesy, thats why creates a hoc for that.
 */
const WithLoading = ({loading, children}) => {
  if (loading) return <Loader />;
  return <>{children}</>;
}

export default WithLoading;
