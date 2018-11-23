import React from 'react';
import ReactLoading from 'react-loading';

export default () => (
  <div className="loader">
    <ReactLoading
      type={'spinningBubbles'}
      color={'#729FAD'}
      height={'3%'}
      width={'3%'}
    />
  </div>
);
