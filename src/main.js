import './style.css'
import { site } from './site-data.js'

const navItems = [
  { id: 'start', label: 'TOP', jp: 'トップ' },
  { id: 'abuku', label: 'ABUKU', jp: 'あぶく' },
  { id: 'about', label: 'ABOUT', jp: '自己紹介' },
  { id: 'profile', label: 'PROFILE', jp: 'プロフィール' },
  { id: 'tags', label: 'TAGS', jp: '公式タグ' },
  { id: 'link', label: 'LINK', jp: 'リンク' },
]

function xHashtagSearchUrl(hashtag) {
  return `https://x.com/search?q=${encodeURIComponent(hashtag)}&src=typed_query&f=live`
}

function navLinks(linkClass) {
  return navItems
    .map(
      (item) =>
        `<li><a class="${linkClass}" href="#${item.id}" data-nav="${item.id}">${item.label}</a></li>`,
    )
    .join('')
}

function drawerLinks() {
  return navItems
    .map(
      (item) => `
        <li>
          <a class="drawer__a" href="#${item.id}" data-nav="${item.id}">
            <span>${item.label}</span>
            <small>${item.jp}</small>
          </a>
        </li>
      `,
    )
    .join('')
}

function socialPills() {
  return site.social
    .map(
      (item) => `
        <a class="pill" href="${item.href}" target="_blank" rel="noopener noreferrer">
          <img src="${item.icon}" alt="" width="28" height="28" />
          <span>${item.label}</span>
        </a>
      `,
    )
    .join('')
}

function profileFieldRows(fields) {
  return fields
    .map(
      ({ label, value }) => `
        <div class="spec">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `,
    )
    .join('')
}

function profileCards() {
  return site.profiles
    .map(
      (person, index) => `
        <article class="who panel" data-reveal style="transition-delay: ${index * 0.08}s">
          ${person.image ? `<img class="who__photo" src="${person.image}" alt="${person.imageAlt}" width="220" height="220" />` : ''}
          <p class="who__role">${person.label}</p>
          <h3 class="who__name">${person.name}</h3>
          <p class="who__en">${person.nameEn}</p>
          ${person.tagline ? `<p class="who__tag">${person.tagline}</p>` : ''}
          <dl class="who__spec">${profileFieldRows(person.fields)}</dl>
        </article>
      `,
    )
    .join('')
}

function novelCards() {
  return site.novels.items
    .map((novel, index) => {
      const delay = `style="transition-delay: ${index * 0.06}s"`
      if (!novel.href) {
        return `
          <article class="novel novel--soon panel" data-reveal ${delay}>
            <div class="novel__cover novel__cover--empty" aria-hidden="true"></div>
            <div class="novel__body">
              <p class="novel__plat">Nola</p>
              <p class="novel__title">${novel.title}</p>
            </div>
          </article>
        `
      }
      return `
        <a class="novel panel" href="${novel.href}" target="_blank" rel="noopener noreferrer" data-reveal ${delay}>
          ${novel.cover ? `<img class="novel__cover" src="${novel.cover}" alt="${novel.title} の表紙" loading="lazy" />` : ''}
          <div class="novel__body">
            <p class="novel__plat">${novel.platform}</p>
            <p class="novel__title">${novel.title}</p>
            ${novel.author ? `<p class="novel__by">${novel.author}</p>` : ''}
            ${novel.summary ? `<p class="novel__sum">${novel.summary}</p>` : ''}
            <span class="novel__go">読む<i aria-hidden="true">↗</i></span>
          </div>
        </a>
      `
    })
    .join('')
}

function tagCards() {
  return site.tags
    .map(
      (tag, index) => `
        <a class="hash" href="${xHashtagSearchUrl(tag.hashtag)}" target="_blank" rel="noopener noreferrer" data-reveal style="transition-delay: ${index * 0.06}s">
          <span class="hash__rule" aria-hidden="true"><i></i><b></b><i></i></span>
          <span class="hash__tag">${tag.hashtag}</span>
          <span class="hash__rule hash__rule--flip" aria-hidden="true"><i></i><b></b><i></i></span>
          <span class="hash__go">Xで検索</span>
        </a>
      `,
    )
    .join('')
}

function abukuPills() {
  const tag = site.tags.find((item) => item.hashtag === '#あぶく銭')
  if (!tag) return ''
  return `
    <a class="pill" href="${xHashtagSearchUrl(tag.hashtag)}" target="_blank" rel="noopener noreferrer">
      <span class="pill__mark" aria-hidden="true">#</span>
      <span>あぶく銭</span>
    </a>
  `
}

function heroSlides(slides = site.heroSlides) {
  return slides
    .map((slide, index) => {
      const sit = slide.src.includes('sit') ? ' hero-slide--sit' : ''
      return `
        <figure class="hero-slide${index === 0 ? ' is-on' : ''}${sit}">
          <img src="${slide.src}" alt="${slide.alt}" ${index === 0 ? '' : 'loading="lazy"'} />
        </figure>
      `
    })
    .join('')
}

function linkCards() {
  return site.social
    .map(
      (item) => `
        <a class="go panel" href="${item.href}" target="_blank" rel="noopener noreferrer" data-reveal>
          <img src="${item.icon}" alt="" width="52" height="52" />
          <span>
            <strong>${item.label}</strong>
            <small>${item.handle}</small>
          </span>
          <i class="go__arr" aria-hidden="true">↗</i>
        </a>
      `,
    )
    .join('')
}

document.querySelector('#app').innerHTML = `
  <div class="bg" aria-hidden="true">
    <img class="bg__img bg__img--top" src="${site.backgrounds.top}" alt="" />
    <img class="bg__img bg__img--bottom" src="${site.backgrounds.bottom}" alt="" />
  </div>
  <div class="page">
    <button class="burger" type="button" aria-expanded="false" aria-controls="drawer" aria-label="メニューを開く">
      <img class="burger__mark burger__mark--open" src="/images/menu-mark.png" alt="" />
      <img class="burger__mark burger__mark--close" src="/images/menu-close.png" alt="" />
    </button>

    <div id="drawer" class="drawer" hidden>
      <button class="drawer__dim" type="button" aria-label="メニューを閉じる"></button>
      <nav class="drawer__sheet" aria-label="メニュー">
        <p class="drawer__ghost" aria-hidden="true">MENU</p>
        <a class="drawer__logo" href="#start"><img src="${site.logo}" alt="${site.name}" /></a>
        <span class="end__rule" aria-hidden="true"><i></i><b></b><i></i></span>
        <ul>${drawerLinks()}</ul>
        <div class="drawer__social">
          ${site.social
            .map(
              (item) => `
                <a href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
                  <img src="${item.icon}" alt="" width="28" height="28" />
                </a>
              `,
            )
            .join('')}
        </div>
      </nav>
    </div>

    <main>
      <section id="start" class="hero" data-hero-slider>
        <div class="hero__fx" aria-hidden="true"></div>
        <div class="hero__board">
          <div class="nameplate">
            <span class="nameplate__rule" aria-hidden="true"><i></i><b></b><i></i></span>
            <p class="hero__kicker">${site.role}</p>
            <h1><span>${site.name[0]}</span>${site.name.slice(1)}</h1>
            <p class="hero__en">${site.nameEn}</p>
            <span class="nameplate__rule nameplate__rule--flip" aria-hidden="true"><i></i><b></b><i></i></span>
          </div>
          <div class="hero__pills">${socialPills()}</div>
        </div>
        <div class="hero__slides">${heroSlides()}</div>
      </section>

      <section id="abuku" class="hero hero--flip" data-hero-slider>
        <div class="hero__fx" aria-hidden="true"></div>
        <div class="hero__slides">${heroSlides(site.abukuHero.slides)}</div>
        <div class="hero__board">
          <div class="nameplate">
            <span class="nameplate__rule" aria-hidden="true"><i></i><b></b><i></i></span>
            <p class="hero__kicker">${site.abukuHero.role}</p>
            <h2 class="hero__name"><span>${site.abukuHero.name[0]}</span>${site.abukuHero.name.slice(1)}</h2>
            <p class="hero__en">${site.abukuHero.nameEn}</p>
            <span class="nameplate__rule nameplate__rule--flip" aria-hidden="true"><i></i><b></b><i></i></span>
          </div>
          <div class="hero__pills hero__pills--abuku">${abukuPills()}</div>
        </div>
      </section>

      <section id="about" class="band">
        <p class="band__ghost" aria-hidden="true">ABOUT</p>
        <div class="band__in about__in">
          <figure class="about__art" data-reveal>
            <img src="${site.about.image}" alt="${site.about.imageAlt}" loading="lazy" />
          </figure>
          <div class="about__text panel" data-reveal>
            <p class="lbl">ABOUT<span>${site.infoTitle}</span></p>
            <h2 class="about__name">${site.name}<small>${site.nameReading}</small></h2>
            <div class="about__lead">
              ${site.about.lead.map((p) => `<p>${p}</p>`).join('')}
            </div>
            <dl class="about__facts">
              ${site.about.facts
                .map(
                  (fact) => `
                    <div>
                      <dt>${fact.label}</dt>
                      <dd>${fact.value}</dd>
                    </div>
                  `,
                )
                .join('')}
            </dl>
          </div>
        </div>
      </section>

      <section class="band" aria-labelledby="novels-title">
        <p class="band__ghost" aria-hidden="true">NOLA</p>
        <div class="band__in">
          <div class="block__head" data-reveal>
            <div>
              <p class="lbl">${site.novels.label}</p>
              <h2 id="novels-title">${site.novels.title}</h2>
            </div>
          </div>
          <div class="novel-grid">${novelCards()}</div>
        </div>
      </section>

      <section id="profile" class="band">
        <p class="band__ghost" aria-hidden="true">PROFILE</p>
        <div class="band__in">
          <div class="block__head" data-reveal>
            <div>
              <p class="lbl">PROFILE</p>
              <h2>橙々しじま &amp; あぶく</h2>
            </div>
          </div>
          <div class="who-grid">${profileCards()}</div>
        </div>
      </section>

      <section id="tags" class="band">
        <p class="band__ghost" aria-hidden="true">TAGS</p>
        <div class="band__in">
          <div class="block__head" data-reveal>
            <div>
              <p class="lbl">TAGS</p>
              <h2>公式タグ</h2>
            </div>
          </div>
          <div class="hash-grid">${tagCards()}</div>
        </div>
      </section>

      <section id="link" class="band">
        <p class="band__ghost" aria-hidden="true">LINK</p>
        <div class="band__in">
          <div class="block__head" data-reveal>
            <div>
              <p class="lbl">LINK</p>
              <h2>SNS・リンク</h2>
            </div>
          </div>
          <div class="go-grid">${linkCards()}</div>
        </div>
      </section>
    </main>

    <footer class="end">
      <span class="end__rule" aria-hidden="true"><i></i><b></b><i></i></span>
      <a class="end__brand" href="#start">
        <img class="end__logo" src="${site.logo}" alt="${site.name}" />
      </a>
      <p class="end__role">${site.role}</p>
      <nav class="end__nav" aria-label="フッター">
        <ul>${navLinks('end__a')}</ul>
      </nav>
      <div class="end__social">
        ${site.social
          .map(
            (item) => `
              <a href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
                <img src="${item.icon}" alt="" width="28" height="28" />
              </a>
            `,
          )
          .join('')}
      </div>
      <p class="end__copy">
        <small>© ${new Date().getFullYear()} ${site.name}</small>
        <small>制作：${site.credit}</small>
      </p>
    </footer>
  </div>
`

const burger = document.querySelector('.burger')
const drawer = document.querySelector('#drawer')
const scrollKeys = new Set([' ', 'PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', 'Home', 'End'])
let lockedScrollY = 0

function drawerSheet() {
  return drawer?.querySelector('.drawer__sheet')
}

function eventInSheet(event) {
  const sheet = drawerSheet()
  return Boolean(sheet && event.target instanceof Node && sheet.contains(event.target))
}

function setDrawer(open) {
  if (open) lockedScrollY = window.scrollY
  burger?.setAttribute('aria-expanded', String(open))
  burger?.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く')
  if (drawer) drawer.hidden = !open
  document.body.classList.toggle('nav-open', open)
}

function blockBackgroundScroll(event) {
  if (!document.body.classList.contains('nav-open') || eventInSheet(event)) return
  event.preventDefault()
}

burger?.addEventListener('click', () => {
  setDrawer(burger.getAttribute('aria-expanded') !== 'true')
})
drawer?.querySelector('.drawer__dim')?.addEventListener('click', () => setDrawer(false))
drawer?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setDrawer(false))
})
document.addEventListener('keydown', (event) => {
  if (!document.body.classList.contains('nav-open')) return
  if (event.key === 'Escape') {
    setDrawer(false)
    return
  }
  if (!scrollKeys.has(event.key) || eventInSheet(event)) return
  event.preventDefault()
})
window.addEventListener('wheel', blockBackgroundScroll, { passive: false })
window.addEventListener('touchmove', blockBackgroundScroll, { passive: false })
window.addEventListener('scroll', () => {
  if (!document.body.classList.contains('nav-open') || window.scrollY === lockedScrollY) return
  window.scrollTo(0, lockedScrollY)
})

const navEls = document.querySelectorAll('[data-nav]')
const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)

if (sections.length && navEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        navEls.forEach((link) => {
          const on = link.dataset.nav === entry.target.id
          link.classList.toggle('is-on', on)
        })
      })
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
  )
  sections.forEach((section) => observer.observe(section))
  navEls[0]?.classList.add('is-on')
}

{
  const root = document.documentElement
  const heroes = document.querySelectorAll('.hero')
  const clamp01 = (v) => Math.min(1, Math.max(0, v))
  const smooth = (t) => t * t * (3 - 2 * t)
  let queued = false

  const update = () => {
    queued = false
    const y = window.scrollY
    const vh = window.innerHeight
    const lastHero = heroes[heroes.length - 1]
    const heroEnd = lastHero ? lastHero.offsetTop + lastHero.offsetHeight : 0
    // HERO/HERO2 の間は強くぼかし、HERO2 を抜けきる1画面分で解像
    const focus = smooth(clamp01((y - (heroEnd - vh)) / vh))
    // HERO 以降のコンテンツ領域の中央を挟んだ1画面分で上→下の背景へクロスフェード
    const max = Math.max(1, root.scrollHeight - vh)
    const contentStart = Math.min(max, Math.max(0, heroEnd - vh))
    const mid = (contentStart + max) / 2
    const mix = smooth(clamp01((y - (mid - vh / 2)) / vh))
    root.style.setProperty('--bg-blur', `${(1 - focus) * 26}px`)
    root.style.setProperty('--bg-mix', mix.toFixed(3))
  }

  const request = () => {
    if (queued) return
    queued = true
    window.requestAnimationFrame(update)
  }

  window.addEventListener('scroll', request, { passive: true })
  window.addEventListener('resize', request)
  update()
}

document.querySelectorAll('[data-hero-slider]').forEach((heroSlider) => {
  const slides = [...heroSlider.querySelectorAll('.hero-slide')]
  if (slides.length < 2) return
  const intervalMs = 3000
  let current = 0
  let timer = 0

  const show = (index) => {
    current = (index + slides.length) % slides.length
    slides.forEach((slide, i) => slide.classList.toggle('is-on', i === current))
  }

  const play = () => {
    stop()
    timer = window.setInterval(() => show(current + 1), intervalMs)
  }

  const stop = () => window.clearInterval(timer)

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop()
    else play()
  })

  play()
})

document.querySelectorAll('[data-reveal]').forEach((el) => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-in')
        io.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  io.observe(el)
})
