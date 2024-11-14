'use client';

import { fetchData } from '@/lib/actions';
import { SocialItemStoryblok } from '@/types/component-types-sb';
import Image from 'next/image';
import Link from 'next/link';

const Footer = async () => {
  const { data } = (await fetchData('config')) || {};
  const { logo, footer_text, social_items } = data?.story?.content || {};

  if (!data) return null;

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {logo && (
                <Link href="/">
                  <Image
                    src={logo.filename}
                    alt={'Logo'}
                    width={200}
                    height={50}
                    className="h-8 w-auto"
                  />
                </Link>
              )}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Amplify Voice. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {social_items?.map((social: SocialItemStoryblok) => {
                console.log(social);
                return (
                  <a
                    target="_blank"
                    href={social.url?.cached_url}
                    key={social._uid}
                  >
                    <Image
                      src={social.icon?.filename}
                      alt={social.name}
                      width={20}
                      height={20}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
