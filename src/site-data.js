/**
 * サイトの文言・リンクはここを編集してください。
 * このファイルを削除しないでください（dev/build が動かなくなります）。
 * バックアップ: src/site-data.example.js（自動同期）
 */
export const site = {
  name: '橙々しじま',
  nameEn: 'TOUDOU SIJIMA',
  role: '余白に少しの心を描いた',
  description:
    '橙々しじま（とうどうしじま）公式サイト。余白に少しの心を描いた。配信告知・SNSリンクはこちら。',
  siteUrl: 'https://www.toudousijima.com',
  ogImage: '/images/og.jpg',
  heroSlides: [
    { src: '/images/hero-stand.png', alt: '橙々しじま' },
    { src: '/images/hero-back.png', alt: '橙々しじま 後ろ姿' },
    { src: '/images/hero-sit.png', alt: '橙々しじま 座り' },
  ],
  logo: '/images/logo.png',
  backgrounds: {
    top: '/images/bg-night.jpg',
    bottom: '/images/bg-day.jpg',
  },
  infoTitle: '自己紹介',
  nameReading: 'とうとう しじま',
  about: {
    image: '/images/hero-sit.png',
    imageAlt: '橙々しじま 座り',
    lead: [
      'どうも、自滅系作家の橙々しじまです',
    ],
    facts: [
      { label: '活動', value: '新米小説家' },
      { label: 'ペンネーム', value: '三二　一　（みつにはじめ）' },
    ],
  },
  // href が空の枠は「準備中」。増やすと3列の次の段に並ぶ
  novels: {
    label: 'NOLA',
    title: '過去執筆作品一覧',
    items: [
      {
        title: '超過学級　ー修学旅行編ー',
        author: '三二　一',
        platform: 'Nola',
        cover: '/images/novel-choka.jpg',
        summary: '緩く変な学園ものをシリーズで書いてます。記念すべき1作品目',
        href: 'https://story.nola-novel.com/novel/N-18716818-c73f-4290-9aa5-9e6b52809590',
      },
      {
        title: '砂の城',
        author: '三二　一',
        platform: 'Nola',
        cover: '/images/novel-suna.jpg',
        summary: '世界が砂になった日、僕は夢の城を目指して歩き出した。',
        href: 'https://story.nola-novel.com/novel/N-dfe20eb4-a20b-49bd-a957-e40e1d82ffec',
      },
      {
        title: '悪魔の天使',
        author: '三二　一',
        platform: 'Nola',
        cover: '/images/novel-akuma.jpg',
        summary: '三二　一の３作品目。弱さとは武器でありそれもまた一つの生き方',
        href: 'https://story.nola-novel.com/novel/N-683d4775-2b3f-4903-b96f-72240ce1a77a',
      },
    ],
  },
  profiles: [
    {
      label: 'HOST',
      name: '橙々しじま',
      nameEn: 'TOUDOU SIJIMA',
      image: '/images/sijima-sd.png',
      imageAlt: '橙々しじま',
      tagline: '好きなことを好きなだけ。',
      fields: [
        { label: '誕生日', value: '10月10日' },
        { label: '身長', value: '179cm' },
        { label: '活動', value: '小説作家' },
        { label: 'ペンネーム', value: '三二　一（みつに　はじめ）' },
      ],
    },
    {
      label: 'FAMILY',
      name: 'あぶく',
      nameEn: 'ABUKU',
      image: '/images/abuku-fish.png',
      imageAlt: 'あぶく',
      tagline: 'しじまの家族。',
      fields: [
        { label: '種族', value: '浮き金魚（水泡眼）' },
        { label: '年齢', value: '2歳' },
        { label: '好物', value: '藻' },
      ],
    },
  ],
  streams: [
    {
      id: 'twitcasting',
      title: 'TWITCASTING',
      subtitle: 'ツイキャス',
      description:
        '気軽に立ち上がる配信はこちら。告知やスポット配信も随時行っています。',
      href: 'https://twitcasting.tv/toudousijima',
      icon: '/icons/twitcasting.svg',
      iconLabel: 'TwitCasting',
    },
    {
      id: 'spoon',
      title: 'SPOON',
      subtitle: 'Spoon',
      description: '音声中心の配信。しじまの声の世界を、もっと近くで。',
      href: 'https://u8kv3.app.goo.gl/4Z6TJ',
      icon: '/icons/spoon.png',
      iconLabel: 'Spoon',
    },
  ],
  tags: [
    { hashtag: '#三二一' },
    // { hashtag: '#しじまーと' },
    // { hashtag: '#しじま便' },
  ],
  credit: '火日',
  marshmallow: {
    href: 'https://t.co/hOrVIRN6vZ',
  },
  social: [
    {
      id: 'twitter',
      label: 'X（Twitter）',
      handle: '@toudousijima',
      href: 'https://x.com/toudousijima',
      icon: '/icons/x-app.svg',
    },
    {
      id: 'twitcasting',
      label: 'TwitCasting',
      handle: '@toudousijima',
      href: 'https://twitcasting.tv/toudousijima',
      icon: '/icons/twitcasting.svg',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      handle: '橙々しじま',
      href: 'https://www.youtube.com/channel/UCZzK_si3WKcLK732VOqbVWw',
      icon: '/icons/youtube-app.svg',
    },
    {
      id: 'spoon',
      label: 'Spoon',
      handle: '橙々しじま',
      href: 'https://u8kv3.app.goo.gl/4Z6TJ',
      icon: '/icons/spoon.png',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      handle: '@toudousijima',
      href: 'https://www.tiktok.com/@toudousijima',
      icon: '/icons/tiktok.svg',
    },
    {
      id: 'marshmallow',
      label: 'マシュマロ',
      handle: 'お便り',
      href: 'https://t.co/hOrVIRN6vZ',
      icon: '/icons/marshmallow.svg',
    },
  ],
}
