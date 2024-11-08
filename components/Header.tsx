import Image from 'next/image';
import Link from 'next/link';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { NavItemStoryblok } from '@/types/component-types-sb';
import { fetchData } from '@/lib/actions';
import { BorderButton } from '@/components/ui/tailwindcss-buttons';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { MobileMenu } from '@/components/ui/mobile-menu';

const Header = async () => {
  const { data } = (await fetchData('config')) || {};
  const { logo, header_nav, cta_label, cta_link } = data?.story?.content;
  return (
    <header className="flex items-center justify-between px-4 py-5 max-w-7xl mx-auto relative z-50">
      <Link href="/" className="flex items-center">
        <Image
          src={logo.filename}
          alt={logo.alt || 'Logo'}
          width={200}
          height={50}
          className="h-14 w-auto animate-pulse-slow"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
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
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-4">
        <ThemeToggle />
        <MobileMenu
          nav={header_nav}
          cta={{
            label: cta_label,
            link: cta_link,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
