import { Grid } from '@/components/helpers/Grid/Grid';
import Image from 'next/image';
import Slider from 'react-slick';
import React from 'react';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';
import Link from 'next/link';
import { NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';

type CarouselProps = Feature.Mulyankan.TaazaKhabar.ContentType.Carousel.Carousel;

const Carousel = ({ fields }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Grid variant="lg">
      <div className="w-full my-10 col-span-2 md:col-span-12">
        <Slider {...settings}>
          {fields?.slides?.map(
            (slide: Feature.Mulyankan.TaazaKhabar.PageTypes.NewsDetail.NewsDetailPage, index) => {
              return (
                <div className="relative h-[400px]" key={index}>
                  <NextImage
                    field={slide?.fields?.image}
                    alt={slide?.fields?.title}
                    fill
                    className="rounded-xl"
                  />
                  <div className="absolute top-[180px] p-4">
                    <div className="mb-4">
                      <Text
                        field={slide?.fields?.title}
                        className="text-white font-bold text-2xl font-serif"
                        tag="h3"
                      ></Text>
                      <Text field={slide?.fields?.title} className="font-serif" tag="p"></Text>
                      <Text field={slide?.fields?.authorName}></Text>
                    </div>
                    <Link
                      href={slide?.url}
                      className="bg-blue-300 p-2 rounded-md hover:text-black hover:bg-blue-400 transition-all font-serif"
                    >
                      {slide?.fields?.readMoreLabel.value}
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </Slider>
      </div>
    </Grid>
  );
};

export default Carousel;
