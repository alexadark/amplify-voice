import Page from '@/components/Page';
import Teaser from '@/components/Teaser';
import Feature from '@/components/Feature';
import Grid from '@/components/Grid';
import {
  apiPlugin,
  ISbStoriesParams,
  StoryblokClient,
  storyblokInit,
} from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: 'bbEq0xXYteP9TkX8SLMuaAtt',
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    feature: Feature,
    grid: Grid,
  },
});

export async function fetchData(url: string) {
  const sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${url}`, sbParams);
}
