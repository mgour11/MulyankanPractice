import React from 'react';
import NextImage from 'next/image';
import { Grid } from '@/components/helpers/Grid/Grid';
const Promo = () => {
  return (
    <>
      <Grid variant="lg">
        <div className="inset-y-0 col-span-6 h-full">
          <div className="rounded-xl relative h-[240px]">
            <NextImage src="https://picsum.photos/200/300" alt="Image" fill />
          </div>
        </div>
        <div className="col-span-6 justify-between p-4 leading-normal">
          <p className="pb-6 font-normal text-xl text-gray-900">
            An advanced online playground for Tailwind CSS, including support for things likeAn
            advanced online playground for Tailwind CSS, including support for things likeAn
            advanced online playground for Tailwind CSS, including support for things likeAn
          </p>
          <div>
            <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">
              Read the docs &rarr;
            </a>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Promo;
