import { ContentBlockProps } from './ContentBlock';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentBlockProps = {
  rendering: { componentName: 'ContentBlock' },
  params: {},
  fields: {
    title: {
      value: 'Main Content Block',
    },
    body: {
      value: 'This is content block component',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
