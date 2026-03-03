import React, { useEffect } from 'react';

const WithScrollToTop = (WrappedComponent: React.ComponentType<any>) => {
  const WithScrollToTop = (props: any) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithScrollToTop;
};

export default WithScrollToTop;
