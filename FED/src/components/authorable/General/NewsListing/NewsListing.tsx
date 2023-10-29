import React, { useState } from 'react';
import { Grid } from '@/components/helpers/Grid/Grid';
import Link from 'next/link';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

type Newstype = Feature.Mulyankan.TaazaKhabar.PageTypes.NewsDetail.NewsDetailPage['fields'];

type NewsListingProps = {
  fields: {
    data: {
      item: {
        children: {
          fields: Newstype[];
        };
      };
    };
  };
};

const newslisting = ({ fields }: NewsListingProps) => {
  const newsList = fields.data.item.children.fields;
  const [loadData, setLoadData] = useState(6);

  const HandleLoadData = () => {
    setLoadData(loadData + 3);
  };

  return (
    <Grid variant="lg">
      {/* CARD */}
      {newsList
        .map((newsItem, index) => {
          return (
            <div className="col-span-12 md:col-span-4 gap-1 hover:translate-y-2" key={index}>
              <div className="border-2 p-4 rounded-lg h-full">
                <div className="mb-6 relative h-[240px]">
                  <NextImage field={newsItem?.image} alt={newsItem?.image?.alt} fill />
                </div>
                <div>
                  {newsItem?.tags?.tags.length > 0 &&
                    newsItem?.tags?.tags?.map((tag, index) => {
                      return (
                        <p
                          className="rounded-lg p-1 text-blue-400 font-serif text-sm bg-slate-100 inline-block mr-1"
                          key={index}
                        >
                          {tag?.tag?.value}
                        </p>
                      );
                    })}
                  <Link href={newsItem.url?.path}>
                    <p className="mt-4 font-bold text-lg md:text-xl hover:opacity-30">
                      {/* The Impact of Technology on the Workplace: How Technology is Changing */}
                      {newsItem?.subtitle?.value}
                    </p>
                  </Link>
                </div>
                <div className="mt-3">
                  <p className="text-gray-400">
                    {/* August 20, 2022 */}
                    {console.log(newsItem)}
                    {newsItem?.createdAt?.FormattedData}
                  </p>
                  <p>By {newsItem?.authorname?.value}</p>
                </div>
              </div>
            </div>
          );
        })
        .slice(0, loadData)}
      <div className="col-span-12 mx-auto">
        {newsList.length > 6 ? (
          <div className="text-center mt-5">
            <button
              className="md:py-3 md:px-5 border border-gray-600 md:text-lg font-serif py-2 px-3 text-sm hover:bg-blue-200 hover:text-black"
              onClick={() => HandleLoadData()}
            >
              Load More
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Grid>
  );
};

export default newslisting;
