import { NextImage, Text, Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';
import { Grid } from '@/components/helpers/Grid/Grid';
type BannerProps = Feature.Mulyankan.TaazaKhabar.ContentType.Banner.Banner;
const Banner = ({ fields }: BannerProps): JSX.Element => {
  console.log(fields);
  return (
    <>
      <Grid variant="lg">
        <div className="p-10 col-span-12 h-full">
          <div className="relative h-[450px]">
            <NextImage className="rounded-xl" editable field={fields?.image} alt="Image" fill />
            <div className="px-10 pb-10 absolute bottom-0 left-0 right-0 py-2">
              {/* <h3 className="pb-4 font-sans text-3xl font-bold leading-10 tracking-wider text-white">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h3> */}
              <Text
                field={fields?.title}
                tag="h3"
                editable
                className="pb-4 font-sans text-3xl font-bold leading-10 tracking-wider text-white"
              ></Text>
              <Link
                field={fields?.navigationLink.value as unknown as LinkField}
                className="relative rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
              >
                {fields?.navigationTitle?.value}
              </Link>
              {/* <a className="relative rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400">
              Button
            </a> */}
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Banner;
