import React from 'react';
import { useState } from 'react';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';
import clsx from 'clsx';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { Grid } from '@/components/helpers/Grid/Grid';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

type tabProps = Feature.Mulyankan.TaazaKhabar.ContentType.Tabs.TabListing;

const TabsListing = ({ fields }: tabProps): JSX.Element => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <>
      <Grid variant="lg">
        <div className="col-span-12 mt-5 ml-3">
          <Text tag="h1" field={{ value: fields?.title?.value }} className="font-semibold "></Text>
        </div>
        <div className="col-span-12">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              {fields?.tabsData.map((tabs, index) => (
                <li className="mr-2" key={index}>
                  <a
                    onClick={() => setSelectedTabIndex(index)}
                    href="#"
                    className={clsx(
                      'inline-block p-4',
                      index === selectedTabIndex &&
                        'text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500'
                    )}
                  >
                    {tabs.fields?.tabTitle.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12">
          <div
            className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <RichText
              className="text-justify"
              field={{ value: fields?.tabsData[selectedTabIndex].fields?.tabData?.value }}
            ></RichText>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default TabsListing;
