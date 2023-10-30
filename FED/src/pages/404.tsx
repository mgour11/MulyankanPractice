import FallbackNotFound from 'src/components/layout/NotFound';
import { ComponentPropsContext, SitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { GetStaticProps, NextPage } from 'next';
import { componentFactory } from 'temp/componentFactory';
import PageLayout from '@/components/layout/PageLayout';

/**
 * Rendered for 404 errors on both server and client. Used only in Production mode.
 * @link https://nextjs.org/docs/pages/building-your-application/routing/custom-error#404-page
 */
const NotFoundPage: NextPage<SitecorePageProps> = ({ componentProps, layoutData }) => {
  console.log('page not found', componentProps, layoutData);
  // If we don't have "_404" page defined in Sitecore
  if (!layoutData?.sitecore?.route) {
    return <FallbackNotFound />;
  }

  return (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext componentFactory={componentFactory} layoutData={layoutData}>
        <PageLayout layoutData={layoutData} />
      </SitecoreContext>
    </ComponentPropsContext>
  );
};

/** 404 page works different from _error and getStaticProps works just fine */
export const getStaticProps: GetStaticProps = async () => {
  // We can call layout service directly here unlike in _error since this only runs on the server
  const props = await sitecorePagePropsFactory.create({
    params: {
      path: ['_404'],
    },
  });

  return { props };
};

export default NotFoundPage;
