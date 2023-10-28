import React from 'react';
import { Grid } from '@/components/helpers/Grid/Grid';
import Image from 'next/image';
import Link from 'next/link';

const newslisting = () => {
  return (
    <Grid variant="lg">
      {/* CARD */}
      <div className="col-span-2 md:col-span-4 gap-1">
        <div className="border-2 p-4 rounded-lg h-full">
          <div className="mb-6 relative h-[240px]">
            {/* <NextImage src="https://picsum.photos/seed/picsum/200/300"></NextImage> */}
            <Image
              src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
              alt="news image"
              className="rounded-lg"
              fill
            />
          </div>
          <div>
            <p className="rounded-lg p-1 text-blue-400 font-serif text-sm bg-slate-100 inline-block">
              Technology
            </p>
            <Link href={'#'}>
              <p className="mt-4 font-bold text-lg md:text-xl">
                The Impact of Technology on the Workplace: How Technology is Changing
              </p>
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-gray-400">August 20, 2022</p>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="col-span-2 md:col-span-4 gap-1">
        <div className="border-2 p-4 rounded-lg h-full">
          <div className="mb-6 relative h-[240px]">
            {/* <NextImage src="https://picsum.photos/seed/picsum/200/300"></NextImage> */}
            <Image
              src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
              alt="news image"
              className="rounded-lg"
              fill
            />
          </div>
          <div>
            <p className="rounded-lg p-1 text-blue-400 font-serif text-sm bg-slate-100 inline-block">
              Technology
            </p>
            <Link href={'#'}>
              <p className="mt-4 font-bold text-xl">
                The Impact of Technology on the Workplace: How Technology is Changing
              </p>
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-gray-400">August 20, 2022</p>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="col-span-2 md:col-span-4 gap-1">
        <div className="border-2 p-4 rounded-lg h-full">
          <div className="mb-6 relative h-[240px]">
            {/* <NextImage src="https://picsum.photos/seed/picsum/200/300"></NextImage> */}
            <Image
              src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
              alt="news image"
              className="rounded-lg"
              fill
            />
          </div>
          <div>
            <p className="rounded-lg p-1 text-blue-400 font-serif text-sm bg-slate-100 inline-block">
              Technology
            </p>
            <Link href={'#'}>
              <p className="mt-4 font-bold text-xl">
                The Impact of Technology on the Workplace: How Technology is Changing
              </p>
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-gray-400">August 20, 2022</p>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="col-span-2 md:col-span-4 gap-1">
        <div className="border-2 p-4 rounded-lg h-full">
          <div className="mb-6 relative h-[240px]">
            {/* <NextImage src="https://picsum.photos/seed/picsum/200/300"></NextImage> */}
            <Image
              src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
              alt="news image"
              className="rounded-lg"
              fill
            />
          </div>
          <div>
            <p className="rounded-lg p-1 text-blue-400 font-serif text-sm bg-slate-100 inline-block">
              Technology
            </p>
            <Link href={'#'}>
              <p className="mt-4 font-bold text-xl">
                The Impact of Technology on the Workplace: How Technology is Changing
              </p>
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-gray-400">August 20, 2022</p>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default newslisting;
