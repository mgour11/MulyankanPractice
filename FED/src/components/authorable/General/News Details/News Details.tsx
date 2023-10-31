import React from 'react';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type NewsDetailType = Feature.Mulyankan.TaazaKhabar.Common.Base.content;

const NewsDetails = ({ fields }: NewsDetailType) => {
  console.log('RTE', fields);
  return (
    <div>
      <RichText field={fields?.content} editable tag="content"></RichText>
    </div>
  );
};

export default NewsDetails;
