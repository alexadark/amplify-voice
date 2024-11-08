import { Page, NavItem, Hero } from '@/components/bloks';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: 'i9QZukdbYzm5mq2enYmHEgtt',
  use: [apiPlugin],
  components: {
    page: Page,
    'nav-item': NavItem,
    hero: Hero,
  },
});
