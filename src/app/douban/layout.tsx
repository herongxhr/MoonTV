import type { Metadata } from 'next';

type DoubanSearchParams = {
  type?: string;
};

const getDoubanTitle = (type?: string) => {
  if (type === 'movie') return '豆瓣电影榜单 - MoonTV';
  if (type === 'tv') return '豆瓣电视剧榜单 - MoonTV';
  if (type === 'show') return '豆瓣综艺榜单 - MoonTV';
  if (type === 'custom') return '豆瓣自定义精选 - MoonTV';
  return '豆瓣热门影视榜单 - MoonTV';
};

const getDoubanDescription = (type?: string) => {
  if (type === 'movie')
    return '浏览来自豆瓣的热门电影榜单，按评分与类别筛选热门影片，支持一键跳转到 MoonTV 播放。';
  if (type === 'tv')
    return '浏览来自豆瓣的热门电视剧榜单，发现高分剧集，并在 MoonTV 中快速播放。';
  if (type === 'show')
    return '浏览来自豆瓣的热门综艺榜单，发现好看的综艺节目，并在 MoonTV 中快速播放。';
  if (type === 'custom')
    return '基于豆瓣数据的自定义影视精选列表，在 MoonTV 中一站式浏览与播放。';
  return '基于豆瓣的热门影视榜单，包含电影、电视剧和综艺，支持一键跳转到 MoonTV 播放。';
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: DoubanSearchParams;
}): Promise<Metadata> {
  const type = searchParams.type;
  const title = getDoubanTitle(type);
  const description = getDoubanDescription(type);

  const search = type ? `?type=${encodeURIComponent(type)}` : '';
  const canonical = `/douban${search}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function DoubanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
