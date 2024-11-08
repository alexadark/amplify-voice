import { StoryblokStory } from '@storyblok/react/rsc';
import { fetchData } from '@/lib/actions';

export default async function Home() {
  const { data } = (await fetchData('home')) || {};

  return (
    <div>
      <StoryblokStory story={data?.story} />
    </div>
  );
}
