import React, { useEffect } from 'react';

const WithScrollToTop = (WrappedComponent) => {
  const WithScrollToTop = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithScrollToTop;
};

export default WithScrollToTop;
