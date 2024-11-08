import Image from 'next/image';
import Link from 'next/link';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { NavItemStoryblok } from '@/types/component-types-sb';
import { fetchData } from '@/lib/actions';
import { BorderButton } from '@/components/ui/tailwindcss-buttons';

const Header = async () => {
  const { data } = (await fetchData('config')) || {};
  const { logo, header_nav, cta_label, cta_link } = data?.story?.content;
  return (
    <header className="flex items-center justify-between px-4 py-5 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center">
        <Image
          src={logo.filename}
          alt={logo.alt || 'Logo'}
          width={150}
          height={40}
          className="h-10 w-auto"
          priority
        />
      </Link>

      {header_nav && header_nav.length > 0 && (
        <nav className="flex items-center gap-8">
          {header_nav.map((blok: NavItemStoryblok) => (
            <StoryblokServerComponent key={blok._uid} blok={blok} />
          ))}
        </nav>
      )}
      {cta_label && (
        <BorderButton
          label={cta_label}
          href={cta_link.cached_url}
          external={cta_link.target === '_blank'}
        />
      )}
    </header>
  );
};

export default Header;
