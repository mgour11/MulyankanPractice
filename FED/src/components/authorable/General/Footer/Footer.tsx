import { Grid } from '@/components/helpers/Grid/Grid';
import React from 'react';
import { Feature } from '../../../../../.generated/templates/Feature.Mulyankan.types';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichText } from '@sitecore-jss/sitecore-jss-react';
import Link from 'next/link';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

type FooterProps = Feature.Mulyankan.TaazaKhabar.Navigations.Footer;

const Footer = ({ fields }: FooterProps): JSX.Element => {
  return (
    <>
      <Grid variant="lg" sectionWrapperClasses="bg-gray-200 py-10">
        <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
          <Text tag="h1" field={{ value: fields?.title?.value }} className="mb-5 font-bold" />
          <RichText
            field={{ value: fields?.content.value }}
            className="text-justify mx-4 md:mx-0"
          ></RichText>

          <div className="flex items-center justify-center lg:justify-start">
            <Text
              tag="p"
              field={{ value: fields?.emailLabel.value }}
              className="font-bold mt-9 "
            ></Text>
            <Text tag="p" field={{ value: fields?.emailValue.value }} className="ml-4 mt-9"></Text>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <Text tag="p" field={{ value: fields?.phoneLabel.value }} className="font-bold"></Text>

            <Text tag="p" field={{ value: fields?.phoneValue.value }} className="ml-4"></Text>
          </div>
        </div>
        <div className="col-span-12 text-center lg:col-span-3 ">
          <Text
            tag="p"
            field={{ value: fields?.quickLinkslabel.value }}
            className="font-bold mb-5"
          ></Text>

          <ul>
            {fields?.quickLinks.map((quicklink, index) => (
              <li key={index}>
                <Link
                  className="mr-4 font-sans "
                  key={index}
                  href={quicklink.fields.linkUrl.value.href}
                >
                  {quicklink?.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-3 text-center">
          <Text
            tag="p"
            field={{ value: fields?.categoryLinksLabel.value }}
            className="font-bold mb-5"
          ></Text>

          <ul>
            {fields?.categoryLinks.map((catlink, index) => (
              <li key={index}>
                <Link
                  className="mr-4 font-sans text-justify"
                  key={index}
                  href={catlink.fields?.linkUrl.value.href}
                >
                  {catlink?.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 border-b-2 border-gray-100"></div>

        <div className="col-span-12 lg:col-span-6">
          <NextImage
            className="h-8 w-14 mx-auto xl:mx-0 "
            editable
            field={fields?.footerLogo}
          ></NextImage>
          <Text
            tag="p"
            field={{ value: fields?.copyrightText.value }}
            className="text-center lg:text-left mt-2"
          ></Text>
        </div>
        <div className="col-span-12 lg:col-span-6 text-center">
          <ul className="flex">
            {fields?.policyLinks.map((plink, index) => (
              <li className="p-3 border-r-indigo-500 last:border-r-0" key={index}>
                <Link className="inline-block" key={index} href={plink.fields?.linkUrl.value.href}>
                  {plink?.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </>
  );
};

export default Footer;
