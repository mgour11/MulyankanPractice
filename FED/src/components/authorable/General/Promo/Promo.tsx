import React from 'react';
import NextImage from 'next/image';
import { Grid } from '@/components/helpers/Grid/Grid';

const Promo = ({ fields }: any) => {
  console.log(fields);
  return (
    <>
      <Grid variant="lg">
        <div className="inset-y-0 col-span-6 h-full">
          <div className="rounded-xl relative h-[240px]">
            <NextImage
              src="https://fastly.picsum.photos/id/496/200/300.jpg?hmac=demLRv0UMwDhQHH6AEmbkJqlYuX27lnRH5N9FYcHBgw"
              alt="Image"
              fill
            />
          </div>
        </div>
        <div className="col-span-6 justify-between p-4 leading-normal">
          <p className="pb-6 font-normal text-xl text-gray-900">paragraph</p>
          <div>
            <a href="www.google.com" className="text-sky-500 hover:text-sky-600">
              Read More
            </a>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Promo;
