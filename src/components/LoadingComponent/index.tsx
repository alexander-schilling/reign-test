import React, { FunctionComponent } from 'react';

import './styles/LoadingStyle.css';

/** Source: https://loading.io/css/ */
const LoadingComponent: FunctionComponent = () => {
  return (
    <div className="content-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export { LoadingComponent };
