/**
 * サイトの文言・リンクはここを編集してください。
 * このファイルを削除しないでください（dev/build が動かなくなります）。
 * バックアップ: src/site-data.example.js（自動同期）
 */
export const site = {
  name: '橙々しじま',
  nameEn: 'TOUDOU SIJIMA',
  role: '雑談、ひとりごと、ときどき脱線',
  description:
    '橙々しじま（とうどうしじま）公式サイト。雑談、ひとりごと、ときどき脱線。配信告知・SNSリンクはこちら。',
  siteUrl: 'https://www.toudousijima.com',
  ogImage: '/images/logo.png',
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
  abukuHero: {
    name: 'あぶく',
    nameEn: 'ABUKU',
    role: '相棒の三又猫',
    slides: [
      { src: '/images/abuku-1.png', alt: 'あぶく' },
      { src: '/images/abuku-2.png', alt: 'あぶく 歩き' },
      { src: '/images/abuku-3.png', alt: 'あぶく 後ろ姿' },
    ],
  },
  infoTitle: '自己紹介',
  nameReading: 'とうとう しじま',
  about: {
    image: '/images/hero-sit.png',
    imageAlt: '橙々しじま 座り',
    quote: 'みんなで探してみて',
    paragraphs: [
      '橙々しじまと申します。ユーモアのあるおじさん。何かの専門家ではなく、いろんな話をしている人です。',
      '活動の軸は「橙々しじま」。音楽と動画はこの名前で、小説だけはペンネーム「三二 一（みつに はじめ）」で発表しています。しじま＝三二 一であることは公開しています。',
      '発表の場はそれぞれ分けていますが、作っている人は同じです。',
    ],
    worksLabel: 'やっていること',
  },
  // link.href が空のものは「準備中」として表示される
  activities: [
    {
      title: '音楽',
      alias: '橙々しじま',
      summary: 'アカペラ。思いついたメロディーと歌詞を、そのまま流す。作り込んだ完成品ではなく、ふと浮かんだものを残していく。',
      link: { label: 'TikTok', href: 'https://www.tiktok.com/@toudousijima' },
    },
    {
      title: '動画',
      alias: '橙々しじま',
      summary: 'ラジオ・雑談系の動画を投稿。ライブ配信は行わない。',
      link: { label: '投稿先', href: '' },
    },
    {
      title: '小説',
      alias: '三二 一',
      aliasReading: 'みつに はじめ',
      summary: '小説は小説として、独立した活動。',
      link: { label: '掲載先', href: '' },
    },
  ],
  profiles: [
    {
      label: 'HOST',
      name: '橙々しじま',
      nameEn: 'TOUDOU SIJIMA',
      image: '',
      imageAlt: '橙々しじま',
      tagline: 'ユーモアのあるおじさん。何かの専門家ではなく、いろんな話をしている人。',
      fields: [
        { label: '誕生日', value: '10月10日' },
        { label: '身長', value: '179cm' },
        { label: '口癖', value: '「みんなで探してみて」' },
      ],
      notes: [
        {
          label: '性格',
          text: '落ち着いていて穏やか。日常のどうでもいいことを面白がる。人や物事を少し離れたところから眺め、自分自身も笑いの対象にする。無理に笑わせようとはしない。',
        },
        {
          label: '話し方',
          text: '漫談のように、日常の小さな出来事から話を広げていく。よく脱線する。',
        },
      ],
    },
    {
      label: 'PARTNER',
      name: 'あぶく',
      nameEn: 'ABUKU',
      image: '',
      imageAlt: 'あぶく',
      tagline: '何者なのかよく分からないけど、いつもしじまの横にいる。',
      fields: [
        { label: '種族', value: '三又の白猫' },
        { label: '年齢', value: '7歳' },
        { label: '大きさ', value: '50〜70cmくらい（微妙に変わる）' },
        { label: '体重', value: '3.3kg' },
        { label: '首輪', value: '赤い首輪の飾り' },
        { label: '好物', value: 'ささみ' },
      ],
      notes: [
        {
          label: 'ふだん',
          text: '基本的に自由。寝ている、食べている、暴れている。',
        },
        {
          label: 'キャラクター',
          text: '設定で縛りすぎず、余白を残すキャラクター。',
        },
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
    {
      category: '配信タグ',
      hashtag: '#しじらじ',
      uses: ['配信感想', '配信実況', '番組関連全般'],
    },
    {
      category: 'ファンアートタグ',
      hashtag: '#しじあーと',
      uses: [
        '橙々しじまのファンアート',
        'あぶくを含むイラスト',
        '配信やラジオに関連する創作作品',
      ],
      variant: 'fanart',
    },
    {
      category: 'お便り・質問募集タグ',
      hashtag: '#しじま便',
      uses: ['橙々しじま宛のお便り', '質問', '相談', '配信で読んでほしい内容'],
      hasMarshmallow: true,
    },
    {
      category: 'お便り・質問募集タグ',
      hashtag: '#あぶく便',
      uses: [
        'あぶく宛のお便り',
        'あぶくへの質問',
        'あぶくに聞いてみたいこと',
        'あぶく目線で答えてほしい内容',
      ],
      variant: 'partner',
      hasMarshmallow: true,
    },
  ],
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
  ],
}
