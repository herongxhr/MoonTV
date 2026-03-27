import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '影视搜索 - MoonTV',
  description:
    'MoonTV 影视搜索支持多资源站聚合检索，快速查找电影、电视剧和综艺内容。',
  alternates: {
    canonical: '/search',
  },
  openGraph: {
    title: '影视搜索 - MoonTV',
    description:
      'MoonTV 影视搜索支持多资源站聚合检索，快速查找电影、电视剧和综艺内容。',
    type: 'website',
    url: '/search',
  },
  twitter: {
    card: 'summary_large_image',
    title: '影视搜索 - MoonTV',
    description:
      'MoonTV 影视搜索支持多资源站聚合检索，快速查找电影、电视剧和综艺内容。',
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
