import type { Metadata } from 'next';

type PlaySearchParams = {
  title?: string;
  year?: string;
  stitle?: string;
  stype?: string;
};

type PlayLayoutProps = {
  children: React.ReactNode;
  searchParams: PlaySearchParams;
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: PlaySearchParams;
}): Promise<Metadata> {
  const title =
    searchParams.title ||
    searchParams.stitle ||
    '在线播放 - MoonTV 影视聚合播放器';
  const year = searchParams.year;
  const type =
    searchParams.stype === 'tv'
      ? '电视剧'
      : searchParams.stype === 'movie'
      ? '电影'
      : '影视';

  const fullTitle = year
    ? `${title} (${year}) 在线${type}播放 - MoonTV`
    : `${title} 在线${type}播放 - MoonTV`;

  const description = year
    ? `在线观看《${title}》(${year})，支持多源切换、自动记忆进度与跳过片头片尾。MoonTV 聚合多个免费资源站，提供流畅的${type}播放体验。`
    : `在 MoonTV 在线观看《${title}》，支持多源切换、自动记忆进度与跳过片头片尾，聚合多个免费资源站的${type}资源。`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: '/play',
    },
    openGraph: {
      title: fullTitle,
      description,
      type: 'video.other',
      url: '/play',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

export default function PlayLayout(props: PlayLayoutProps) {
  const title =
    props.searchParams.title ||
    props.searchParams.stitle ||
    '在线播放 - MoonTV 影视聚合播放器';
  const year = props.searchParams.year;
  const isTv = props.searchParams.stype === 'tv';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': isTv ? 'TVSeries' : 'Movie',
    name: title,
    datePublished: year || undefined,
    inLanguage: 'zh-CN',
    description: year
      ? `《${title}》(${year}) 在线${
          isTv ? '剧集' : '电影'
        }播放，支持多源切换与播放记录同步。`
      : `《${title}》在线${
          isTv ? '剧集' : '电影'
        }播放，支持多源切换与播放记录同步。`,
    potentialAction: {
      '@type': 'WatchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: '/play',
      },
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {props.children}
    </>
  );
}
