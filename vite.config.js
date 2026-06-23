import { defineConfig } from 'vite'

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
}

function resolveSiteUrl(site) {
  if (site.siteUrl) {
    return site.siteUrl.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  }
  return 'http://localhost:5173'
}

function ogpMetaTags(site, siteUrl) {
  const title = `${site.name} | Official`
  const description = site.description
  const ogImage = `${siteUrl}${site.ogImage}`
  const twitter = site.social?.find((item) => item.id === 'twitter')

  const tags = [
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeAttr(`${siteUrl}/`)}" />`,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`,
    `<meta property="og:locale" content="ja_JP" />`,
    `<meta property="og:site_name" content="${escapeAttr(site.name)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`,
  ]

  if (twitter?.handle) {
    tags.push(
      `<meta name="twitter:site" content="${escapeAttr(twitter.handle)}" />`,
    )
  }

  return tags.join('\n    ')
}

function ogpPlugin(site) {
  const siteUrl = resolveSiteUrl(site)
  const meta = ogpMetaTags(site, siteUrl)

  return {
    name: 'inject-ogp',
    transformIndexHtml(html) {
      const withoutDescription = html.replace(
        /<meta\s+name="description"[^>]*>\s*/i,
        '',
      )
      return withoutDescription.replace('</head>', `    ${meta}\n  </head>`)
    },
  }
}

export default defineConfig(async () => {
  const { site } = await import('./src/site-data.js')

  return {
    base: './',
    plugins: [ogpPlugin(site)],
  }
})
