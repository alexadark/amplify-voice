'use server';

import { ISbStoriesParams, StoryblokClient } from '@storyblok/react/rsc';
import { getStoryblokApi } from './storyblok';

export async function fetchData(
  slug: string,
  version: 'draft' | 'published' = 'published'
) {
  const sbParams: ISbStoriesParams = { version };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi?.get(`cdn/stories/${slug || 'home'}`, sbParams);
}

export async function getAllSlugs() {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'published',
    // Add any necessary parameters to filter or limit the results
  });

  return data.stories.map((story: any) => ({
    slug: story.full_slug.split('/'),
  }));
}
