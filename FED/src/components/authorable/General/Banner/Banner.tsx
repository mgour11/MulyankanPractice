import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

const Banner = () => {
  return (
    <>
      <body className="p-10">
        <div className="relative">
          <NextImage
            className="rounded-xl"
            src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg"
          />
          <div className="px-10 pb-10 absolute bottom-0 left-0 right-0 py-2">
            <h3 className="pb-4 font-sans text-3xl font-bold leading-10 tracking-wider text-white">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h3>
            <a className="relative rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400">
              Button
            </a>
          </div>
        </div>
      </body>
    </>
  );
};

export default Banner;
