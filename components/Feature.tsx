import { storyblokEditable } from '@storyblok/react/rsc';
import { FeatureStoryblok } from '../types/component-types-sb';

const Feature = ({ blok }: { blok: FeatureStoryblok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
