import { Grid } from '@/components/helpers/Grid/Grid';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { RxCross2 } from 'react-icons/rx';
import React, { useState } from 'react';

import Link from 'next/link';

//import { Feature } from '../../../../.generated/templates/Feature.Mulyankan.types.ts';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';

type HeaderProps = Feature.Mulyankan.TaazaKhabar.Navigations.Header;
const Header = ({ fields }: HeaderProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //console.log(fields);
  return (
    <div className="bg-gray-150 ">
      <Grid variant="lg">
        <div className="logo md:col-span-4 relative h-[50]">
          <Link href={fields?.logoLink?.value} passHref>
            <NextImage className="h-8 w-14" editable field={fields?.logo}></NextImage>
          </Link>
        </div>
        <div className="md:col-span-8 ml-auto">
          <div className="block md:hidden h-5 w-5">
            <button className="hamburger-icon text-black text-4xl" onClick={handleMenuClick}>
              {isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col text-center md:flex-row md:space-x-4 ml-auto">
              {fields?.navLinks.map((navLink, index) => (
                <li
                  key={index}
                  className="py-2 border-t-white border-t-2 border-opacity-30 md:border-none"
                >
                  <Link
                    key={index}
                    href={navLink?.url}
                    className="hover:no-underline text-black mr-4 font-sans"
                  >
                    {navLink?.fields?.NavigationTitle?.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Header;
