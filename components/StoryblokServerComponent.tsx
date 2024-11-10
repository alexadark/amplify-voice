import { storyblokInit, getStoryblokApi } from '@storyblok/react/rsc';
import { components } from '@/lib/storyblok';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  components,
});

export function StoryblokServerComponent({ blok }: { blok: any }) {
  const Component = components[blok.component as keyof typeof components];

  if (!Component) {
    return <div>Component {blok.component} not found</div>;
  }

  return <Component blok={blok} />;
}
