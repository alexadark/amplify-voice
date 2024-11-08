import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import type { NavItemStoryblok } from '@/types/component-types-sb';

export const NavItem = ({ blok }: { blok: NavItemStoryblok }) => {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok?.link?.cached_url || ''}
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      {blok?.label}
    </Link>
  );
};
