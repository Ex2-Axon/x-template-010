import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

/* ── Technical Decorations ── */
function TechDecor() {
  return (
    <div className="tech-decor-layer" aria-hidden="true">
      <div className="corner-bracket cb-tl" />
      <div className="corner-bracket cb-tr" />
      <div className="corner-bracket cb-bl" />
      <div className="corner-bracket cb-br" />
      <span className="data-label" style={{ top: '10px', left: '10px' }}>SYS_LOAD: 0.12ms</span>
      <span className="data-label" style={{ top: '10px', right: '10px' }}>UI_VER: 1.10.0</span>
      <span className="data-label" style={{ bottom: '10px', left: '10px' }}>GRID_ACTIVE: TRUE</span>
      <span className="data-label" style={{ bottom: '10px', right: '10px' }}>TZ: UTC+7</span>
    </div>
  )
}

/* ── Animated counter number ── */
function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'scale(1.4)'
    el.style.color = '#60A5FA'
    const t = setTimeout(() => {
      el.style.transform = 'scale(1)'
      el.style.color = ''
    }, 200)
    return () => clearTimeout(t)
  }, [value])

  return (
    <span
      ref={ref}
      className="counter-num"
      style={{ transition: 'all 0.2s ease' }}
    >
      {value}
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="noise-overlay" />
      
      <main>
        <section className="hero-container tech-card">
          <TechDecor />
          
          <div className="flex items-center gap-2 mb-4">
            <span className="status-dot" />
            <span className="text-[10px] tracking-[0.2em] font-heading text-primary uppercase">
              GRID ALIGNED
            </span>
          </div>

          <div className="hero-visual">
            <img src={heroImg} className="base" alt="Hero representation" />
            <img src={reactLogo} className="logo-float logo-react" alt="React logo" />
            <img src={viteLogo} className="logo-float logo-vite" alt="Vite logo" />
          </div>

          <h1 className="glitch-text text-4xl md:text-6xl text-white mt-6">
            OPTIMIZED INTERFACE
          </h1>
          
          <p className="max-w-md text-muted font-body leading-relaxed">
            A precise and functional design for modern applications. 
            Edit <code className="text-accent">src/App.tsx</code> to begin.
          </p>

          <button
            type="button"
            className="tech-button mt-4"
            onClick={() => setCount((c) => c + 1)}
          >
            VIEW STRUCTURE [<CounterNum value={count} />]
          </button>
        </section>

        <div className="grid-sections">
          {/* Documentation Section */}
          <section id="docs" className="tech-card section-card">
            <div className="flex items-center gap-3">
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h2 className="font-heading text-xl uppercase tracking-wider">Documentation</h2>
            </div>
            <p className="text-muted text-sm">Access technical specifications and guides.</p>
            <ul className="link-list">
              <li>
                <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="link-item">
                  <img src={viteLogo} alt="" className="w-5 h-5" />
                  <span className="text-sm font-heading">Explore Vite</span>
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank" rel="noreferrer" className="link-item">
                  <img src={reactLogo} alt="" className="w-5 h-5" />
                  <span className="text-sm font-heading">Learn React</span>
                </a>
              </li>
            </ul>
          </section>

          {/* Social Section */}
          <section id="social" className="tech-card section-card">
            <div className="flex items-center gap-3">
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <h2 className="font-heading text-xl uppercase tracking-wider">Connect</h2>
            </div>
            <p className="text-muted text-sm">Join the development network.</p>
            <ul className="link-list">
              <li>
                <a href="https://github.com/Ex2-Axon/x-template" target="_blank" rel="noreferrer" className="link-item">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span className="text-sm font-heading">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/8Zeq8VCU" target="_blank" rel="noreferrer" className="link-item">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.666 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.125-.094.252-.192.37-.294a.077.077 0 01.08-.01c3.927 1.795 8.186 1.795 12.061 0a.077.077 0 01.08.01c.118.102.245.2.37.294a.077.077 0 01-.009.128 12.98 12.98 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
                  <span className="text-sm font-heading">Discord</span>
                </a>
              </li>
              <li>
                <a href="https://x.com/Microtronic2" target="_blank" rel="noreferrer" className="link-item">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  <span className="text-sm font-heading">X.com</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <p className="font-body text-xs tracking-widest opacity-60">
          © 2026 Microtronic. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
