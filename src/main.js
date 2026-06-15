import './style.css'
import { site } from './site-data.js'

const navItems = [
  { id: 'start', label: 'START' },
  { id: 'info', label: 'INFO' },
  { id: 'profile', label: 'PROFILE' },
  { id: 'stream', label: 'STREAM' },
]

function socialIconLinks() {
  return site.social
    .map(
      (item) => `
        <a
          class="social-btn social-btn--icon"
          href="${item.href}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${item.label}"
        >
          <img src="${item.icon}" alt="" width="48" height="48" loading="lazy" />
        </a>
      `,
    )
    .join('')
}

function footerSocialLinks() {
  return site.social
    .map(
      (item) => `
        <li>
          <a
            class="footer-social__link"
            href="${item.href}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="footer-social__icon" src="${item.icon}" alt="" width="60" height="60" loading="lazy" />
            <span class="footer-social__text">
              <span class="footer-social__label">${item.label}</span>
              <span class="footer-social__handle">${item.handle}</span>
            </span>
          </a>
        </li>
      `,
    )
    .join('')
}

function footerNavLinks() {
  return navItems
    .map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`)
    .join('')
}

function navLinks(linkClass) {
  return navItems
    .map(
      (item) =>
        `<li><a class="${linkClass}" href="#${item.id}" data-nav="${item.id}">${item.label}</a></li>`,
    )
    .join('')
}

function heroDisplayName(name) {
  if (!name.startsWith('橙')) return name

  return `<span class="hero__name-accent">橙</span>${name.slice(1)}`
}

function profileFieldRows(fields) {
  return fields
    .map(
      ({ label, value }) => `
        <div class="profile-row">
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
        <article class="profile-card${index === 1 ? ' profile-card--partner' : ''}">
          <header class="profile-card__head">
            <div class="profile-card__avatar-wrap">
              <img
                class="profile-card__avatar"
                src="${person.image}"
                alt="${person.imageAlt}"
                width="72"
                height="72"
                loading="lazy"
              />
            </div>
            <div class="profile-card__identity">
              <p class="profile-card__label">${person.label}</p>
              <h3 class="profile-card__name">${person.name}</h3>
              <p class="profile-card__name-en">${person.nameEn}</p>
            </div>
          </header>
          <div class="profile-card__body">
            <dl class="profile-card__fields">
              ${profileFieldRows(person.fields)}
            </dl>
          </div>
          ${person.bio ? `<p class="profile-card__bio">${person.bio}</p>` : ''}
        </article>
      `,
    )
    .join('')
}

function streamCards() {
  return site.streams
    .map(
      (stream) => `
        <article class="stream-card">
          <p class="stream-card__eyebrow">${stream.title}</p>
          <h3 class="stream-card__title">${stream.subtitle}</h3>
          <div class="stream-card__rule" aria-hidden="true"></div>
          <p class="stream-card__desc">${stream.description}</p>
        </article>
      `,
    )
    .join('')
}

function infoStandeeSlides() {
  return site.infoStandees
    .map(
      (image, index) => `
        <figure class="info-slide${index === 0 ? ' is-active' : ''}" data-index="${index}">
          <img src="${image.src}" alt="${image.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />
        </figure>
      `,
    )
    .join('')
}

function infoStandeeDots() {
  return site.infoStandees
    .map(
      (_, index) => `
        <button
          type="button"
          class="info-dot${index === 0 ? ' is-active' : ''}"
          data-index="${index}"
          aria-label="立ち絵 ${index + 1}"
        ></button>
      `,
    )
    .join('')
}

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="site-header">
      <div class="site-header__inner">
        <a class="site-logo" href="#start">
          <img src="/images/icon.png" alt="" width="40" height="40" />
          <span>${site.name}</span>
        </a>
        <nav class="site-nav" aria-label="メイン">
          <ul class="site-nav__list">
            ${navLinks('site-nav__link')}
          </ul>
        </nav>
        <button
          class="menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="mobile-nav"
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <div id="mobile-nav" class="mobile-nav" hidden>
      <button class="mobile-nav__backdrop" type="button" aria-label="メニューを閉じる"></button>
      <nav class="mobile-nav__panel" aria-label="モバイルメニュー">
        <p class="mobile-nav__title">MENU</p>
        <ul class="mobile-nav__list">
          ${navLinks('mobile-nav__link')}
        </ul>
      </nav>
    </div>

    <main>
      <section id="start" class="hero section">
        <div class="hero__content">
          <p class="eyebrow">${site.role}</p>
          <div class="hero__title-block">
            <div class="hero__title-ornament" aria-hidden="true">
              <span class="hero__title-line"></span>
              <span class="hero__title-diamond"></span>
              <span class="hero__title-line hero__title-line--short"></span>
            </div>
            <div class="hero__title-frame">
              <span class="hero__title-shimmer" aria-hidden="true"></span>
              <span class="hero__title-corner hero__title-corner--tl" aria-hidden="true"></span>
              <span class="hero__title-corner hero__title-corner--br" aria-hidden="true"></span>
              <h1 class="hero__name">${heroDisplayName(site.name)}</h1>
              <p class="hero__name-en">${site.nameEn}</p>
            </div>
          </div>
          <ul class="footer-social__list hero__social-list">${footerSocialLinks()}</ul>
        </div>
        <div class="hero__visual">
          <div class="hero__frame">
            <img src="/images/hero-radio.png" alt="ラジオスタジオで配信する橙々しじまと相棒の猫" />
          </div>
        </div>
      </section>

      <section id="info" class="section info-section">
        <div class="info-layout">
          <div class="info-visual" data-info-slider>
            <div class="info-visual__frame">
              ${infoStandeeSlides()}
            </div>
            <div class="info-visual__controls">
              <button type="button" class="info-btn" data-info-prev aria-label="前の立ち絵">‹</button>
              <div class="info-visual__dots">${infoStandeeDots()}</div>
              <button type="button" class="info-btn" data-info-next aria-label="次の立ち絵">›</button>
            </div>
          </div>

          <article class="info-panel">
            <header class="info-panel__head">
              <p class="info-panel__number" aria-hidden="true">01</p>
              <div>
                <p class="info-panel__label">INFO</p>
                <h2 class="info-panel__title">${site.infoTitle}</h2>
              </div>
            </header>
            <div class="info-panel__body">
              <p class="info-panel__lead">${site.intro}</p>
              <div class="info-panel__rule" aria-hidden="true"></div>
              <p class="info-panel__note">${site.about}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="profile" class="section profile-section">
        <div class="section-head">
          <p class="section-number">02</p>
          <div>
            <p class="section-label">PROFILE</p>
            <h2>橙々しじま &amp; あぶく</h2>
          </div>
        </div>
        <div class="profile-duo">
          ${profileCards()}
        </div>
      </section>

      <section id="stream" class="section stream-section">
        <div class="section-head">
          <p class="section-number">03</p>
          <div>
            <p class="section-label">STREAM</p>
            <h2>配信について</h2>
          </div>
        </div>
        <div class="stream-grid">
          ${streamCards()}
        </div>
        <div class="stream-account-links">
          ${socialIconLinks()}
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top-row">
          <div class="footer-brand">
            <a class="footer-brand__link" href="#start">
              <span class="footer-brand__avatar-wrap">
                <img src="/images/icon.png" alt="" width="72" height="72" />
              </span>
              <div class="footer-brand__identity">
                <p class="footer-brand__title">
                  <span class="footer-brand__name">${site.name}</span>
                  <span class="footer-brand__name-en">${site.nameEn}</span>
                </p>
                <p class="footer-brand__role">${site.role}</p>
              </div>
            </a>
          </div>

          <nav class="footer-nav" aria-label="フッターナビ">
            <p class="footer-heading">SITE MAP</p>
            <ul>${footerNavLinks()}</ul>
          </nav>
        </div>

        <div class="footer-social">
          <p class="footer-heading">FOLLOW</p>
          <ul class="footer-social__list">${footerSocialLinks()}</ul>
        </div>
      </div>

      <div class="footer-bottom">
        <a class="footer-top" href="#start">PAGE TOP ↑</a>
        <p class="footer-copy">
          <small>© ${new Date().getFullYear()} ${site.name}. All rights reserved.</small>
        </p>
      </div>
    </footer>
  </div>
`

const menuToggle = document.querySelector('.menu-toggle')
const mobileNav = document.querySelector('#mobile-nav')
const mobileBackdrop = document.querySelector('.mobile-nav__backdrop')

function setMobileNavOpen(isOpen) {
  menuToggle?.setAttribute('aria-expanded', String(isOpen))
  menuToggle?.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く')
  if (mobileNav) mobileNav.hidden = !isOpen
  document.body.classList.toggle('nav-open', isOpen)
}

menuToggle?.addEventListener('click', () => {
  setMobileNavOpen(menuToggle.getAttribute('aria-expanded') !== 'true')
})

mobileBackdrop?.addEventListener('click', () => setMobileNavOpen(false))

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMobileNavOpen(false))
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileNav && !mobileNav.hidden) {
    setMobileNavOpen(false)
  }
})

const navLinkElements = document.querySelectorAll('[data-nav]')
const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)

if (sections.length > 0 && navLinkElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        navLinkElements.forEach((link) => {
          link.classList.toggle('is-active', link.dataset.nav === entry.target.id)
        })
      })
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
  )

  sections.forEach((section) => observer.observe(section))
  navLinkElements[0]?.classList.add('is-active')
}

const infoSlider = document.querySelector('[data-info-slider]')
if (infoSlider) {
  const slides = [...infoSlider.querySelectorAll('.info-slide')]
  const dots = [...infoSlider.querySelectorAll('.info-dot')]
  let current = 0

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current))
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current))
  }

  infoSlider.querySelector('[data-info-prev]')?.addEventListener('click', () => showSlide(current - 1))
  infoSlider.querySelector('[data-info-next]')?.addEventListener('click', () => showSlide(current + 1))
  dots.forEach((dot) => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.index)))
  })

  if (slides.length > 1) {
    setInterval(() => showSlide(current + 1), 5000)
  }
}
