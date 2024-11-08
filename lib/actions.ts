'use server';

import { ISbStoriesParams, StoryblokClient } from '@storyblok/react/rsc';
import { getStoryblokApi } from './storyblok';

export async function fetchData(url: string) {
  const sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi?.get(`cdn/stories/${url}`, sbParams);
}
