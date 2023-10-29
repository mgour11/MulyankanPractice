import { Grid } from '@/components/helpers/Grid/Grid';
import Image from 'next/image';
import Slider from 'react-slick';
import React from 'react';
import Link from 'next/link';
import FontAwesomeIcon from '@/components/helpers/FontAwesomeIcon/FontAwesomeIcon';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: () => <p></p>,
    // prevArrow: <FontAwesomeIcon icon={'arrow-alt-circle-right'} />,
  };
  return (
    <Grid variant="lg">
      <div className="w-full my-10 col-span-2 md:col-span-12">
        <Slider {...settings}>
          <div className="relative h-[400px]">
            <Image
              className="rounded-lg"
              src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
              alt="banner image"
              fill
            ></Image>
            <div className="absolute top-[180px] p-4">
              <h3 className="text-white font-bold text-2xl font-serif">This is Title</h3>
              <p className="mb-4 font-serif">
                The Impact of Technology on the Workplace: How Technology is Changing
              </p>
              <Link
                href="#"
                className="bg-blue-300 p-2 rounded-md hover:text-black hover:bg-blue-400 transition-all font-serif"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              className="rounded-lg"
              src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
              alt="banner image"
              fill
            ></Image>
            <div className="absolute top-[180px] p-4">
              <h3 className="text-white font-bold text-2xl font-serif">This is Title 2</h3>
              <p className="mb-4 font-serif">
                The Impact of Technology on the Workplace: How Technology is Changing 2
              </p>
              <Link
                href="#"
                className="bg-blue-300 p-2 rounded-md hover:text-black hover:bg-blue-400 transition-all font-serif"
              >
                Read More
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </Grid>
  );
};

export default Carousel;
