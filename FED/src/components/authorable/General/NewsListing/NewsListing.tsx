import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { image1 } from '../NewsListing/mock-images/newslisting1.png';
import React from 'react';

const newslisting = () => {
  return (
    <div>
      <div>
        Hello
        <NextImage src={image1}></NextImage>
      </div>
    </div>
  );
};

export default newslisting;
