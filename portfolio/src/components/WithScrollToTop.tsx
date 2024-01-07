import React, { useEffect } from 'react';

const withScrollToTop = (WrappedComponent) => {
  const WithScrollToTop = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithScrollToTop;
};

export default withScrollToTop;
