import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

const navigation = [
  {
    path: '.',
    name: 'Home'
  },
  {
    path: 'destination',
    name: 'Destination'
  },
  {
    path: 'crew',
    name: 'Crew'
  },
  {
    path: 'technology',
    name: 'Technology'
  }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  useEffect(() => {
    const method = isMenuOpen ? 'add' : 'remove'
    document.body.classList[method]('no-scroll')
    window.scrollTo(0, 0)
  }, [isMenuOpen])

  return (
    <header className="p-6 flex justify-between items-center md:pt-0 md:p-0 md:pl-10 xl:pl-14 xl:pt-10 xl:gap-4">
      <Link aria-label="Go to homepage" onClick={() => setIsMenuOpen(false)}>
        <img src="/shared/logo.svg" alt="Space Tourism logo." className="h-[40px] md:h-[48px]" />
      </Link>
      <div className="hidden xl:block flex-1 h-[1px] bg-white/25 ml-12 -mr-12 relative z-10"></div>
      <button
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
        aria-haspopup="menu"
        onClick={toggleMenu}
        className="relative z-20 md:hidden"
      >
        {isMenuOpen ? (
          <img src="/shared/icon-close.svg" alt="" aria-hidden="true" />
        ) : (
          <img src="/shared/icon-hamburger.svg" alt="" aria-hidden="true" />
        )}
      </button>

      <nav className="hidden md:block bg-white/5 h-24 w-full max-w-[450px] backdrop-blur-nav pl-12 xl:max-w-[830px] xl:pl-[7.75rem]">
        <ul className="flex gap-10 h-full text-white uppercase text-sh2 font-condensed tracking-sh2 xl:text-nav xl:leading-nav xl:gap-12 xl:tracking-nav">
          {navigation.map((item, index) => (
            <li key={index}>
              <NavLink className="h-full inline-flex gap-3 items-center relative lg-nav-link" to={item.path}>
                <span className="hidden font-bold xl:inline">{String(index).padStart(2, '0')}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <CSSTransition in={isMenuOpen} classNames="slideLeft" timeout={200} unmountOnExit>
        <div className="fixed z-10 top-0 right-0 pl-8 pt-28 bg-white/5 text-white font-condensed h-dvh w-[256px] backdrop-blur-nav flex flex-col gap-5 text-nav leading-nav tracking-nav uppercase md:hidden">
          {navigation.map((item, index) => (
            <NavLink to={item.path} key={index} className="flex gap-3 py-[0.375rem] nav-link relative" onClick={() => setIsMenuOpen(false)}>
              <span className="font-bold">{String(index).padStart(2, '0')}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </CSSTransition>
      {/* <Transition
        show={isMenuOpen}
        className="fixed z-10 top-0 right-0 pl-8 pt-28 bg-white/5 text-white font-condensed h-dvh w-[256px] backdrop-blur-nav flex flex-col gap-5 text-nav leading-nav tracking-nav uppercase md:hidden"
        {...slideLeft}
      >
        {navigation.map((item, index) => (
          <NavLink to={item.path} key={index} className="flex gap-3 py-[0.375rem] nav-link relative" onClick={() => setIsMenuOpen(false)}>
            <span className="font-bold">{String(index).padStart(2, '0')}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </Transition> */}
    </header>
  )
}
