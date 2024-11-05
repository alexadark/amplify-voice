import { storyblokEditable } from '@storyblok/react/rsc';
import { TeaserStoryblok } from '@/types/component-types-sb';

const Teaser = ({ blok }: { blok: TeaserStoryblok }) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
