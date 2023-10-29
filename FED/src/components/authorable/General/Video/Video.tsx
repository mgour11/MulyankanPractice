import { Grid } from '@/components/helpers/Grid/Grid';
import { Feature } from '.generated/templates/Feature.Mulyankan.types';

type VideoProps = Feature.Mulyankan.TaazaKhabar.ContentType.Video.Video;

const Video = ({ fields }: VideoProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  return (
    <Grid variant="lg">
      <iframe
        className="col-span-12 min-h-max min-w-full md:aspect-video aspect-square"
        src={fields?.videoURL?.value}
        title={fields?.videoTitle?.value}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </Grid>
  );
};
export default Video;
