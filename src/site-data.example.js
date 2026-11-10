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
        excerpt: {
          chapter: '修学旅行',
          lines: [
            '僕の名前は吉田碧斗（よしだ あおと）。なんてことないただの中学生だ。2年生をしているよ。なんでもこの学校には超過学級っていう呼ばれ方をした非公式のクラスがあるって噂だ。みんな何かしら変なところがあるらしい。かく言う僕もそこに含まれているみたいなんだけど、よく分からない。ただの普通の中学生だっていうのに。失礼しちゃうね。',
            'とまあこんな感じで、これは変な奴らと過ごす学校生活の話。',
          ],
        },
      },
      {
        title: '砂の城',
        author: '三二　一',
        platform: 'Nola',
        cover: '/images/novel-suna.jpg',
        summary: '世界が砂になった日、僕は夢の城を目指して歩き出した。',
        href: 'https://story.nola-novel.com/novel/N-dfe20eb4-a20b-49bd-a957-e40e1d82ffec',
        excerpt: {
          chapter: 'chapter0　砂に巻き込まれる',
          lines: [
            '今日、世界が白い砂に襲われた。',
            '深夜２時頃、まばゆい光が日常を照らした。その光は世界のすべてを飲み込むかのごとく世界各地を白い砂に変えていった。人やモノ、街や建物までもが白く、砂に変わっていったのだ。',
            'なにか白い光が見える。気づけばそこは砂浜にいた。とても広く、まるで終わりがないかように続く砂の道が広がっている。',
          ],
        },
      },
      {
        title: '悪魔の天使',
        author: '三二　一',
        platform: 'Nola',
        cover: '/images/novel-akuma.jpg',
        summary: '三二　一の３作品目。弱さとは武器でありそれもまた一つの生き方',
        href: 'https://story.nola-novel.com/novel/N-683d4775-2b3f-4903-b96f-72240ce1a77a',
        excerpt: {
          chapter: '関係１　彼女の仕方',
          lines: [
            '僕の毎日には、決まった形がある。',
            '六時四十分に目覚ましが鳴り、止めてから十数えて起き上がる。食パンを一枚焼いて、インスタントのコーヒーを淹れ、天気予報を見ながら食べる。洗った皿は水切りかごに立てかけておく。七時二十分、家を出る。',
            '駅までの道は二通りある。コンビニの前を通る大通りと、住宅街を抜けてパン屋の角を曲がる細い道。僕が選ぶのはいつも細い方だ。信号がひとつ少ないぶん、二分早く駅に着ける。朝の二分は、夕方の十分より重い。',
          ],
        },
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
