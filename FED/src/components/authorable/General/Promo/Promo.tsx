import React from 'react';

const Promo = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1699228800&Signature=gWmh3WxrjJ1pP1W334M7H528H9Lb1goDp1uwYVxwH0VFpe3dig4BcJKWJptsfXqUl8MxJMJ8ilhaoslWvk5Y-UAqbHGA7tZtrWm2F9eB8lVLM1H0uvF3sytxdq4Koj72TkQrS3JlFWbNIvjnJyme37q2tVNYFHD6T0auxJLWmb3y3Di6i9ymN~-FhWC0pqt3vB~8sVPhEseym7MK3pI8fgAztv2GGQ9L3CHDHnzGeteqq4uQEypqrhDYmWpEzGeF5fPiFonyqST-HWmhEDmH6w9GBb8sIvkhs-Gv1RujbkZHKF0NOyq~xrwuP2AOSWQiUldnsA7NEWSmLCEn8JIaxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="font-normal text-xl text-gray-900">
            An advanced online playground for Tailwind CSS, including support for things likeAn
            advanced online playground for Tailwind CSS, including support for things likeAn
            advanced online playground for Tailwind CSS, including support for things likeAn
            advanced online playground for Tailwind CSS, including support for things likeAn
            advanced online playground for Tailwind CSS, including support for things like
          </p>
          <div>
            <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">
              Read the docs &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
