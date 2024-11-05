import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { GridStoryblok } from '@/types/component-types-sb';
const Grid = ({ blok }: { blok: GridStoryblok }) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok?.columns?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
