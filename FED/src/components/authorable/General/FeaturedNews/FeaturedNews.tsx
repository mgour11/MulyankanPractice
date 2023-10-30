import { Grid } from '@/components/helpers/Grid/Grid';
import React from 'react';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

type featuredNews = Feature.Mulyankan.TaazaKhabar.ContentType.FeaturedNews.FeatureNews;
type newDetailsPage = Feature.Mulyankan.TaazaKhabar.PageTypes.NewsDetail.NewsDetailPage;

type FeaturedNewsProps = featuredNews & {
  fields?: {
    news?: Array<
      newDetailsPage & {
        fields?: {
          relatedNewsList?: newDetailsPage[];
        };
      }
    >;
  };
};

const FeaturedNews = ({ fields }: FeaturedNewsProps) => {
  console.log('fields', fields);
  if (fields === null || fields === undefined) return <></>;
  console.log('relatedNewsList', fields.news[0].fields.relatedNewsList[0]);
  return (
    <Grid variant="lg">
      {fields.news
        .map((newsItem, index) => {
          return (
            <>
              {newsItem.fields.relatedNewsList.map((relatedItem: newDetailsPage, index1) => {
                console.log('relatedItem', relatedItem);
                return (
                  <div className="col-span-12 md:col-span-4 gap-1 hover:translate-y-2" key={index1}>
                    <div className="border-2 p-4 rounded-lg h-full">
                      <div className="mb-6 relative h-[240px]">
                        <NextImage field={relatedItem?.fields?.image} fill />
                      </div>
                      <div>
                        {relatedItem?.fields?.tags?.length > 0 &&
                          relatedItem?.fields?.tags?.map((item, index2) => {
                            return (
                              <p
                                className="rounded-lg p-1 text-blue-400 font-serif text-sm bg-slate-100 inline-block mr-1"
                                key={index2}
                              >
                                {item?.tag?.value}
                              </p>
                            );
                          })}
                        {/* <Link href={relatedItem?.fields?.url?.path}>
                          <p className="mt-4 font-bold text-lg md:text-xl hover:opacity-30">
                            {relatedItem?.fields?.subtitle?.value}
                          </p>
                        </Link> */}
                      </div>
                      <div className="mt-3">
                        <p className="text-gray-400">
                          {/* August 20, 2022 */}
                          {console.log(newsItem)}
                          {relatedItem?.fields?.createdAt?.value}
                        </p>
                        <p>By {relatedItem?.fields?.authorName?.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          );
        })
        .slice(0, 5)}
    </Grid>
  );
};

export default FeaturedNews;
