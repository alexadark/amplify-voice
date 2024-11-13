import {
  Page,
  NavItem,
  Hero,
  LogoCarousel,
  LogoItem,
  ServicesSection,
  ServiceItem,
  Carousel,
  CarouselItem,
  HowWeWorkSection,
  HowWeWorkCard,
} from '@/components/bloks';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const components = {
  page: Page,
  'nav-item': NavItem,
  hero: Hero,
  'logo-carousel': LogoCarousel,
  'logo-item': LogoItem,
  'services-section': ServicesSection,
  'service-item': ServiceItem,
  carousel: Carousel,
  'carousel-item': CarouselItem,
  'how-we-work-section': HowWeWorkSection,
  'how-we-work-card': HowWeWorkCard,
};

export const getStoryblokApi = storyblokInit({
  accessToken: 'i9QZukdbYzm5mq2enYmHEgtt',
  use: [apiPlugin],
  components,
});
