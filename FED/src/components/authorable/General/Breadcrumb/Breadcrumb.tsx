import { Grid } from '@/components/helpers/Grid/Grid';
import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface BreadcrumbItem {
  PageTitle: Field<string>;
  url: {
    path: LinkField;
  };
}
export interface BreadcrumbProps {
  fields?: {
    data: {
      item: {
        ancestors: BreadcrumbItem[];
      };
    };
  };
}

const Breadcrumb = ({ fields }: BreadcrumbProps): JSX.Element => {
  // Fail out if we don't have any fields
  // Fail out if fields aren't present
  console.log('fields', fields);
  if (fields === null || fields === undefined) return <></>;
  return (
    <Grid variant="lg">
      <nav className="w-full rounded-md bg-neutral-100 px-5 py-3 dark:bg-neutral-600">
        <ol className="list-reset flex">
          {fields?.data?.item?.ancestors
            .map((item, index) => {
              return (
                <>
                  <li key={index}>
                    <Link key={index} href={`/${item?.url?.path}`}>
                      {item.PageTitle.value}
                    </Link>
                  </li>
                  <li key={index}>
                    <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
                  </li>
                </>
              );
            })
            .slice()
            .reverse()}
        </ol>
      </nav>
    </Grid>
  );
};
export default Breadcrumb;
