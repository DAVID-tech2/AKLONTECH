/* ===================================================================
   AKLON — Shared JavaScript
   - Injects nav/footer (inlined, no fetch needed)
   - Sticky header scroll state
   - Mobile menu toggle
   - Active nav link
   - Scroll reveal animations
   - Contact form validation
   - Newsletter form
   - Animated hero code (typing effect)
   =================================================================== */

// ── Nav HTML (inlined so it works in built output) ───────────────────
const navHTML = `
<header class="site-header" id="siteHeader">
  <div class="container">
    <a href="./index.html" class="logo" aria-label="AKLON home">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="7" fill="#060f24"/>
        <path d="M16 6 L26 26 L20.5 26 L16 17.5 L11.5 26 L6 26 Z" fill="#4d9bff"/>
        <path d="M16 6 L20.5 26 L16 26 Z" fill="#1a63e0" opacity="0.5"/>
      </svg>
      <span>AKLON</span>
    </a>
    <nav class="main-nav" id="mainNav" aria-label="Primary navigation">
      <a href="./index.html" data-page="home">Home</a>
      <a href="./services.html" data-page="services">Services</a>
      <a href="./solutions.html" data-page="solutions">Solutions</a>
      <a href="./about.html" data-page="about">About</a>
      <a href="./projects.html" data-page="projects">Projects</a>
      <a href="./blog.html" data-page="blog">Blog</a>
      <a href="./contact.html" data-page="contact">Contact</a>
    </nav>
    <div class="header-actions">
      <a href="./contact.html" class="btn btn-primary btn-sm">Start a Project</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`

// ── Footer HTML (inlined so it works in built output) ────────────────
const footerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="./index.html" class="logo">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="7" fill="#0a1a33"/>
            <path d="M16 6 L26 26 L20.5 26 L16 17.5 L11.5 26 L6 26 Z" fill="#4d9bff"/>
          </svg>
          <span>AKLON</span>
        </a>
        <p>Ideas · Code · Impact. We design and engineer digital products for businesses, institutions, and ambitious ideas.</p>
        <div class="social-row">
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg></a>
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1c-1.3 0-2.2.3-3 .6-.8.3-1.5.7-2.2 1.4C1.1 2.8.7 3.5.4 4.3.1 5.1 0 6 0 7.3-.1 8.7-.1 9.1-.1 12.4s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2C21.2 1.1 20.5.7 19.7.4c-.8-.3-1.7-.5-3-.6C15.3 0 14.9 0 12 0z"/><path d="M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg></a>
          <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.3a4.8 4.8 0 01-3.8-2.2V15c0 3-2.4 5.5-5.4 5.5S5 18 5 15s2.4-5.5 5.4-5.5c.5 0 1 .1 1.5.2v2.7c-.5-.2-1-.3-1.5-.3a2.8 2.8 0 100 5.6 2.8 2.8 0 002.8-2.8V2h2.7a4.8 4.8 0 003.7 4.3z"/></svg></a>
          <a href="#" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A10 10 0 0022 12c0-5.5-4.5-10-10-10z"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="./about.html">About</a></li>
          <li><a href="./projects.html">Our Work</a></li>
          <li><a href="./services.html">How We Work</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="./services.html">Web & Mobile</a></li>
          <li><a href="./services.html">Enterprise Software</a></li>
          <li><a href="./services.html">AI & Automation</a></li>
          <li><a href="./services.html">Digital Experiences</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Industries</h4>
        <ul>
          <li><a href="./solutions.html">Education</a></li>
          <li><a href="./solutions.html">Healthcare</a></li>
          <li><a href="./solutions.html">Government</a></li>
          <li><a href="./solutions.html">Agriculture</a></li>
          <li><a href="./solutions.html">Business</a></li>
          <li><a href="./solutions.html">Logistics</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get in Touch</h4>
        <div class="footer-contact">
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Kampala, Uganda</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:aklontech25@gmail.com">aklontech25@gmail.com</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <a href="tel:+256754705365">+256 754 705 365</a>
          </div>
        </div>
        <div class="footer-newsletter">
          <form id="newsletterForm">
            <input type="email" placeholder="Your email" aria-label="Email for newsletter" required />
            <button type="submit">Subscribe</button>
          </form>
          <p class="newsletter-msg" id="newsletterMsg">Subscribed — thanks for following AKLON.</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 AKLON. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`

document.addEventListener('DOMContentLoaded', () => {
  // ── Inject partials ────────────────────────────────────────────────
  const navPlaceholder = document.getElementById('nav-placeholder')
  const footerPlaceholder = document.getElementById('footer-placeholder')

  if (navPlaceholder) {
    navPlaceholder.innerHTML = navHTML
    initHeader()
    initMobileMenu()
    initActiveNav()
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML
    initNewsletter()
  }

  // ── Header scroll state ────────────────────────────────────────────
  function initHeader() {
    const header = document.getElementById('siteHeader')
    if (!header) return
    const onScroll = () => {
      if (window.scrollY > 20) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  }

  // ── Mobile menu ────────────────────────────────────────────────────
  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle')
    const nav = document.getElementById('mainNav')
    if (!toggle || !nav) return

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('mobile-open')
      toggle.classList.toggle('open', open)
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    })

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open')
        toggle.classList.remove('open')
        toggle.setAttribute('aria-expanded', 'false')
      })
    })

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('mobile-open')
        toggle.classList.remove('open')
        toggle.setAttribute('aria-expanded', 'false')
      }
    })
  }

  // ── Active nav link ────────────────────────────────────────────────
  function initActiveNav() {
    const navLinks = document.querySelectorAll('.main-nav a[data-page]')
    if (!navLinks.length) return
    const currentPage = document.body.getAttribute('data-page')
    if (!currentPage) return
    navLinks.forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active')
        link.setAttribute('aria-current', 'page')
      }
    })
  }

  // ── Scroll reveal ──────────────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal')
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
      revealEls.forEach(el => observer.observe(el))
    } else {
      revealEls.forEach(el => el.classList.add('in'))
    }
  }

  // ── Animated hero code ─────────────────────────────────────────────
  const animatedCode = document.getElementById('animatedCode')
  if (animatedCode && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typeCode(animatedCode)
  } else if (animatedCode) {
    animatedCode.innerHTML = animatedCode.dataset.code || animatedCode.innerHTML
  }

  // ── Contact form ───────────────────────────────────────────────────
  initContactForm()
})

// ── Newsletter form handler ──────────────────────────────────────────
function initNewsletter() {
  const form = document.getElementById('newsletterForm')
  const msg = document.getElementById('newsletterMsg')
  if (!form || !msg) return
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = form.querySelector('input')
    if (input && input.value.trim()) {
      msg.classList.add('show')
      input.value = ''
      setTimeout(() => msg.classList.remove('show'), 4000)
    }
  })
}

// ── Contact form validation ──────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm')
  if (!form) return

  const successBox = document.getElementById('formSuccess')

  const validators = {
    name: (v) => v.trim().length >= 2 || 'Please enter your name',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Enter a valid email address',
    projectType: (v) => v !== '' || 'Please select a project type',
    message: (v) => v.trim().length >= 10 || 'Tell us a bit more (10+ characters)',
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let valid = true

    Object.keys(validators).forEach(field => {
      const input = form.elements[field]
      if (!input) return
      const result = validators[field](input.value)
      const errorEl = document.getElementById(field + 'Error')
      if (result !== true) {
        valid = false
        input.classList.add('error')
        if (errorEl) {
          errorEl.textContent = result
          errorEl.classList.add('show')
        }
      } else {
        input.classList.remove('error')
        if (errorEl) errorEl.classList.remove('show')
      }
    })

    if (valid) {
      form.style.display = 'none'
      if (successBox) successBox.classList.add('show')
    }
  })

  Object.keys(validators).forEach(field => {
    const input = form.elements[field]
    if (!input) return
    input.addEventListener('input', () => {
      input.classList.remove('error')
      const errorEl = document.getElementById(field + 'Error')
      if (errorEl) errorEl.classList.remove('show')
    })
  })
}

// ── Typing animation for hero code block ─────────────────────────────
function typeCode(el) {
  const plainLines = [
    '// Turning ideas into digital products',
    'const aklon = {',
    '  mission: "Build for the future",',
    '  capabilities: [',
    '    "web", "mobile", "AI", "cloud"',
    '  ],',
    '  ship(idea) {',
    '    return "impact";',
    '  }',
    '};',
  ]

  const highlightedLines = [
    '<span class="ln"><span class="com">// Turning ideas into digital products</span></span>',
    '<span class="ln"><span class="kw">const</span> <span class="fn">aklon</span> = {</span>',
    '<span class="ln">  <span class="fn">mission</span>: <span class="str">"Build for the future"</span>,</span>',
    '<span class="ln">  <span class="fn">capabilities</span>: [</span>',
    '<span class="ln">    <span class="str">"web"</span>, <span class="str">"mobile"</span>, <span class="str">"AI"</span>, <span class="str">"cloud"</span></span>',
    '<span class="ln">  ],</span>',
    '<span class="ln">  <span class="fn">ship</span>(<span class="fn">idea</span>) {</span>',
    '<span class="ln">    <span class="kw">return</span> <span class="str">"impact"</span>;</span>',
    '<span class="ln">  }</span>',
    '<span class="ln">};</span>',
  ]

  // Build a single text string to type out
  const fullText = plainLines.join('\n')
  let charPos = 0

  // Use a single text node for typing — no innerHTML rebuilds per character
  el.innerHTML = ''
  const cursor = document.createElement('span')
  cursor.className = 'typing-cursor'
  const textNode = document.createTextNode('')
  el.appendChild(textNode)
  el.appendChild(cursor)

  // Pre-set the line breaks via white-space CSS
  el.style.whiteSpace = 'pre'

  const typeNext = () => {
    if (charPos >= fullText.length) {
      // Animation done — swap in the final highlighted version once
      el.style.whiteSpace = ''
      el.innerHTML = highlightedLines.join('')
      return
    }
    charPos++
    textNode.nodeValue = fullText.substring(0, charPos)
    setTimeout(typeNext, 18 + Math.random() * 25)
  }

  typeNext()
}
