import { fetchData, getAllSlugs } from '@/lib/actions';
import { headers } from 'next/headers';
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const headersList = headers();
  const version = headersList.get('x-storyblok-version') as
    | 'draft'
    | 'published';
  const slug = params.slug?.join('/') || 'home';

  const { data } = await fetchData(slug, version);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <StoryblokStory story={data.story} />;
}

// For production, generate static pages
export async function generateStaticParams() {
  if (process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true') {
    return [];
  }

  const slugs = await getAllSlugs();

  // Ensure the homepage is included
  return [{ slug: ['/'] }, ...slugs];
}
