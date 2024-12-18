import Image from 'next/image';
import Link from 'next/link';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { NavItemStoryblok } from '@/types/component-types-sb';
import { fetchData } from '@/lib/actions';
import { BorderButton } from '@/components/ui/tailwindcss-buttons';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { MobileMenu } from '@/components/ui/mobile-menu';

const Header = async () => {
  try {
    const { data } = (await fetchData('config')) || {};
    const { logo, header_nav, cta_label, cta_link, site_name } =
      data?.story?.content || {};

    if (!data?.story?.content) {
      return null;
    }

    return (
      <header className="flex items-center justify-between px-4 py-5 max-w-7xl mx-auto relative z-50">
        <Link href="/" className="flex items-center">
          {logo?.filename && (
            <Image
              src={logo.filename}
              alt={site_name || 'Logo'}
              width={200}
              height={50}
              className="h-14 w-auto"
              priority
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {header_nav?.map((blok: NavItemStoryblok) =>
              blok?._uid ? (
                <StoryblokServerComponent key={blok._uid} blok={blok} />
              ) : null
            )}
          </nav>

          {cta_label && cta_link?.cached_url && (
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
          {header_nav && cta_label && cta_link?.cached_url && (
            <MobileMenu
              nav={header_nav}
              cta={{
                label: cta_label,
                link: cta_link,
              }}
            />
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Error in Header:', error);
    return null;
  }
};

export default Header;
