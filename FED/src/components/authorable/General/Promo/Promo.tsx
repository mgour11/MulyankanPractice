import React from 'react';
import { NextImage, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { Grid } from '@/components/helpers/Grid/Grid';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';
import Link from 'next/link';

type PromoProps = Feature.Mulyankan.TaazaKhabar.ContentType.Promo.Promo;

const Promo = ({ fields }: PromoProps): JSX.Element => {
  console.log(fields);
  return (
    <>
      <Grid variant="lg">
        <div className="inset-y-0 col-span-6 h-full">
          <div className="rounded-xl relative h-[240px]">
            <NextImage editable field={fields?.image} alt="Image" fill />
          </div>
        </div>
        <div className="col-span-6 justify-between p-4 leading-normal">
          {/* <Text field={{ value: fields?.title.value }} tag="title" editable className="" /> */}
          <p>{fields?.title.value}</p>
          <RichText
            field={fields?.content}
            tag="section"
            editable
            className="pb-6 font-normal text-xl text-gray-900"
          />
          <div>
            <Link
              href={fields?.navigationLink.value.href || '/'}
              className="text-sky-500 hover:text-sky-600"
            >
              {fields?.navigationTitle?.value}
            </Link>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Promo;
