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
  ogImage: '/images/hero-radio.png',
  infoTitle: 'お会いできて光栄です',
  intro:
    'みなさま初めまして、橙々しじまと申します。マイクの向こうから、雑談や音楽、ときには深い話やそうでもない話まで——ゆったりとした時間をお届けいたします。落ち着いた空間で、どこかにそっと寄り添えたら幸いです。',
  about:
    '配信ではコメントとの対話を楽しみながら、リスナーの皆さんと素敵な時間を過ごせたらと思います。',
  infoStandees: [
    {
      src: '/images/stand-holding-cat.png',
      alt: '猫を抱える橙々しじま',
    },
    {
      src: '/images/stand-mansion.png',
      alt: '橙々しじま 立ち絵',
    },
  ],
  profiles: [
    {
      label: 'HOST',
      name: '橙々しじま',
      nameEn: 'TOUDOU SIJIMA',
      image: '/images/icon.png',
      imageAlt: '橙々しじま',
      fields: [
        { label: '誕生日', value: '10月10日' },
        { label: '身長', value: '179cm' },
        { label: '飲み物', value: '水' },
        { label: '口癖', value: 'みんなで探してみて' },
        { label: '弱点', value: '集合した虫' },
        { label: '趣味', value: 'マスクの中で変顔' },
      ],
    },
    {
      label: 'PARTNER',
      name: 'あぶく',
      nameEn: 'ABUKU',
      image: '/images/cat-front.png',
      imageAlt: 'あぶく',
      fields: [
        { label: '種族', value: '三又猫' },
        { label: '年齢', value: '不明' },
        { label: '身長', value: '50〜70cm（可変式）' },
        { label: '体重', value: '3.3kg' },
        { label: '好きな食べ物', value: 'ささみ' },
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
  ],
}
