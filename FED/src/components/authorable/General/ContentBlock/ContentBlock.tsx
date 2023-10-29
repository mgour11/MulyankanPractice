// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Grid } from '@/components/helpers/Grid/Grid';
import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  title: Field<string>;
  body: RichTextField;
}

export type ContentBlockProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  return (
    <Grid variant="lg">
      {/* <p className="font-bold">{fields.Title.value}</p>
      <RichTextA11yWrapper data-testid="contentblock" field={fields.Body} editable /> */}
    </Grid>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default ContentBlock;
