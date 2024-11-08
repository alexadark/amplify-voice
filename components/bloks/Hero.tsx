import { HeroStoryblok } from '@/types/component-types-sb';
import { WavyBackground } from '../ui/wavy-background';
import Image from 'next/image';
import { BorderButton } from '../ui/tailwindcss-buttons';
import { Glob, Orb, Visualizer } from '@/components/vapi';

interface HeroProps {
  blok: HeroStoryblok;
}

export const Hero = ({ blok }: HeroProps) => {
  const hasVisual = blok.image || blok.vapi_block;

  const renderVapiComponent = () => {
    switch (blok.vapi_block) {
      case 'glob':
        return <Glob />;
      case 'orb':
        return <Orb />;
      case 'visualizer':
        return <Visualizer />;
      default:
        return null;
    }
  };

  return (
    <WavyBackground className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div
          className={`flex ${
            hasVisual
              ? 'flex-col md:flex-row items-center justify-between gap-12'
              : 'flex-col items-center text-center'
          }`}
        >
          {/* Text Content */}
          <div
            className={`flex flex-col gap-6 ${
              hasVisual ? 'md:w-1/2' : 'max-w-3xl'
            }`}
          >
            {blok.title && (
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {blok.title}
              </h1>
            )}
            {blok.description && (
              <p className="text-lg md:text-xl text-gray-400">
                {blok.description}
              </p>
            )}
            {blok.link?.cached_url && (
              <div className="mt-4">
                <BorderButton
                  label="Get Started"
                  href={blok.link.cached_url}
                  external={blok.link.target === '_blank'}
                />
              </div>
            )}
          </div>

          {/* Visual Element */}
          {hasVisual && (
            <div className="md:w-1/2 flex justify-center items-center">
              {blok.image?.filename ? (
                <Image
                  src={blok.image.filename}
                  alt={blok.image.alt || 'Hero image'}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              ) : blok.vapi_block ? (
                renderVapiComponent()
              ) : null}
            </div>
          )}
        </div>
      </div>
    </WavyBackground>
  );
};
