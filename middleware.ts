import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const preview = request.nextUrl.searchParams.get('_storyblok');
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-storyblok-version', preview ? 'draft' : 'published');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
