import type { Metadata } from 'next';
import { Suspense } from 'react';

import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'MoonTV - 影视聚合播放器',
  description:
    'MoonTV 支持多源影视搜索、在线播放、收藏同步与播放记录管理，提供电影、剧集与综艺聚合浏览体验。',
  alternates: {
    canonical: '/',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MoonTV',
  description:
    'MoonTV 支持多源影视搜索、在线播放、收藏同步与播放记录管理，提供电影、剧集与综艺聚合浏览体验。',
  inLanguage: 'zh-CN',
  url: '/',
  potentialAction: {
    '@type': 'SearchAction',
    target: '/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Suspense>
        <HomeClient />
      </Suspense>
    </>
  );
}
